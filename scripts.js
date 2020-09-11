swal("Hello World",);

function pintarNumero(numero) {
    //document.getElementById('data').value=numero
    pintarDatos(numero)
}

function pintarOperador(operador) {
    //document.getElementById('data').value=operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato) {
    let valorInput = document.getElementById('data')
    //valorInput.value=valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}`
}
function Limpiar() {
    document.getElementById('data').value = null
}
function mostrarResultado() {
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')
    console.log(arreglo)
    let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById('data').value = suma

    switch (arreglo[1]) {
        case '+':
            console.log('suma')
            let suma = parseInt(arreglo[0] + parseInt(arreglo[2]))
            document.getElementById('data').value = suma
            break;
        case '-':
            console.log('resta')
            let resta = parseInt(arreglo[0] - parseInt(arreglo[2]))
            document.getElementById('data').value = resta
            break;
        default:
            alert('No es + Ni -')
    }
}
/*if (arreglo[1] =='+'){
    let suma =parseInt(arreglo[0]+parseInt(arreglo[2]))
    document.getElementById('data').value=suma
}
else if(areglo(arreglo[1]=='-')){
    document.getElementById('data').value=resta
}
else if (arreglo[1]=='*'){
    let multiplicar = parseInt(arreglo[0]*parseInt(areglo[2]))
    document.getElementById('data').value=multiplicar
}
else {
    let dividir=parseInt(arreglo[0]/parseInt(arreglo[2]))
    document.getElementById('data').value=dividir
}*/

function preguntarDia() {
    let dia = prompt("¿Qué día quieres saber?")

    switch (dia) {
        case 'Domingo':
            alert("Has Digitado Domingo")
            break;
        case 'Lunes':
            alert("Has Digitado Lunes")
            break;
        case 'Martes':
            alert("Has Digitado Martes")
            break;
        case 'Miercoles':
            alert("Has Digitado Miercoles")
            break;
        case 'Jueves':
            alert("Has Digitado Jueves")
            break;
        case 'Viernes':
            alert("Has Digitado Viernes")
            break;
        case 'Sabado':
            alert("Has Digitado Sabado")
            break;
        default:
            alert("Has Digitado"+prompt)
    }
}

