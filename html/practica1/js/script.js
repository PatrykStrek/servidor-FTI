function esEmailValido(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function esTelefonoValido(telefono) {
    // Eliminar todos los caracteres que no sean dígitos
    const digitos = telefono.replace(/\D/g, '');
    if (digitos.length !== 9) {
        return false;
    }
    
    // Verificar que solo contenga dígitos, espacios o guiones
    if (!/^[\d\s-]+$/.test(telefono)) {
        return false;
    }
    
    return true;
}

function contarPalabras(texto) {
    // Eliminar espacios al principio y al final
    texto = texto.trim();
    
    //Si el texto está vacío, no hay palabras
    if (texto === '') {
        return 0;
    }
    
    // Dividir el texto por espacios y contar las palabras
    var palabras = texto.split(/\s+/);
    return palabras.length;
}