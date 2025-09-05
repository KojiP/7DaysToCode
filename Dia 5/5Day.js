let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];

while(true){
    let accion = prompt("¿Deseas agregar un alimento a tu lista de compras, responde con 'si' o 'no'").toLowerCase();
    if(accion === "si"){
        agregarProducto();
    }
    else if(accion === "no"){
        mostrarLista();
        break;
    }
    else{
        alert("Respuesta no válida. Por favor, responde con 'si' o 'no'.");
    }
}

function agregarProducto(){
    let productoIngresado = prompt("Ingrese el nombre del producto que desea agregar:");
    determinarTipoProducto(productoIngresado);
}

function determinarTipoProducto(producto){
    let tipoProducto = prompt("A que categoría pertenece este producto (fruta, lacteo, congelado, dulce):").toLowerCase();
    switch(tipoProducto){
        case "fruta":
            frutas.push(producto);
            break;
        case "lacteo":
            lacteos.push(producto);
            break;
        case "congelado":
            congelados.push(producto);
            break;
        case "dulce":
            dulces.push(producto);
            break;
        default:
            alert("Categoría no válida. Por favor, intente de nuevo.");
            return;
    }
    alert(`Producto ${producto} agregado a la categoría ${tipoProducto}.`);
}
function mostrarLista(){
    let listaCompleta = "Lista de Compras:\n\n";
    listaCompleta += "Frutas: " + (frutas.length ? frutas.join(", ") : "Ninguna") + "\n";
    listaCompleta += "Lácteos: " + (lacteos.length ? lacteos.join(", ") : "Ninguna") + "\n";
    listaCompleta += "Congelados: " + (congelados.length ? congelados.join(", ") : "Ninguna") + "\n";
    listaCompleta += "Dulces: " + (dulces.length ? dulces.join(", ") : "Ninguna") + "\n";
    alert(listaCompleta);
}