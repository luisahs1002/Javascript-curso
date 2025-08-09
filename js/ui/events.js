/**
 * Manejadores de eventos para la UI
 * Incluye eventos del botón y buscador con debounce
 */

import { logger } from '../utils/logger.js';
import { debounce } from '../utils/logger.js';
import { renderTeams, renderLoadingState, renderEmptyState } from './render.js';
import { getTeams } from '../services/storage.js';

let allTeams = []; // Cache de todos los equipos

/**
 * Inicializa todos los eventos de la aplicación
 */
export function initEvents() {
    try {
        logger.info("Inicializando eventos de la aplicación");
        
        const btnMostrarEquipos = document.getElementById("btnMostrarEquipos");
        const buscadorEquipos = document.getElementById("buscadorEquipos");
        const equiposContainer = document.getElementById("equiposContainer");
        
        if (!btnMostrarEquipos || !buscadorEquipos || !equiposContainer) {
            throw new Error("Elementos de UI no encontrados");
        }
        
        // Evento del botón "Mostrar Equipos"
        btnMostrarEquipos.addEventListener("click", handleShowTeams);
        
        // Evento del buscador con debounce
        const debouncedSearch = debounce(handleSearch, 250);
        buscadorEquipos.addEventListener("input", debouncedSearch);
        
        // Evento de tecla Enter en el buscador
        buscadorEquipos.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                handleSearch();
            }
        });
        
        logger.info("Eventos inicializados correctamente");
        
    } catch (error) {
        logger.error("Error al inicializar eventos:", error);
        showErrorAlert("Error al inicializar la aplicación");
    }
}

/**
 * Manejador del botón "Mostrar Equipos"
 */
async function handleShowTeams() {
    try {
        logger.info("Botón 'Mostrar Equipos' clickeado");
        
        const equiposContainer = document.getElementById("equiposContainer");
        const btnMostrarEquipos = document.getElementById("btnMostrarEquipos");
        
        // Mostrar estado de carga
        renderLoadingState(equiposContainer);
        btnMostrarEquipos.disabled = true;
        btnMostrarEquipos.textContent = "Cargando...";
        
        // Cargar equipos desde localStorage
        allTeams = getTeams();
        
        if (allTeams.length === 0) {
            showInfoAlert("No hay equipos disponibles", "Carga los equipos desde el botón 'Mostrar Equipos'");
            renderEmptyState("No hay equipos cargados", equiposContainer);
        } else {
            renderTeams(allTeams, equiposContainer);
            showSuccessAlert(`${allTeams.length} equipos cargados`, "Los equipos se han cargado exitosamente");
        }
        
    } catch (error) {
        logger.error("Error al mostrar equipos:", error);
        showErrorAlert("Error al cargar los equipos");
        renderEmptyState("Error al cargar los equipos", document.getElementById("equiposContainer"));
    } finally {
        // Restaurar botón
        const btnMostrarEquipos = document.getElementById("btnMostrarEquipos");
        if (btnMostrarEquipos) {
            btnMostrarEquipos.disabled = false;
            btnMostrarEquipos.textContent = "Mostrar Equipos";
        }
    }
}

/**
 * Manejador del buscador con filtrado en tiempo real
 */
function handleSearch() {
    try {
        const buscadorEquipos = document.getElementById("buscadorEquipos");
        const equiposContainer = document.getElementById("equiposContainer");
        const searchTerm = buscadorEquipos.value.trim().toLowerCase();
        
        logger.info(`Buscando equipos con término: "${searchTerm}"`);
        
        if (!allTeams || allTeams.length === 0) {
            renderEmptyState("No hay equipos cargados", equiposContainer);
            return;
        }
        
        if (searchTerm === "") {
            // Si no hay término de búsqueda, mostrar todos
            renderTeams(allTeams, equiposContainer);
            return;
        }
        
        // Filtrar equipos por nombre (case-insensitive)
        const filteredTeams = allTeams.filter(team => {
            const isNewFormat = team.hasOwnProperty('name') && team.hasOwnProperty('country');
            const teamName = isNewFormat ? team.name : team.nombre;
            return teamName.toLowerCase().includes(searchTerm);
        });
        
        if (filteredTeams.length === 0) {
            renderEmptyState(`No se encontraron equipos con "${searchTerm}"`, equiposContainer);
            logger.info(`No se encontraron equipos para: "${searchTerm}"`);
        } else {
            renderTeams(filteredTeams, equiposContainer);
            logger.info(`Se encontraron ${filteredTeams.length} equipos para: "${searchTerm}"`);
        }
        
    } catch (error) {
        logger.error("Error en la búsqueda:", error);
        showErrorAlert("Error al realizar la búsqueda");
    }
}

/**
 * Muestra una alerta de información usando SweetAlert2
 */
function showInfoAlert(title, text = "") {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title,
            text,
            icon: 'info',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#3b82f6'
        });
    }
}

/**
 * Muestra una alerta de éxito usando SweetAlert2
 */
function showSuccessAlert(title, text = "") {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title,
            text,
            icon: 'success',
            confirmButtonText: '¡Genial!',
            confirmButtonColor: '#10b981'
        });
    }
}

/**
 * Muestra una alerta de error usando SweetAlert2
 */
function showErrorAlert(title, text = "") {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title,
            text,
            icon: 'error',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#ef4444'
        });
    }
}
