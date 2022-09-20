
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/* Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario */

async function fetchData(urlApi){
    const response = await fetch (urlApi)
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) =>{
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products)
        console.log(product.title)
        console.log(category.name)

    }catch(error){
        console.log(error);
    }
}

anotherFunction(API)



export function runCode() {
    const url = 'https://domain-api-com';
    try{
      const response = await fetch(url);
      console.log(response)
    } catch (er) {
      console.error(er, "API No Found")
    }
  }
  
  runCode()
  