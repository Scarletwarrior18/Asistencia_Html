document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button');

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const texto = boton.textContent.trim().toLowerCase();

            // Opcional: puedes hacer un log
            console.log(`Redirigiendo a la sección: ${texto}`);

            // Redireccionamiento según el texto del botón
            switch (texto) {
                case 'ir a departamento':
                    window.location.href = 'departamento.html';
                    break;
                case 'ir a estudiante':
                    window.location.href = 'estudiante.html';
                    break;
                case 'ir a asignatura':
                    window.location.href = 'asignatura.html';
                    break;
                case 'ir a asistencia':
                    window.location.href = 'asistencia.html';
                    break;
                default:
                    alert('Opción no reconocida.');
            }
        });
    });
});

