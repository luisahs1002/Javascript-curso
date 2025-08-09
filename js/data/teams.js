/**
 * Datos semilla de equipos de Fórmula 1
 * Contiene la información inicial de las escuderías con imágenes
 */

export const F1_TEAMS_SEED = [
    { 
        id: "red-bull", 
        name: "Red Bull Racing", 
        country: "Austria",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/6/6d/Red_Bull_Racing_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
        primaryColor: "#3671C6",
        secondaryColor: "#1E41CE"
    },
    { 
        id: "mercedes", 
        name: "Mercedes-AMG", 
        country: "Germany",
        teamImage: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Logo_Mercedes_AMG_Petronas_F1_Team.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        primaryColor: "#6CD3BF",
        secondaryColor: "#00D2BE"
    },
    { 
        id: "ferrari", 
        name: "Scuderia Ferrari", 
        country: "Italy",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/d/d1/Scuderia_Ferrari_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        primaryColor: "#DC0000",
        secondaryColor: "#FF2800"
    },
    { 
        id: "mclaren", 
        name: "McLaren", 
        country: "UK",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/7/71/McLaren_Racing_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
        primaryColor: "#FF8700",
        secondaryColor: "#FF6B35"
    },
    { 
        id: "aston-martin", 
        name: "Aston Martin", 
        country: "UK",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/5/5c/Aston_Martin_F1_Team_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
        primaryColor: "#358C75",
        secondaryColor: "#006F62"
    },
    { 
        id: "alpine", 
        name: "Alpine", 
        country: "France",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/3/33/Alpine_F1_Team_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        primaryColor: "#0090FF",
        secondaryColor: "#0051FF"
    },
    { 
        id: "williams", 
        name: "Williams", 
        country: "UK",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/e/e8/Williams_Racing_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
        primaryColor: "#37BEDD",
        secondaryColor: "#005AFF"
    },
    { 
        id: "rb", 
        name: "Visa Cash App RB", 
        country: "Italy",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/7/7d/VCARB_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        primaryColor: "#5E8FAA",
        secondaryColor: "#1E41CE"
    },
    { 
        id: "sauber", 
        name: "Stake F1 Team Sauber", 
        country: "Switzerland",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/7/7d/Stake_F1_Team_Kick_Sauber_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
        primaryColor: "#52E252",
        secondaryColor: "#37BEDD"
    },
    { 
        id: "haas", 
        name: "Haas F1 Team", 
        country: "USA",
        teamImage: "https://upload.wikimedia.org/wikipedia/en/8/8a/Haas_F1_Team_logo.svg",
        flagImage: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
        primaryColor: "#FFFFFF",
        secondaryColor: "#F0D787"
    }
];

// Datos legacy para compatibilidad con el código existente
export const LEGACY_TEAMS = [
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
