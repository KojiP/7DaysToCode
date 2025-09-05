let frutas = [], lacteos = [], dulces = [], congelados = [];

function agregar() {
    let comida = prompt("¿Qué comida deseas agregar?");
    if (!comida) return;
    let cat = prompt("¿En qué categoría? (frutas, lacteos, dulces, congelados)").toLowerCase();
    if (cat === "frutas") frutas.push(comida);
    else if (cat === "lacteos") lacteos.push(comida);
    else if (cat === "dulces") dulces.push(comida);
    else if (cat === "congelados") congelados.push(comida);
    else alert("Categoría no válida.");
}

function eliminar() {
    let cat = prompt("¿De qué categoría quieres eliminar? (frutas, lacteos, dulces, congelados)").toLowerCase();
    let arr = cat === "frutas" ? frutas : cat === "lacteos" ? lacteos : cat === "dulces" ? dulces : cat === "congelados" ? congelados : null;
    if (!arr || arr.length === 0) {
        alert("¡No hay elementos en esa categoría!");
        return;
    }
    alert("Lista actual: " + arr.join(", "));
    let comida = prompt("¿Qué comida deseas eliminar exactamente?");
    let idx = arr.indexOf(comida);
    if (idx !== -1) {
        arr.splice(idx, 1);
        alert(`"${comida}" eliminado de ${cat}.`);
    } else {
        alert("¡No fue posible encontrar el elemento en la lista!");
    }
}

function mostrarLista() {
    alert(`Lista actual:\nFrutas: ${frutas}\nLácteos: ${lacteos}\nDulces: ${dulces}\nCongelados: ${congelados}`);
}