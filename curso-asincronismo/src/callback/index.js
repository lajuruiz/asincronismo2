//sumar dos elementos
//callback

function add (number1, number2){
    return number1 + number2
}

function calc(number1, number2, callback){
    return callback(number1, number2)
}

console.log(calc(25,23,add));


setTimeout(function() {
    console.log("Hola javascript")
},2000)

//ejercicio 3
function greet(name, name1){
    console.log(`hola ${name}`)
    console.log(`hola ${name1}`)
}

setTimeout(greet, 3000,"laura","django");



