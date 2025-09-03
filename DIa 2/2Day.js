let respuesta1 = '';
let respuesta2 = '';
let respuesta3 = '';
let respuestaGusto;

function manejarEnvioFormulario() {
    respuesta1 = document.getElementById('respuesta1').value;
    respuesta2 = document.getElementById('respuesta2').value;
    respuesta3 = document.getElementById('respuesta3').value;
    console.log(respuesta1, respuesta2, respuesta3);
    alert(`Hola ${respuesta1}, tienes ${respuesta2} años y ya estás aprendiendo ${respuesta3}!`);
    document.getElementById('preguntasForm').reset();
    envio2Pregunta();

}

function envio2Pregunta() {
    respuestaGusto = prompt(`¿Te gusta estudiar ${respuesta3} Responde con el número 1 para SÍ o 2 para NO.`);
    console.log(respuestaGusto);
    if (respuestaGusto == 1) {
        alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
    } else if (respuestaGusto == 2) {
        alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
    } else {
        alert('Respuesta no válida. Por favor, responde con 1 o 2.');
        envio2Pregunta();
    }
}