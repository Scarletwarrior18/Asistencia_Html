function getFormData(formId) {
    const form = document.getElementById(formId);
    const data = {};
    Array.from(form.elements).forEach(el => {
        if (el.tagName.toLowerCase() === 'input' && el.id) {
            data[el.id] = el.value.trim();
        }
    });
    return data;
}


function guardar(event) {
    event.preventDefault();
    const data = getFormData('formRegistro');
    // Validación básica
    if (!data.dni || !data.nombre || !data.apellidos || !data.correo) {
        alert('Complete todos los campos antes de registrar.');
        return;
    }
   
    const payload = JSON.stringify({
        dni: data.dni,
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.correo
    });

    fetch('https://ejemplodedsws.netlify.app/.netlify/functions/estudiantes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        redirect: 'follow'
    })
    .then(res => res.text())
    .then(txt => {
        console.log('Respuesta POST:', txt);
        alert('Estudiante registrado con éxito.');
    })
    .catch(err => {
        console.error('Error POST:', err);
        alert('Error al registrar estudiante.');
    });
}


function listar(event) {
    event.preventDefault();
    fetch('https://ejemplodedsws.netlify.app/.netlify/functions/estudiantes', {
        method: 'GET',
        redirect: 'follow'
    })
    .then(res => res.text())
    .then(txt => cargar(txt))
    .catch(err => {
        console.error('Error GET:', err);
        alert('Error al listar estudiantes.');
    });
}

function cargar(resultado) {
    let arr;
    try {
        arr = JSON.parse(resultado);
    } catch {
        alert('Respuesta JSON inválida.');
        return;
    }
    let html = '';  
    arr.forEach(est => {
        html += `<div class=\"rta-item\">` +
                `<p><strong>DNI:</strong> ${est.dni}</p>` +
                `<p><strong>Nombre y Apellidos:</strong> ${est.nombre} ${est.apellidos}</p>` +
                `<p><strong>Email:</strong> ${est.email}</p>` +
                `</div><hr>`;
    });
    document.getElementById('rta').innerHTML = html;
}
