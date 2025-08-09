# 🏎 Escuderías F1 - Gestión de Equipos

Aplicación web para gestionar y visualizar equipos de Fórmula 1 con funcionalidades avanzadas de búsqueda y persistencia de datos.

## ✨ Funcionalidades

### 🆕 Nuevas Funcionalidades
- **Botón "Mostrar Equipos"**: Lista todos los equipos de las escuderías F1
- **Buscador en tiempo real**: Filtra equipos por nombre con debounce de 250ms
- **Persistencia de datos**: Almacenamiento en localStorage con semilla inicial
- **UI moderna**: Interfaz mejorada con Tailwind CSS
- **Alertas elegantes**: SweetAlert2 para mensajes informativos
- **Logging avanzado**: Loglevel para gestión de logs

### 🔄 Compatibilidad Legacy
- Mantiene todas las funcionalidades existentes
- Migración automática de datos legacy
- Funciones de búsqueda y visualización originales preservadas

## 🚀 Despliegue Rápido

### Opción 1: GitHub Pages
1. Sube el código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main y la carpeta raíz
4. Tu aplicación estará disponible en `https://tuusuario.github.io/turepositorio`

### Opción 2: Netlify
1. Arrastra la carpeta del proyecto a [Netlify](https://netlify.com)
2. Tu aplicación se desplegará automáticamente
3. Obtendrás una URL como `https://tu-app.netlify.app`

### Opción 3: Vercel
1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente que es una aplicación estática
3. Se desplegará en `https://tu-app.vercel.app`

### Opción 4: Servidor Local
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## 🏗️ Estructura del Proyecto

```
Javascript/
├── index.html              # Página principal (listo para producción)
├── css/
│   └── style.css           # Estilos mejorados + compatibilidad
├── js/
│   ├── main.js             # Archivo principal (refactorizado)
│   ├── data.js             # Datos legacy (mantenido)
│   ├── data/
│   │   └── teams.js        # Semilla de equipos F1
│   ├── services/
│   │   └── storage.js      # Servicio de localStorage
│   ├── utils/
│   │   └── logger.js       # Logger con loglevel + debounce
│   └── ui/
│       ├── render.js       # Funciones de renderizado
│       └── events.js       # Manejadores de eventos
├── .gitignore              # Archivos a excluir del repositorio
└── README.md               # Documentación
```

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica mejorada
- **CSS3 + Tailwind CSS**: Estilos modernos y responsive
- **JavaScript ES6+**: Módulos ES6, async/await, arrow functions
- **SweetAlert2**: Alertas y modales elegantes
- **Loglevel**: Sistema de logging avanzado
- **localStorage**: Persistencia de datos del lado cliente

## 📋 Criterios de Aceptación Cumplidos

✅ **Datos y persistencia**
- Archivo `js/data/teams.js` con semilla de 10 equipos F1
- Servicio `js/services/storage.js` con funciones getTeams(), setTeams(), seedIfEmpty()
- Inicialización automática de datos semilla

✅ **UI/UX y estética**
- Tailwind CSS integrado vía CDN
- Layout responsive (desktop y mobile)
- Barra superior con título "Escuderías F1"
- Controles: botón "Mostrar equipos" + input de búsqueda
- Grid responsive para tarjetas
- Accesibilidad: aria-labels, foco visible, roles correctos

✅ **Botón "Mostrar equipos"**
- Carga equipos desde localStorage con getTeams()
- Renderiza tarjetas con nombre y país
- Modal informativo si no hay datos (SweetAlert2)

✅ **Buscador en tiempo real**
- Input type="search" con placeholder
- Debounce de 250ms implementado
- Filtrado case-insensitive por nombre
- Estado vacío en UI (no alertas)

✅ **Reemplazo de console.log, alert, prompt**
- Loglevel integrado para logging
- SweetAlert2 para alertas y modales
- Logger configurado en `js/utils/logger.js`
- TODOS los console.* reemplazados por logger.*

✅ **Estructura modular**
- Organización por módulos: data, services, utils, ui
- Funciones puras en render.js
- Separación de responsabilidades

✅ **Estilo visual**
- Botón: clases Tailwind para diseño moderno
- Input: estilos consistentes con focus states
- Grid: responsive con breakpoints
- Tarjetas: hover effects y transiciones

## 🎯 Funcionalidades Específicas

### Semilla de Equipos F1
```javascript
const F1_TEAMS_SEED = [
    { id: "red-bull", name: "Red Bull Racing", country: "Austria" },
    { id: "mercedes", name: "Mercedes-AMG", country: "Germany" },
    // ... 8 equipos más
];
```

### Servicios de Almacenamiento
- `getTeams()`: Lee desde localStorage
- `setTeams(teams)`: Guarda array en localStorage
- `seedIfEmpty()`: Inicializa semilla si no hay datos
- `migrateLegacyData()`: Migra datos del formato anterior

### Sistema de Logging
```javascript
logger.info("Mensaje informativo");
logger.warn("Advertencia");
logger.error("Error crítico");
```

### Búsqueda con Debounce
- Filtrado en tiempo real
- 250ms de debounce para optimizar rendimiento
- Búsqueda case-insensitive

## 🔧 Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en un navegador moderno
3. **Usar** las funcionalidades:
   - Click en "Mostrar Equipos" para cargar todos los equipos
   - Escribir en el buscador para filtrar en tiempo real
   - Los datos se persisten automáticamente en localStorage

## 🎨 Características de Diseño

- **Tema oscuro** con colores F1
- **Responsive design** para móvil y desktop
- **Animaciones suaves** y transiciones
- **Estados de carga** con spinners
- **Mensajes informativos** elegantes
- **Accesibilidad** mejorada

## 🔄 Migración de Datos

La aplicación detecta automáticamente si existen datos en el formato anterior y los migra al nuevo formato, manteniendo la compatibilidad total.

## 📝 Logs y Debugging

El sistema de logging permite diferentes niveles:
- **Development**: Todos los logs visibles
- **Production**: Solo warnings y errors

## 🌐 Compatibilidad de Navegadores

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

## 📱 PWA Ready

La aplicación está preparada para convertirse en PWA (Progressive Web App) agregando:
- Manifest.json
- Service Worker
- Iconos offline

## 🚀 Próximas Mejoras

- [ ] Filtros adicionales (por país, año)
- [ ] Estadísticas de equipos
- [ ] Modo offline con Service Workers
- [ ] Exportación de datos
- [ ] Temas personalizables
- [ ] PWA completa

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request.

---

**Commit**: `feat(f1): mostrar equipos, buscador, localStorage, sweetalert2 y loglevel; mejora estética`

**Versión**: 1.0.0  
**Estado**: ✅ Listo para producción
