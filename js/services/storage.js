/**
 * Servicio de almacenamiento para equipos F1
 * Gestiona la persistencia de datos en localStorage
 */

import { F1_TEAMS_SEED, LEGACY_TEAMS } from '../data/teams.js';
import { logger } from '../utils/logger.js';

const STORAGE_KEY = "f1_teams";
const LEGACY_STORAGE_KEY = "equipos";

/**
 * Obtiene los equipos desde localStorage
 * @returns {Array} Array de equipos o array vacío si no existen
 */
export function getTeams() {
    try {
        const teamsData = localStorage.getItem(STORAGE_KEY);
        if (teamsData) {
            const teams = JSON.parse(teamsData);
            logger.info(`Equipos cargados desde localStorage: ${teams.length} equipos`);
            return teams;
        }
        
        // Fallback para datos legacy
        const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacyData) {
            const legacyTeams = JSON.parse(legacyData);
            logger.info(`Datos legacy encontrados: ${legacyTeams.length} equipos`);
            return legacyTeams;
        }
        
        logger.warn("No se encontraron equipos en localStorage");
        return [];
    } catch (error) {
        logger.error("Error al cargar equipos desde localStorage:", error);
        return [];
    }
}

/**
 * Guarda los equipos en localStorage
 * @param {Array} teams - Array de equipos a guardar
 */
export function setTeams(teams) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(teams));
        logger.info(`Equipos guardados en localStorage: ${teams.length} equipos`);
    } catch (error) {
        logger.error("Error al guardar equipos en localStorage:", error);
        throw error;
    }
}

/**
 * Inicializa los datos si localStorage está vacío
 * @param {Array} seedData - Datos semilla a usar
 */
export function seedIfEmpty(seedData = F1_TEAMS_SEED) {
    try {
        const existingTeams = getTeams();
        
        if (existingTeams.length === 0) {
            setTeams(seedData);
            logger.info(`Datos semilla inicializados: ${seedData.length} equipos`);
            return true;
        }
        
        logger.info("Datos ya existen en localStorage, no se inicializa semilla");
        return false;
    } catch (error) {
        logger.error("Error al inicializar datos semilla:", error);
        throw error;
    }
}

/**
 * Migra datos legacy al nuevo formato si es necesario
 */
export function migrateLegacyData() {
    try {
        const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
        const newData = localStorage.getItem(STORAGE_KEY);
        
        if (legacyData && !newData) {
            const legacyTeams = JSON.parse(legacyData);
            setTeams(legacyTeams);
            logger.info("Datos legacy migrados al nuevo formato");
            return true;
        }
        
        return false;
    } catch (error) {
        logger.error("Error al migrar datos legacy:", error);
        return false;
    }
}
