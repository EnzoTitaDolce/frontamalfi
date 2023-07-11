let containerGaleria = document.getElementById('container');
const API_URL = 'https://pixabay.com/api/?key=36340383-d6836109916ee47000c68e28e&q=positano&image_type=photo';


fetch(API_URL)
.then(response=>response.json())
.then(data=>mostrarData(data))
.catch(error=>console.log(error))

const mostrarData = (data) =>{
    console.log(data.hits);
    let body ='';
    for(let i = 0; i<data.hits.length; i++){
        body += `<div class="container_imagenes"><a href=${data.hits[i].largeImageURL} target="_blank"><img src=${data.hits[i].largeImageURL} alt=""></a></div>`
        }
    containerGaleria.innerHTML = body;
}


