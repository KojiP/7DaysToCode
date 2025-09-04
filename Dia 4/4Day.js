let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let input = document.getElementById('numero');
let mensaje = document.getElementById('message');
let intentosRestantes = document.getElementById('attempts');
let intentos = 3;
console.log(numeroSecreto);

function verificarNumero() {
    let valor = Number(input.value);

    if (isNaN(valor) || valor < 1 || valor > 10) {
        mensaje.innerText = 'Por favor, ingresa un número válido entre 1 y 10.';
        return;
    }

    intentos--;

    if (valor === numeroSecreto) {
        mensaje.innerText = '¡Felicidades! ¡Adivinaste el número!';
        intentosRestantes.innerText = '';
        document.getElementById('guessBtn').disabled = true;
    } else if (intentos > 0) {
        mensaje.innerText = valor < numeroSecreto ? 'Demasiado bajo. Intenta de nuevo.' : 'Demasiado alto. Intenta de nuevo.';
        intentosRestantes.innerText = `Intentos restantes: ${intentos}`;
    } else {
        mensaje.innerText = `Lo siento, has perdido. El número era ${numeroSecreto}.`;
        intentosRestantes.innerText = '';
        document.getElementById('guessBtn').disabled = true;
    }
    input.value = '';
    input.focus();
}