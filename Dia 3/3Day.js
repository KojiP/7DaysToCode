document.getElementById('historia').innerText = "¡Bienvenido a la aventura de aprendizaje de desarrollo web! Primero, elige si quieres ser Frontend o Backend.";

function eleccionFrontOBack() {
    let eleccion = prompt("¿Quieres ser Frontend o Backend? (Escribe 'Frontend' o 'Backend')")?.toLowerCase();
    if (eleccion === 'frontend') {
        alert("¡Genial! El desarrollo Frontend se enfoca en la parte visual de las aplicaciones.");
        eleccionEspecializacion('frontend');
    }
    else if (eleccion === 'backend') {
        alert("¡Excelente! El desarrollo Backend se encarga de la lógica y bases de datos.");
        eleccionEspecializacion('backend');
    } else {
        alert("Por favor, elige una opción válida: 'Frontend' o 'Backend'.");
        eleccionFrontOBack();
    }
}

function eleccionEspecializacion(area) {
    let especializacion;
    if (area === 'frontend') {
        especializacion = prompt("¿Quieres aprender React o aprender Vue? (Escribe 'React' o 'Vue')")?.toLowerCase();
        if (especializacion !== 'react' && especializacion !== 'vue') {
            alert("Por favor, elige 'React' o 'Vue'.");
            return eleccionEspecializacion(area);
        }
    } else if (area === 'backend') {
        especializacion = prompt("¿Quieres aprender C# o aprender Java? (Escribe 'C#' o 'Java')")?.toLowerCase();
        if (especializacion !== 'c#' && especializacion !== 'java') {
            alert("Por favor, elige 'C#' o 'Java'.");
            return eleccionEspecializacion(area);
        }
    }
    eleccionEspecializarOFullstack();
}

function eleccionEspecializarOFullstack() {
    let eleccion = prompt("¿Quieres especializarte en el área elegida o convertirte en Fullstack? (Escribe 'Especializarme' o 'Fullstack')")?.toLowerCase();
    if (eleccion === 'especializarme') {
        alert("¡Perfecto! La especialización te permitirá profundizar en un área específica.");
    }
    else if (eleccion === 'fullstack') {
        alert("¡Increíble! Ser Fullstack te dará una visión completa del desarrollo web.");
    } else {
        alert("Por favor, elige una opción válida: 'Especializarme' o 'Fullstack'.");
        eleccionEspecializarOFullstack();
    }
    aprenderTecnologia();
}

function aprenderTecnologia() {
    let tecnologia;
    while (true) {
        tecnologia = prompt("¿Hay alguna tecnología que te gustaría aprender? (Escribe 'Salir' para terminar)")?.toLowerCase();
        if (tecnologia === 'salir') {
            break;
        } else if (tecnologia) {
            alert(`¡Excelente! Aprender ${tecnologia} te abrirá muchas puertas en el mundo del desarrollo.`);
        } else {
            alert("Por favor, escribe el nombre de una tecnología o 'Salir' para terminar.");
        }
    }
    alert("¡Gracias por participar en esta aventura de aprendizaje!");
}

eleccionFrontOBack();