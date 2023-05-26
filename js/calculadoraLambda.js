const sumar = (num1, num2) => num1 + num2;


const sumarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(numero1, numero2);
}
const restar = (num1, num2) => num1 - num2;

const restarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + restar(numero1, numero2);
}
const multiplicar = (num1, num2) => num1 * num2;

const multiplicarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicar(numero1, numero2);
}
const dividir = (num1, num2) => num1 / num2;

const dividirNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + dividir(numero1, numero2);
}

const convertir = (idCampo) => {
    console.log('Convertir' + idCampo)
    return parseInt(document.getElementById(idCampo).value);
}



const insertarElemento = () => document.getElementById('idElemento').innerHTML = '<strong>Impotante</strong>';


const conceptosJS = () => {
    //var: ya no es comunmente utilizada
    //let: para cualquier tipo de variable
    //const es para constantes

    var variable1 = 'Edison';
    var variable = 1;
    let variable3 = 'Edison';
    let variable4 = 8;
    const variable5 = 'Edison'
    const variable6 = 8;
    console.log(variable3);

    //Declaracion de arreglos 
    const diasSemana = ['Lunes', 'Martes', 'Miercoles'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    diasSemana.push('Jueves');
    diasSemana.push('Viernes');
    console.log(diasSemana);
    const diasFinSemana = ['Sabado', 'Domingo'];
    console.log(diasSemana.concat(diasFinSemana));
    console.log(diasSemana);
    const diasCompleto = diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);

    for (const dia of diasCompleto) {
        console.log(dia);
    }
    //Declaracion de objetos
    const persona = {

        nombre: "Pablo",
        apellido: "Suntaxi",
        edad: 33,
        ciudad: "Quito"
    }

    console.log(persona);

    const persona2 = {

        nombre: "Alexis",
        apellido: "Suntaxi",
        edad: 31,
        ciudad: "Quito",
        vehiculo: {
            marca: "Toyota",
            modelo: "Prius",
            anio: 1989

        }
    }

    console.log(persona2)

    const nombrePrueba = "prueba";
    //nombre="prueba1"

    //console.log(nombre)

    const nombres = ['Pablo','Camila'];

    nombres[0]= 'Mike';
    console.log(nombres)

    //desestructuracion de arreglos
    const dias2 =['Lunes','Martes','Miercoles','Jueves','Viernes']
    const [dia1,dia2,dia3,dia4]= dias2;
    console.log(dia2)
    console.log(dia4)

    const [d1,d2,d3,d4,d5] =['Lunes','Martes','Miercoles','Jueves','Viernes']
    console.log(d1);
    console.log(d5);

    //desestructuracion de objetos
    const persona3 = {

        nombre: "Camila",
        apellido: "Bolanos",
        edad: 33,
        ciudad: "Quito"
    }

    const {nombre,ciudad} = persona3;
    console.log(nombre);
    console.log(ciudad);

    const persona4 = {

        nombre: "Alexis",
        apellido: "Suntaxi",
        edad: 31,
        ciudad: "Quito",
        vehiculo: {
            marca: "Toyota",
            modelo: "Prius",
            anio: 1989

        }
    }
    const {vehiculo} = persona4;
    console.log(vehiculo)




    



}

