// alert("Esta bien linkeado");

// Formula 1 - simulador de puntos 
function iniciar(){
    console.log("Bienvenido a la formula 1!!!");
}

const maximo_de_vueltas = 10;
const puntos_por_posicion= [25,18,15,12,10,8,6,4,2,1];

let pilotos = [
    {nro: 1, nombre: "hamilton", escuderia:"ferrari", puntos: 0},
    {nro: 2, nombre: "leclerc", escuderia:"ferrari", puntos: 0},
    {nro: 3, nombre: "verstapen", escuderia:"redbull", puntos: 0},
    {nro: 4, nombre: "norris", escuderia:"mclaren", puntos: 0},
    {nro: 5, nombre: "piastri", escuderia:"mclaren", puntos: 0},
    {nro: 6, nombre: "alonso", escuderia:"aston martin", puntos: 0},
    {nro: 7, nombre: "russell", escuderia:"mercedes", puntos: 0},
    {nro: 8, nombre: "sainz", escuderia:"williams", puntos: 0},
    {nro: 9, nombre: "colapinto", escuderia:"alpine", puntos: 0},
    {nro: 10,nombre: "albon", escuderia:"williams", puntos: 0}

];

// mostrar todos los pilotos

function mostrar_parrilla(){
    console.log("ESTA ES LA PARRILLA DE LA FORMULA 1 ACTUAL:");
    pilotos.forEach(piloto => {
        console.table(`#${piloto.nro} - ${piloto.nombre} | Escudería: ${piloto.escuderia} | Puntos: ${piloto.puntos}`);
    });
}
mostrar_parrilla()



// Mostrar listado de pilotos
let mensaje = "Elige un número del 1 al 10 para seleccionar un piloto:\n";
pilotos.forEach(p => {
    mensaje += `${p.nro} - ${p.nombre} (${p.escuderia})\n`;
});

// Solicitar número de piloto
let numeroElegido = parseInt(prompt(mensaje));

// Buscar piloto seleccionado
let pilotoSeleccionado = pilotos.find(piloto => piloto.nro === numeroElegido);

// Mostrar resultado
if (pilotoSeleccionado) {
    alert(`Has seleccionado a ${pilotoSeleccionado.nombre} de la escudería ${pilotoSeleccionado.escuderia}`);
    console.log(`PILOTO ELEGIDO: ${pilotoSeleccionado.nombre} (${pilotoSeleccionado.escuderia})`);
} else {
    alert("Número inválido. Debes elegir un número entre 1 y 10.");
}

// preferencias del usuario
function tus_preferencias(nombre, apellido, escuderia_fav, piloto_fav){
    console.log(nombre, apellido, escuderia_fav,piloto_fav)
}

tus_preferencias("luis","hernandez","ferrari","lecrec")



if (pilotoSeleccionado.nro > 0){
    console.log("Excelente piloto !!!")
}else{
    console.log("INCORRECTO")
}

