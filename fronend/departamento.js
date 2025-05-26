function getDepartamentoFormData() {
    return {
        codigo: document.getElementById('codigo').value.trim(),
        nombre: document.getElementById('nombre').value.trim(),
        descripcion: document.getElementById('descripcion').value.trim()
    };
}

function guardarDepartamento(event) {
    event.preventDefault();
    const data = getDepartamentoFormData();

    if (!data.codigo || !data.nombre || !data.descripcion) {
        alert('Complete todos los campos antes de registrar el departamento.');
        return;
    }

    fetch('https://ejemplodedsws.netlify.app/.netlify/functions/departamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(txt => {
        console.log('Departamento registrado:', txt);
        alert('Departamento registrado con éxito.');
    })
    .catch(err => {
        console.error('Error al registrar departamento:', err);
        alert('Error al registrar departamento.');
    });
}

function consultarDepartamento(event) {
    event.preventDefault();
    const codigo = document.getElementById('codigoBuscar').value.trim();
    fetch(`https://ejemplodedsws.netlify.app/.netlify/functions/departamentos/${codigo}`)
    .then(res => res.json())
    .then(data => {
        let html = `<p><strong>Nombre:</strong> ${data.nombre}</p><p><strong>Descripción:</strong> ${data.descripcion}</p>`;
        document.getElementById('resultadoDepartamento').innerHTML = html;
    })
    .catch(err => {
        console.error('Error al consultar departamento:', err);
        alert('No se pudo consultar el departamento.');
    });
}
