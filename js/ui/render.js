/**
 * Funciones de renderizado para la UI
 * Funciones puras para mostrar equipos y estados
 */

import { logger } from '../utils/logger.js';

/**
 * Renderiza la lista de equipos
 * @param {Array} teams - Array de equipos a mostrar
 * @param {HTMLElement} container - Contenedor donde renderizar
 */
export function renderTeams(teams, container) {
    try {
        logger.info(`Renderizando ${teams.length} equipos`);
        
        if (!teams || teams.length === 0) {
            renderEmptyState("No hay equipos disponibles", container);
            return;
        }
        
        container.innerHTML = "";
        
        teams.forEach(team => {
            const card = createTeamCard(team);
            container.appendChild(card);
        });
        
        logger.info("Equipos renderizados exitosamente");
    } catch (error) {
        logger.error("Error al renderizar equipos:", error);
        renderEmptyState("Error al cargar los equipos", container);
    }
}

/**
 * Renderiza un estado vacío
 * @param {string} message - Mensaje a mostrar
 * @param {HTMLElement} container - Contenedor donde renderizar
 */
export function renderEmptyState(message, container) {
    try {
        logger.info(`Renderizando estado vacío: ${message}`);
        
        container.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-12">
                <div class="text-gray-400 text-center">
                    <div class="text-6xl mb-4">🏎</div>
                    <h3 class="text-xl font-semibold mb-2">${message}</h3>
                    <p class="text-sm">Intenta con otra búsqueda o carga los equipos</p>
                </div>
            </div>
        `;
    } catch (error) {
        logger.error("Error al renderizar estado vacío:", error);
        container.innerHTML = "<p class='text-red-500'>Error al mostrar mensaje</p>";
    }
}

/**
 * Crea una tarjeta de equipo
 * @param {Object} team - Datos del equipo
 * @returns {HTMLElement} Elemento de tarjeta
 */
function createTeamCard(team) {
    const card = document.createElement("div");
    card.className = "bg-gray-800 rounded-2xl border border-gray-700 p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-gray-600 overflow-hidden";
    
    // Determinar si es formato nuevo o legacy
    const isNewFormat = team.hasOwnProperty('name') && team.hasOwnProperty('country');
    
    if (isNewFormat) {
        // Formato nuevo: { id, name, country, teamImage, flagImage, primaryColor, secondaryColor }
        const primaryColor = team.primaryColor || "#4F46E5";
        const secondaryColor = team.secondaryColor || "#3730A3";
        
        card.innerHTML = `
            <div class="relative">
                <!-- Header con imagen del equipo -->
                <div class="flex items-center justify-center mb-4">
                    <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                        <img 
                            src="${team.teamImage}" 
                            alt="${team.name} logo" 
                            class="w-12 h-12 object-contain"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                        />
                        <div class="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg" style="display: none;">
                            ${team.name.charAt(0)}
                        </div>
                    </div>
                </div>
                
                <!-- Nombre del equipo -->
                <h3 class="text-xl font-bold text-white mb-3 text-center">${team.name}</h3>
                
                <!-- País con bandera -->
                <div class="flex items-center justify-center gap-2 mb-4">
                    <div class="w-6 h-4 rounded overflow-hidden shadow-sm">
                        <img 
                            src="${team.flagImage}" 
                            alt="${team.country} flag" 
                            class="w-full h-full object-cover"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
                        />
                        <div class="w-full h-full bg-gray-600 flex items-center justify-center text-white text-xs" style="display: none;">
                            🌍
                        </div>
                    </div>
                    <span class="text-gray-300 text-sm">${team.country}</span>
                </div>
                
                <!-- ID del equipo con colores del equipo -->
                <div class="mt-4 text-center">
                    <span class="inline-block text-white text-xs px-3 py-1 rounded-full font-medium" 
                          style="background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});">
                        ${team.id.toUpperCase()}
                    </span>
                </div>
                
                <!-- Indicador de colores del equipo -->
                <div class="mt-3 flex justify-center gap-1">
                    <div class="w-3 h-3 rounded-full" style="background-color: ${primaryColor}"></div>
                    <div class="w-3 h-3 rounded-full" style="background-color: ${secondaryColor}"></div>
                </div>
            </div>
        `;
    } else {
        // Formato legacy: { nombre, pais, pilotos }
        const pilotosHtml = team.pilotos ? team.pilotos.map(piloto => 
            `<li class="text-sm text-gray-400">${piloto.nombre} - ${piloto.puntos} pts</li>`
        ).join('') : '';
        
        card.innerHTML = `
            <div class="text-center">
                <!-- Logo placeholder para equipos legacy -->
                <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl font-bold text-white">${team.nombre.charAt(0)}</span>
                </div>
                
                <h3 class="text-xl font-bold text-white mb-2">${team.nombre}</h3>
                <p class="text-gray-300 flex items-center justify-center gap-2 mb-3">
                    <span class="text-lg">🌍</span>
                    <span>${team.pais}</span>
                </p>
                ${pilotosHtml ? `
                    <div class="text-left">
                        <h4 class="text-sm font-semibold text-gray-300 mb-2">Pilotos:</h4>
                        <ul class="space-y-1">
                            ${pilotosHtml}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    return card;
}

/**
 * Renderiza un estado de carga
 * @param {HTMLElement} container - Contenedor donde renderizar
 */
export function renderLoadingState(container) {
    try {
        logger.info("Renderizando estado de carga");
        
        container.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-12">
                <div class="text-gray-400 text-center">
                    <div class="text-6xl mb-4 animate-pulse">🏎</div>
                    <h3 class="text-xl font-semibold mb-2">Cargando equipos...</h3>
                    <div class="flex space-x-2 justify-center">
                        <div class="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                        <div class="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        logger.error("Error al renderizar estado de carga:", error);
        container.innerHTML = "<p class='text-red-500'>Error al mostrar carga</p>";
    }
}
