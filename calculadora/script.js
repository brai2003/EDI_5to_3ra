const pantalla = document.getElementById('pantalla');

function agregar(valor) {
    if (pantalla.innerHTML === '0') {
        pantalla.innerHTML = valor;
    } else {
        pantalla.innerHTML += valor;
    }
}

function limpiar() {
    pantalla.innerHTML = '0';
}

function borrar() {
    if (pantalla.innerHTML.length > 1) {
        pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
    } else {
        pantalla.innerHTML = '0';
    }
}

function calcular() {
    try {
        pantalla.innerHTML = eval(pantalla.innerHTML);
    } catch {
        pantalla.innerHTML = "Error";
    }
}