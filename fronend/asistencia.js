let listaEstudiantes = [];
let listaGuardada = [];

function crearSesion() {
    listaEstudiantes = [];
    listaGuardada = [];
    document.querySelector("#tablaAsistencia tbody").innerHTML = "";
    document.querySelector("#tablaGuardada tbody").innerHTML = "";
    alert("Sesión creada correctamente.");
}

function agregarEstudiante() {
    const codigo = document.getElementById("codigoEstudiante").value.trim();
    if (codigo === "") {
        alert("Ingresa un código válido.");
        return;
    }

    listaEstudiantes.push({ codigo, estado: "AUSENTE" });
    actualizarTabla();
    document.getElementById("codigoEstudiante").value = "";
}

function actualizarTabla() {
    const tbody = document.querySelector("#tablaAsistencia tbody");
    tbody.innerHTML = "";
    listaEstudiantes.forEach((e, index) => {
        const fila = `
          <tr>
            <td>${e.codigo}</td>
            <td class="estado ${e.estado}">${e.estado}</td>
            <td><button class="cambiar-btn" onclick="cambiarEstado(${index})">Cambiar a PRESENTE</button></td>
          </tr>
        `;
        tbody.innerHTML += fila;
    });
}

function cambiarEstado(index) {
    if (listaEstudiantes[index].estado === "AUSENTE") {
        listaEstudiantes[index].estado = "PRESENTE";
        actualizarTabla();
    }
}

function guardarSesion() {
    listaGuardada = JSON.parse(JSON.stringify(listaEstudiantes));
    actualizarTablaGuardada();
    alert("Sesión guardada con éxito.");
}

function actualizarTablaGuardada() {
    const tbody = document.querySelector("#tablaGuardada tbody");
    tbody.innerHTML = "";
    listaGuardada.forEach((e, index) => {
        const fila = `
          <tr>
            <td>${e.codigo}</td>
            <td class="estado ${e.estado === 'PRESENTE' ? 'PRESENTE' : 'AUSENTE'}">${e.estado}</td>
            <td><button class="cambiar-btn" onclick="cambiarATarde(${index})">Cambiar a LLEGÓ TARDE</button></td>
          </tr>
        `;
        tbody.innerHTML += fila;
    });
}

function cambiarATarde(index) {
    if (listaGuardada[index].estado !== "LLEGÓ TARDE") {
        listaGuardada[index].estado = "LLEGÓ TARDE";
        actualizarTablaGuardada();
    }
}
