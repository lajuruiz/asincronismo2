//array de objetos
const datos=[{
    id:1,
    title:"Spiderman",
    year:2017
},{
    id:2,
    title:"Avengers", 
    year:2019
},{
    id:3,
    title:"Iron Man", 
    year:2008
}]

/* creamos una funcion y retornamos datos */
const getDatos= () => {
    return datos
}
console.log(getDatos());


/* Otra forma para que sea asincrona es con la 
funcion setTimeout()  El setTimeout()método llama a una función después de una cantidad de milisegundos.*/

let datos1=[{
    id:1,
    title:"Spiderman",
    year:2017
},{
    id:2,
    title:"Avengers", 
    year:2019
},{
    id:3,
    title:"Iron Man", 
    year:2008
}]

/* creamos una funcion y retornamos datos */
const getDatos1= () => {
    setTimeout(() => {
        return datos1
    },2000)
}

console.log(getDatos1());
//devuelve un undefined por que cuando llamamos a la funcion 
// el no tiene que ejecutar ya que toca esperar 2 segundo (2000 milisegundos)



//forma usando promesas

let datos2=[{
    id:1,
    title:"Spiderman",
    year:2017
},{
    id:2,
    title:"Avengers", 
    year:2019
},{
    id:3,
    title:"Iron Man", 
    year:2008
}]


const getDatos2= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos2)
        },2000);
    });
}
getDatos2()
    .then(datos2 => console.log(datos2));

//otra forma con el await y async 
let datos3=[{
    id:1,
    title:"Spiderman",
    year:2017
},{
    id:2,
    title:"Avengers", 
    year:2019
},{
    id:3,
    title:"Iron Man", 
    year:2008
}]


const getDatos3= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos3)
        },2000);
    });
}

async function data(){
    const result= await getDatos3();
    console.log(result);
}

data();



//otra forma con el await y async y try catch 
let datos4=[];
/* let datos4=[{
    id:1,
    title:"Spiderman",
    year:2017
},{
    id:2,
    title:"Avengers", 
    year:2019
},{
    id:3,
    title:"Iron Man", 
    year:2008
}]
 */

const getDatos4= () => {
    return new Promise((resolve, reject) => {
        if(datos4.length ===0){
            reject (new Error("No existen datos"))
        } 
        setTimeout(() => {
            resolve(datos4)
        },2000);
    });
}


async function data(){
    try{
        const result= await getDatos4();
        console.log(result);
    } catch (err){
        console.log(err.message);
    } 
}

data();


//callbacks vs promises 

//callbacks

const operation= (numero1, numero2,callback) =>{
    return callback(numero1,numero2)
}
operation(1,2,(a,b) => a+ b)
operation(1,2,(a,b) => a* b)
operation(1,2,(a,b) => a-b)



//forma asincrona con el setTimeout


const operation1= (numero1, numero2,callback) =>{
    return setTimeout(() =>{
        callback(numero1,numero2)
    },5000)
}
operation1(1,3,(a,b) => {
    console.log(a +b)  
})

// ejercicio con promesas

const promises1=(numero1 , numero2) => {
    const result1= numero1+ numero2
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(result1)
        },500)
    })
}

/* promises1(50,15236,(result1)=>{
    console.log(result1)  
}) */

promises1(50,152360)
    .then(result1 => console.log(result1))

//promesas

let compras= "" 
function hacerLaCompra(){
    compras += "🥐"
}

hacerLaCompra();
console.log(compras)


//con setTimeout

let compras1= "" 
function hacerLaCompra1(){
    setTimeout(() =>{
       compras1 += "🥐" 
    },2000)
    
}

hacerLaCompra1();
console.log(compras1)

//con un callback y se genera el callback hell a medida que agregamos y agregamos proudctos

let compras2= "🛒" 
function hacerLaCompra2(callback){
    setTimeout(() =>{
       compras2 += "🥐" 
       callback();
    },2000)
    
}

hacerLaCompra2(function(){
    console.log(compras2)

    hacerLaCompra2(function(){
        console.log(compras2)
    });

    hacerLaCompra2(function(){
        console.log(compras2)
    });
});



//creando promesas

let desarrollo =new Promise((resolve,reject)=> {
    //accion necesaria para conseguir un resultado satisfactorio
    setTimeout(() => {
        const proyecto="🛒";
        //Math randon devuelve un numero decimal incluido el 0 pero no el 11
        let aleatorio= Math.random()
        if (aleatorio < 0.4){
            resolve(proyecto);
        }else{
            reject("💥 No se entrego a tiempo") 
        }
    },2000); 
})

desarrollo
    .then((proyecto) => console.log(proyecto))
    .catch((error) => console.log(error))
    .finally(() => console.log("promesa Finalizada"))





//con promesas el callback hell 
let compras4= "🛒" 

function hacerLaCompra2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            compras4 += "🥐" 
            console.log(compras4);
            resolve();
        },2000)
    })
};
 
hacerLaCompra2()
    .then(() => hacerLaCompra2())
    .then(() => hacerLaCompra2())
    .then(() => hacerLaCompra2())
    .then(() => hacerLaCompra2())


//callbacks

/* function miFuncion(cb){
    return cb()
}

function saludar(){
    console.log("hola mundo")
}
miFuncion(saludar)  */


//forma dos de expresarlo 
function miFuncion(cb){
    return cb()
}
/* miFuncion(function saludar(){
    console.log("HOLA MUNDO ")
}) */

miFuncion(function (){
    console.log("HOLA MUNDO ")
})

////////////////////////////////////////////////////

function saludar(nombre){
    console.log("Hola" + nombre)
}

function obtenerNombre(){
    const nombre="LOLA"
    return nombre
}

const names=obtenerNombre()
saludar(names)

//convertir lo anterior en un callback

function saludar(nombre){
    console.log("Hola" + nombre)
}

function obtenerName(fn){
    const nombre= "Django"
    fn(nombre)
}

obtenerName(saludar)

//forma two
function obtenerName(fn){
    const nombre= "Django"
    fn(nombre)
}
obtenerName(function(nombre){
    console.log("Hola " + nombre)
});