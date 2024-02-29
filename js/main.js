// Nombre de usuario
function validarNombre(nombre) {
    return nombre && nombre.trim() !== '';

}

// Cantidades
function validarCantidad(cantidad) {
    if (!isNaN(cantidad) && parseInt(cantidad) > 0) {
        if (parseInt(cantidad) <= 4) {
            return true; // Si es un número entero positivo y no pasa de 4
        } else {
            alert("¡Atención! Si desea comprar más de 4 departamentos/casas/phs , por favor comuníquese con nosotros");
            return false;
        }
    } else {
        alert("¡Error! Por favor ingrese un número menor a 4 para la cantidad de hogares.");
        return false;
    }
}

// Nombre de usuario
let nombreUsuario;
do {
    nombreUsuario = prompt("Propiedades Ambrosio, ¿Cuál es su necesidad?");
} while (!validarNombre(nombreUsuario));

let hogarSeleccionado = {};

// Ciclo 
do {
    let opcionHogar= prompt(`${nombreUsuario}, Elija que tipo de terreno le interesa, departamento, casa, phs`).toLowerCase();
    
    //Ingresar el hogar
    if (opcionHogar !== 'departamento' && opcionHogar !== 'casa' && opcionHogar !== 'phs') {
        alert("¡Error! Por favor ingrese un hogar válido");
        continue;
    }
    
    let precioHogar;
    do {
        precioHogar = prompt(`¿Que ${opcionHogar} necesita?`);
    } while (!validarCantidad(precioHogar));

    hogarSeleccionado[opcionHogar] = parseInt(precioHogar);

    let agregarHogar;
    do {
        agregarHogar = prompt("¿Desea agregar otro HOGAR? (SI/NO)").toUpperCase();
    } while (agregarHogar !== "SI" && agregarHogar !== "NO");

    if (agregarHogar === "NO") {
        break;
    }
} while (true);

// Calcular el costo total del hogar seleccionado
let costoTotal = 0;
for (let tipo in hogarSeleccionado) {
    if (hogarSeleccionado.hasOwnProperty(tipo)) {
        if (tipo === 'departamento') {
            costoTotal += 45500 * hogarSeleccionado[tipo];
        } else if (tipo === 'casa') {
            costoTotal += 90000 * hogarSeleccionado[tipo];
        } else if (tipo === 'phs') {
            costoTotal += 123000 * hogarSeleccionado[tipo];
        }
    }
}

alert(`El costo total de su pedido es: $${costoTotal}. ¡Muchas gracias por su compra, ¡Propiedades Ambrosio lo espera pronto!`);