function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}




function sumarNumeros() {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(numero1, numero2);
}

function restarNumeros() {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + restar(numero1, numero2);
}
function multiplicarNumeros() {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicar(numero1, numero2);
}
function dividirNumeros() {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + dividir(numero1, numero2);
}

function convertir(idCampo) {
    return parseInt(document.getElementById(idCampo).value);

}

function eliminarElemento() {
    document.getElementById('idEliminar').remove;
    console.log(document.getElementById('idEliminar'))
    console.log('Test')

}

function insertarElemento() {
    document.getElementById('idElemento').innerHTML = '<strong>Impotante</strong>';


}