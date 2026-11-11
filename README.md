# Daniel Blanco de Miguel — Portfolio 0.4

Portfolio profesional orientado a ingeniería biomédica, soluciones digitales en salud e IA. Parte del ZIP recuperado v0.2 y reconstruye los cambios solicitados que constaban en el historial posterior. No se ha recuperado el ZIP v0.3.

## Inicio

Node.js 22.12+.

```bash
npm ci
npm run dev
```

Para compilar y probar la entrega:

```bash
npm run build
npm run preview
```

## GitHub Pages

Sube el contenido de esta carpeta a `22danielblanco.github.io` y selecciona **Settings → Pages → GitHub Actions**. El workflow incluido compila y publica `dist/` al hacer push a `main`. No subas la carpeta contenedora como un nivel adicional.

No abras `index.html` con doble clic: es el punto de entrada de Vite. Usa los comandos anteriores. Para alojamiento estático sin compilación, el contenido de `dist/` ya está generado.

La entrega no se ha publicado ni ha modificado el repositorio remoto.

## Contenido

12 proyectos: AVI-MAMA, Linfochat, InterOp Studio, Guardia-MIR, HealthTech Career Studio, BusinessOS Studio, Aula Studio, WealthPilot, ATLAS, Video Studio, Natalia Blanco y Biblioverse.

Health Analytics Studio y Data Engineering Studio permanecen excluidos conforme a la petición previa. El portfolio no incorpora código de las aplicaciones privadas ni las claves necesarias para ejecutarlas.

## Estructura

- `src/projects.json`: fichas en español e inglés, funciones, stack, componentes, fuentes y medios.
- `src/main.js`: catálogo, búsqueda, filtros, ficha modal, pestañas y galería.
- `src/scene.js`: Three.js, controles orbitales, flujo animado y fallback SVG.
- `src/style.css`: diseño adaptable y estados de accesibilidad.
- `public/projects/`: medios de los proyectos; AVI incluye un vídeo aportado por el usuario.
- `.github/workflows/deploy.yml`: publicación mediante GitHub Pages.
- `AUDITORIA.md`: procedencia, alcance y limitaciones de la revisión.

## Arquitectura 3D

Cada ficha contiene cinco componentes del flujo funcional. Se pueden seleccionar desde la escena o desde la lista, rotar y acercar la cámara, pausar el flujo y restablecer la vista. Una alternativa SVG y el flujo textual mantienen la información accesible cuando WebGL no está disponible.

Las visualizaciones son esquemas funcionales, no topologías físicas de despliegue. No representan, por ejemplo, que todos los componentes se ejecuten en máquinas distintas.

El render se suspende fuera de la vista y al ocultar la pestaña; se liberan geometrías, materiales y texturas al cerrar la ficha. Se respeta `prefers-reduced-motion`.

## Imágenes

Las fichas diferencian capturas, recursos del proyecto y esquemas. No se atribuye una interfaz inventada a una aplicación. Algunas capturas corresponden a una versión anterior a la documentación; la galería explica su procedencia. Consulta AUDITORIA.md para lo que falta completar.

## Edición

Añade medios a `public/projects/<id>/` y sus rutas a `images` en `src/projects.json`. Revisa `mediaNote`, su traducción inglesa y el alcance de la versión cuando cambies capturas.

La tipografía usa Google Fonts con fallback del sistema. No hay analítica ni formularios; los enlaces de contacto conducen a GitHub y LinkedIn.
