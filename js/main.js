/**
 * Archivo principal de la aplicación F1
 * Inicializa la aplicación y mantiene compatibilidad con código legacy
 */

import { logger } from './utils/logger.js';
import { seedIfEmpty, migrateLegacyData } from './services/storage.js';
import { initEvents } from './ui/events.js';

// Variables globales para compatibilidad con código legacy
let equipos = [];

/**
 * Inicializa la aplicación
 */
async function initApp() {
    try {
        logger.info("Iniciando aplicación F1");
        
        // Migrar datos legacy si es necesario
        migrateLegacyData();
        
        // Inicializar datos semilla si es necesario
        seedIfEmpty();
        
        // Cargar equipos para compatibilidad legacy
        equipos = JSON.parse(localStorage.getItem("equipos")) || [];
        
        // Inicializar eventos de la nueva UI
        initEvents();
        
        logger.info("Aplicación inicializada correctamente");
        
    } catch (error) {
        logger.error("Error al inicializar la aplicación:", error);
        showErrorAlert("Error al inicializar la aplicación");
    }
}

/**
 * Función legacy para mostrar equipos (mantiene compatibilidad)
 */
function mostrarEquipos() {
    try {
        logger.info("Función legacy mostrarEquipos llamada");
        
        const equiposContainer = document.getElementById("equiposContainer");
        if (!equiposContainer) {
            logger.error("Contenedor de equipos no encontrado");
            return;
        }
        
        equiposContainer.innerHTML = "";
        
        if (!equipos || equipos.length === 0) {
            equiposContainer.innerHTML = "<p class='text-gray-400'>No hay equipos disponibles</p>";
            return;
        }
        
        equipos.forEach(equipo => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3>${equipo.nombre}</h3>
                <p>🌍 País: ${equipo.pais}</p>
                <ul>
                    ${equipo.pilotos.map(p => `<li>${p.nombre} - Puntos: ${p.puntos}</li>`).join("")}
                </ul>
            `;
            equiposContainer.appendChild(card);
        });
        
        logger.info(`Equipos legacy mostrados: ${equipos.length} equipos`);
        
    } catch (error) {
        logger.error("Error en función legacy mostrarEquipos:", error);
    }
}

/**
 * Función legacy para buscar equipo (mantiene compatibilidad)
 */
function buscarEquipo() {
    try {
        logger.info("Función legacy buscarEquipo llamada");
        
        if (typeof Swal === 'undefined') {
            logger.error("SweetAlert2 no está disponible");
            return;
        }
        
        Swal.fire({
            title: "Buscar Equipo",
            input: "text",
            inputPlaceholder: "Ej: Ferrari, Redbull, Mclaren",
            showCancelButton: true,
            confirmButtonText: "Buscar"
        }).then(result => {
            if (result.value) {
                let nombre = result.value.trim().toLowerCase();
                let equipoEncontrado = equipos.find(e => e.nombre.toLowerCase() === nombre);

                if (equipoEncontrado) {
                    Swal.fire({
                        title: `✅ ${equipoEncontrado.nombre}`,
                        html: `
                            <p>🌍 País: ${equipoEncontrado.pais}</p>
                            <ul>
                                ${equipoEncontrado.pilotos.map(p => `<li>${p.nombre} - Puntos: ${p.puntos}</li>`).join("")}
                            </ul>
                        `,
                        icon: "success"
                    });
                    logger.info(`Equipo encontrado: ${equipoEncontrado.nombre}`);
                } else {
                    Swal.fire({
                        title: "❌ Equipo no encontrado",
                        text: "Verifica el nombre ingresado",
                        icon: "error"
                    });
                    logger.warn(`Equipo no encontrado: ${nombre}`);
                }
            }
        });
        
    } catch (error) {
        logger.error("Error en función legacy buscarEquipo:", error);
    }
}

/**
 * Muestra una alerta de error usando SweetAlert2
 */
function showErrorAlert(message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: "Error",
            text: message,
            icon: 'error',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#ef4444'
        });
    }
}

// Inicializar aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", initApp);

// Exportar funciones legacy para compatibilidad
window.mostrarEquipos = mostrarEquipos;
window.buscarEquipo = buscarEquipo;

// Event listeners legacy (mantiene compatibilidad con código existente)
document.addEventListener("DOMContentLoaded", () => {
    const btnMostrarEquipos = document.getElementById("btnMostrarEquipos");
    const btnBuscarEquipo = document.getElementById("btnBuscarEquipo");
    
    // Solo agregar listeners legacy si los elementos existen y no tienen listeners ya
    if (btnMostrarEquipos && !btnMostrarEquipos.hasAttribute('data-legacy-listener')) {
        btnMostrarEquipos.setAttribute('data-legacy-listener', 'true');
        btnMostrarEquipos.addEventListener("click", mostrarEquipos);
    }
    
    if (btnBuscarEquipo && !btnBuscarEquipo.hasAttribute('data-legacy-listener')) {
        btnBuscarEquipo.setAttribute('data-legacy-listener', 'true');
        btnBuscarEquipo.addEventListener("click", buscarEquipo);
    }
});


