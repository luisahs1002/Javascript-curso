// alert("Esta bien linkeado");

function iniciar(){
    console.log("Bienvenido a la Formula 1 !!!");
}

// Array con equipos y sus pilotos

let equipos=[
    {
        nombre:"Ferrari",
        pais: "Italia",
        pilotos:[
            {nombre: "Lewis Hamilton", puntos: 0},
            {nombre: "Charles Lecrec", puntos:0},
        ]
    },
    {
        nombre:"Mclaren",
        pais:"Reino Unido",
        pilotos:[
            {nombre:"Lando Norris", puntos: 0},
            {nombre:"Oscar Piastri", puntos:0},
        ],
    },
    {
        nombre:"Redbull",
        pais:"Austria",
        pilotos:[
            {nombre:"Max Verstapen", puntos: 0},
            {nombre:"Yuki Tsunoda", puntos: 0},
        ]
    },
    {
        nombre:"Mercedes AMG",
        pais: "Alemania",
        pilotos:[
            {nombre: "George Russell", puntos: 0},
            {nombre:"Kimi Antonelli", puntos: 0},
         ],
    },
    {
        nombre: "Aston Martin",
        pais:"Reino Unido",
        pilotos:[
            {nombre:"Fernando Alonso", puntos:0},
            {nombre:"Lance Stroll", puntos:0},
        ]
    }
]

// Mostrar todos los equipos y sus pilotos

function mostrarEquipos(){
    console.log("🏁 Escuderias de la Fórmula 1:");
    equipos.forEach(equipo => {
        console.log(`\nEscudería: ${equipo.nombre} (${equipo.nacionalidad})`);
        equipo.pilotos.forEach((piloto, index) => {
            console.log(`  Piloto ${index + 1}: ${piloto.nombre} | Puntos: ${piloto.puntos}`);
        });
    });
}
mostrarEquipos();

// Buscar equipo por nombre desde prompt

let nombreEquipo = prompt(" Escribe el nombre de un equipo (EJ: Ferrari, Redbull;mclaren): ");
let equipoEncontrado = equipos.find(equipo => equipo.nombre.toLocaleLowerCase() === nombreEquipo.toLocaleLowerCase());

if( equipoEncontrado){
    console.log(`\n✅ Has seleccionado: ${equipoEncontrado.nombre}`);
    console.log(`🌍 Nacionalidad: ${equipoEncontrado.nacionalidad}`);
    console.log("Pilotos:");
    equipoEncontrado.pilotos.forEach(piloto => {
        console.log(`- ${piloto.nombre} | Puntos: ${piloto.puntos}`);
    });
} else {
    console.log("❌ Equipo no encontrado. Asegúrate de escribirlo correctamente.");
    
}

