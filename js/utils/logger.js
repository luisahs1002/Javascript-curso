/**
 * Logger configurado con loglevel
 * Reemplaza console.log, console.error, etc.
 */

// Configurar nivel de log basado en NODE_ENV o usar 'info' por defecto
const logLevel = (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production') 
    ? 'warn' 
    : 'info';

// Configurar loglevel
if (typeof log !== 'undefined') {
    log.setLevel(logLevel);
    log.setDefaultLevel(logLevel);
}

/**
 * Logger configurado para la aplicación
 * Métodos disponibles: trace, debug, info, warn, error
 */
export const logger = {
    trace: (...args) => {
        if (typeof log !== 'undefined') {
            log.trace(...args);
        } else {
            console.trace(...args);
        }
    },
    
    debug: (...args) => {
        if (typeof log !== 'undefined') {
            log.debug(...args);
        } else {
            console.debug(...args);
        }
    },
    
    info: (...args) => {
        if (typeof log !== 'undefined') {
            log.info(...args);
        } else {
            console.info(...args);
        }
    },
    
    warn: (...args) => {
        if (typeof log !== 'undefined') {
            log.warn(...args);
        } else {
            console.warn(...args);
        }
    },
    
    error: (...args) => {
        if (typeof log !== 'undefined') {
            log.error(...args);
        } else {
            console.error(...args);
        }
    }
};

/**
 * Función de utilidad para debounce
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función con debounce aplicado
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
