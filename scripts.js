function pintarNumero(numero){
    //document.getElementById('data').value=numero
    pintarDatos(numero)
}

function pintarOperador(operador){
    //document.getElementById('data').value=operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato){
    let valorInput=document.getElementById('data')
    //valorInput.value=valorInput.value + " " + dato
    valorInput.value = `${valorInput.value}${dato}`
}
function Limpiar(){
    document.getElementById('data').value = null
}
function mostrarResultado(){
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split (' ')
    console.log(arreglo)
    let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
    document.getElementById('data').value = suma
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
switch (arreglo[1]){
    case '+':
        console.log('suma')
        let suma = parseInt(arreglo[0]+parseInt(arreglo[2]))
        document.getElementById('data').value=suma
        break;
    case '-':
        console.log('resta')
        let resta = parseInt(arreglo[0]-parseInt(arreglo[2]))
        document.getElementById('data').value=resta
        break;
        default:
            alert('No es + Ni -')    
    }

    function preguntarDia(){
        prompt("¿Qué día quieres saber?")
        let dia=document.getElementById("dia")
    }
   switch (dia){
   case 'Lunes':
       prompt("Hoy es LUNES")
       let dia=document.getElementById("dia") 
       break;
    case  'Martes':
        prompt("Hoy es MARTES")   
        let dia=document.getElementById 
}