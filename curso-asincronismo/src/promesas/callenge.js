import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi);
};

/* fetchData(`${API}/products`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));
 */


////función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
//el llamado
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return fetchData(`${API}/products/${data[0].id}`)
    }) //se pueden anidar múltiples .then
    .then(response => response.json())
    .then(data => {
        console.log(data.title)
        return fetchData(`${API}/categories/${data.category.id}`)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally '));