// Datos iniciales
let equipos = [
    {
        nombre: "Ferrari",
        pais: "Italia",
        pilotos: [
            { nombre: "Lewis Hamilton", puntos: 0 },
            { nombre: "Charles Leclerc", puntos: 0 }
        ]
    },
    {
        nombre: "Mclaren",
        pais: "Reino Unido",
        pilotos: [
            { nombre: "Lando Norris", puntos: 0 },
            { nombre: "Oscar Piastri", puntos: 0 }
        ]
    },
    {
        nombre: "Redbull",
        pais: "Austria",
        pilotos: [
            { nombre: "Max Verstappen", puntos: 0 },
            { nombre: "Yuki Tsunoda", puntos: 0 }
        ]
    },
    {
        nombre: "Mercedes AMG",
        pais: "Alemania",
        pilotos: [
            { nombre: "George Russell", puntos: 0 },
            { nombre: "Kimi Antonelli", puntos: 0 }
        ]
    },
    {
        nombre: "Aston Martin",
        pais: "Reino Unido",
        pilotos: [
            { nombre: "Fernando Alonso", puntos: 0 },
            { nombre: "Lance Stroll", puntos: 0 }
        ]
    }
];

// Guardar datos iniciales si no existen en localStorage
if (!localStorage.getItem("equipos")) {
    localStorage.setItem("equipos", JSON.stringify(equipos));
}
