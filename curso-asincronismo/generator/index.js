
//Declaración de la función del Generador
function* gen(){
 yield 1;
 yield 2;
 yield 3;   
}

//Expresión de la función Generadora
// nosotros podemos controlar cuando queremos acceder a cada uno de los elementos
const g = gen();
console.log(g.next().value)
//Llamada del método next en el objeto del Generador
//Imprime el primer yield: {value: 1, done: false} 
console.log(g.next().value)
console.log(g.next().value)
//cuando se ejecuta la cuarta vez sera true 
//{ value: undefined, done: true }
console.log(g.next())


//con un for 

function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const iterates = iterate(["oscar" , "laura", "django", "bonito", "nelson"]);

console.log(iterates.next())
console.log(iterates.next().value)
console.log(iterates.next().value)
console.log(iterates.next().value)
console.log(iterates.next().value)
console.log(iterates.next())