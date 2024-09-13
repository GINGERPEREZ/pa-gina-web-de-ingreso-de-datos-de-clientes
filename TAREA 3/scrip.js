document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores del formulario
    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const ciudad = document.getElementById('ciudad').value;

    // Validación simple (puedes mejorar esto según tus necesidades)
    if (!cedula || !apellidos || !nombres || !direccion || !telefono || !correo || !ciudad) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Mostrar los datos en la consola o enviar a un servidor
    console.log({
        cedula,
        apellidos,
        nombres,
        direccion,
        telefono,
        correo,
        ciudad
    });

    alert('Datos enviados correctamente.');
});