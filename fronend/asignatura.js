function getAsignaturaFormData() {
    return {
        codigo: document.getElementById('codigo').value.trim(),
        nombre: document.getElementById('nombre').value.trim(),
        semestre: document.getElementById('semestre').value.trim(),
        seccion: document.getElementById('seccion').value.trim()
    };
}

function guardarAsignatura(event) {
    event.preventDefault();
    const data = getAsignaturaFormData();

    if (!data.codigo || !data.nombre || !data.semestre || !data.seccion) {
        alert('Complete todos los campos de la asignatura.');
        return;
    }

    fetch('https://ejemplodedsws.netlify.app/.netlify/functions/asignaturas/agregar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(txt => {
        console.log('Asignatura registrada:', txt);
        alert('Asignatura registrada con éxito.');
    })
    .catch(err => {
        console.error('Error al registrar asignatura:', err);
        alert('Error al registrar asignatura.');
    });
}

function consultarAsignatura(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigoBuscar').value.trim();
    fetch(`https://ejemplodedsws.netlify.app/.netlify/functions/asignaturas/consultar/${codigo}`)
    .then(res => res.json())
    .then(data => {
        let html = `<p><strong>Nombre:</strong> ${data.nombre}</p>` +
                   `<p><strong>Semestre:</strong> ${data.semestre}</p>` +
                   `<p><strong>Sección:</strong> ${data.seccion}</p>`;
        document.getElementById('resultadoAsignatura').innerHTML = html;
    })
    .catch(err => {
        console.error('Error al consultar asignatura:', err);
        alert('No se pudo consultar la asignatura.');
    });
}

