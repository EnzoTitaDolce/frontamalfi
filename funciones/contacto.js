let formulario = document.querySelector('form');
let boton = document.querySelector('button');


formulario.addEventListener('submit', function(event){
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;
    let consulta = document.querySelector('textarea').value;

    if(nombre==''||email==''||consulta==''){
        return alert('ERROR: Olvidaste completar algun campo');
    }else{
        return alert ('¡Tu formulario se envio de manera exitosa!');
    }

})

