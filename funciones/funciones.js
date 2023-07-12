let listaDeExcursiones = [
    {
        excursion: "Excursion a Capri y Anacapri",
        duración: "10 HORAS",
        idioma: "ESPAÑOL",
        comida: "No incluye comida",
        precio: "90 €",
        categoria: "Paseos en barco",
        imagen:"imagenes/imagen1.jpg"
    },
    {
        excursion: "Excursion a la isla de Capri",
        duración: "9 HORAS",
        idioma: "ESPAÑOL",
        comida: "No incluye comida",
        precio: "€ 75",
        categoria: "Paseos en barco",
        imagen:"imagenes/imagen2.jpg"
    },
    {
        excursion: "Excursion en barco por la Costa Amalfitana",
        duración: "9 HORAS",
        idioma: "ESPAÑOL e INGLES",
        comida: "Incluye almuerzo y merienda",
        precio: "€ 120",
        categoria: "Paseos en barco",
        imagen:"imagenes/imagen3.jpg"
    },
    {
        excursion: "Paseo en barco al atardecer",
        duración: "3 HORAS",
        idioma: "ESPAÑOL",
        comida: "Incluye merienda",
        precio: "€ 105",
        categoria: "Paseos en barco",
        imagen:"imagenes/imagen4.jpg"
    },
    {
        excursion: "Paseo en barco por la peninsula de Sorrento",
        duración: "4m - 30m",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "No incluye comidas",
        precio: "€ 66",
        categoria: "Paseos en barco",
        imagen:"imagenes/imagen5.jpg"
    },
    {
        excursion: "Tour gastronomico por Salerno",
        duración: "4m - 30m",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "Incluye desgustaciones",
        precio: "€ 79",
        categoria: "Gastronomía y enoturismo",
        imagen:"imagenes/imagen6.jpg"
    },
    {
        excursion: "Taller de pizzas",
        duración: "3 HORAS",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "No incluye comidas",
        precio: "€ 65",
        categoria: "Gastronomía y enoturismo",
        imagen:"imagenes/imagen7.jpg"
    },
    {
        excursion: "Tour de comida callejera por Sorrento",
        duración: "3 HORAS",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "Incluye desgustaciones",
        precio: "€ 65",
        categoria: "Gastronomía y enoturismo",
        imagen:"imagenes/imagen8.jpg"
    },
    {
        excursion: "Clase de cocina italiana en Sorrento",
        duración: "3 HORAS",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "Incluye un almuerzo",
        precio: "€ 85",
        categoria: "Gastronomía y enoturismo",
        imagen:"imagenes/imagen9.jpg"
    },
    {
        excursion: "Trekking por el Sendero del Príncipe",
        duración: "4 HORAS",
        idioma: "ESPAÑOL e INGLES",
        comida: "No incluye comidas",
        precio: "€ 15",
        categoria: "Acción y naturaleza",
        imagen:"imagenes/imagen10.jpg"
    },
    {
        excursion: "Senderismo por el Vesubio",
        duración: "3 HORAS",
        idioma: "ITALIANO e INGLES",
        comida: "Incluye una merienda",
        precio: "€ 43",
        categoria: "Acción y naturaleza",
        imagen:"imagenes/imagen11.jpg"
    },
    {
        excursion: "Snorkel en Sorrento",
        duración: "3-4 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "Incluye una merienda",
        precio: "€ 73",
        categoria: "Acción y naturaleza",
        imagen:"imagenes/imagen12.jpg"
    },
    {
        excursion: "Senderismo por el monte Faito",
        duración: "5 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "No incluye comidas",
        precio: "€ 26",
        categoria: "Acción y naturaleza",
        imagen:"imagenes/imagen1.jpg"
    },
    {
        excursion: "Senderismo por el monte San Liberatore",
        duración: "3 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "Incluye una merienda",
        precio: "€ 49",
        categoria: "Acción y naturaleza",
        imagen:"imagenes/imagen2.jpg"
    },
    {
        excursion: "Tirolesa en la Costa Amalfitana",
        duración: "30 minutos",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "No incluye comidas",
        precio: "€ 40",
        categoria: "Acción y naturaleza",
        imagen:"imagenes/imagen3.jpg"
    },
    {
        excursion: "Visita guiada por Pompeya",
        duración: "2 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "Incluye un almuerzo",
        precio: "€ 55",
        categoria: "Visitas guiadas",
        imagen:"imagenes/imagen4.jpg"
    },
    {
        excursion: "Visita guiada por Salerno",
        duración: "2 HORAS 30 MINUTOS",
        idioma: "ITALIANO",
        comida: "No incluye comidas",
        precio: "€ 49",
        categoria: "Visitas guiadas",
        imagen:"imagenes/imagen5.jpg"
    },
    {
        excursion: "Tour privado por Positano",
        duración: "2 HORAS",
        idioma: "ESPAÑOL",
        comida: "Incluye un almuerzo y una merienda",
        precio: "€ 210 (por grupo)",
        categoria: "Visitas guiadas",
        imagen:"imagenes/imagen6.jpg"
    },
    {
        excursion: "Visita guiada por el castillo de Lettere",
        duración: "1h - 30m",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "No incluye comidas",
        precio: "€ 30",
        categoria: "Visitas guiadas",
        imagen:"imagenes/imagen7.jpg"
    },
    {
        excursion: "Visita guiada por la villa de Oplontis",
        duración: "2 HORAS",
        idioma: "ESPAÑOL",
        comida: "Incluye un almuerzo y una merienda",
        precio: "€ 200 (por grupo)",
        categoria: "Visitas guiadas",
        imagen:"imagenes/imagen8.jpg"
    },
    {
        excursion: "Entrada a la villa romana de Oplontis",
        duración: "-",
        idioma: "ESPAÑOL",
        comida: "-",
        precio: "€ 17",
        categoria: "espectaculos y entradas",
        imagen:"imagenes/imagen9.jpg"
    },
    {
        excursion: "Concierto de ópera en el museo Correale",
        duración: "2 HORAS 30 MIN",
        idioma: "ITALIANO",
        comida: "-",
        precio: "€ 45",
        categoria: "espectaculos y entradas",
        imagen:"imagenes/imagen10.jpg"
    }
]

let paseos = document.getElementById('paseos');
let visitas = document.getElementById('visitas');
let accion = document.getElementById('accion');
let gastronomia = document.getElementById('gastronomia');
let espectaculos = document.getElementById('espectaculos');



function render (valor){
    
    let seccionLista = document.getElementById('lista-excursiones');
    let results = listaDeExcursiones.filter(excursion=>excursion.categoria == valor)
    seccionLista.innerHTML='';

    for(let i=0;i<results.length;i++){
    //for(let result in results){
        seccionLista.innerHTML+=`<div class="card">
        <div class="img-card">
            <img src="${results[i].imagen}" alt="">
        </div>
        <div class="info-card">
            <h1>${results[i].excursion}</h1>
            <p>Duración: ${results[i].duración} </p>
            <p>Idioma: ${results[i].idioma}</p>
            <p>${results[i].comida}</p>
            <p class="precio">${results[i].precio}</p>
        </div>
    </div>`
    }}

