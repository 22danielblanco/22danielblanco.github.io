# Auditoría de la entrega 0.4

Fecha: 11 de noviembre de 2026.

## Recuperación y alcance

Se revisó el inventario recuperado de DANI PROJECTS. La última base de portfolio disponible fue v0.2; las decisiones posteriores se reconstruyeron a partir del historial. No se dispone del ZIP v0.3. Esta entrega no se ha publicado en GitHub.

Las funcionalidades se describen a partir de los archivos disponibles, sin equiparar revisión de código a una validación completa de los productos. Linfochat es la excepción: se documenta exclusivamente a partir del CV más reciente, siguiendo la preferencia del usuario. Su diagrama es conceptual y no acredita una implementación concreta del backend RAG.

## Fuentes y medios

| Proyecto | Fuente revisada | Imágenes |
|---|---|---|
| AVI-MAMA | AVI_MAMA_IA_v0.15_Gemini.zip · README.md, package.json, src/app y server/ | projects/avi/avi-main.png / projects/avi/avi-visual.png |
| Linfochat | Daniel_Blanco_de_Miguel_FlowCV_Resume_2026-11-09 (2).pdf · página 2: Proyectos Propios y Reconocimientos y premios. Periodo: noviembre–diciembre de 2024. | Pendientes; no se ha inventado una interfaz |
| InterOp Studio | InterOp_Studio_v2_9_Laboratorio_Plegado_Segmentos_HL7.zip · app.js, mapping-visual.js, visual-executor.js, journey-engine.js, hl7-sequence.js | projects/interop/mappings.webp / projects/interop/laboratory.webp / projects/interop/home.webp |
| Guardia-MIR | guardia-mir-src-ai-local-v1.zip · AI_LOCAL_IMPLEMENTATION.md, src/app/core/services y src/app/pages | projects/guardia/onboarding.webp |
| HealthTech Career Studio | healthtech-career-studio-v0.10.0(1).zip + overlay-performance-data-quality-v2 · docs/ARCHITECTURE.md, tools/ingestion, src/app | projects/career/ai.webp / projects/career/home.webp |
| BusinessOS Studio | BusinessOS_Studio_v1.1.0_Commercial_Readiness_FINAL.zip · README.md, app/, worker/, requirements.txt | Pendientes; no se ha inventado una interfaz |
| Aula Studio | aula-studio-1.0.zip · README.md, package.json, server.js | Pendientes; no se ha inventado una interfaz |
| WealthPilot | wealthpilot-v1.0.9.zip · package.json, src/app/core/*engine.service.ts, src/app/pages | Pendientes; no se ha inventado una interfaz |
| ATLAS | ATLAS_Cloud_v0.2_PROYECTO_COMPLETO.zip · package.json y fuentes de atlas-cloud/ | projects/atlas/dashboard.webp / projects/atlas/backtest.webp |
| Video Studio | Video-Studio-Local-v0.11.19.zip + VideoStudio_OVERLAY_0_11_21_DESCARGA.zip · ARQUITECTURA.md y server/ | Pendientes; no se ha inventado una interfaz |
| Natalia Blanco | Natalia_Blanco_Artist_Web_v4.zip · README.md, app.js, styles.css, assets/media/ | projects/natalia/site.webp / projects/natalia/natalia-alquimia-portrait.webp / projects/natalia/alquimia-del-ser.webp |
| Biblioverse | Biblioverse_38_Mapas_3D_Proyecto_Completo.zip · README.md, src/data/literarySetpiecesV38.js, src/render/LiteraryArchitectureV38.js | projects/biblio/maps.webp |

## Límites por proyecto

### AVI-MAMA

Prototipo educativo sin validación clínica. La integración Gemini está acotada a pruebas privadas; el corpus requiere revisión. Las capturas muestran la interfaz anterior 0.11.x.



### Linfochat

Ficha basada en el CV y en la confirmación del autor. No se ha recuperado el código ni capturas. El diagrama representa el patrón conceptual de una aplicación RAG, no una topología de implementación verificada.



### InterOp Studio

Herramienta educativa y de diseño. No es un servidor FHIR ni una certificación de conformidad; los candidatos CIE requieren verificación.



### Guardia-MIR

La entrega disponible contiene src y el parche IA, sin el proyecto de compilación completo. La IA requiere pruebas en los dispositivos de destino.

Captura del formulario inicial del código recuperado, ejecutado en un entorno de compilación reconstruido. No valida el resto de funciones ni la IA.

### HealthTech Career Studio

El score de encaje es heurístico, no una probabilidad de contratación. La disponibilidad de fuentes depende de sus permisos y configuración.

Capturas reales de la aplicación compilada con los overlays recuperados y una corrección de tipos para TypeScript. El catálogo no se ha actualizado mediante ingesta en esta demostración.

### BusinessOS Studio

La implantación requiere validar infraestructura y configuración. La integración fiscal externa no está habilitada por defecto. Capturas pendientes.



### Aula Studio

La topología PostgreSQL y object storage requiere validación por despliegue. Capturas pendientes.



### WealthPilot

Simulaciones basadas en hipótesis. Las integraciones externas dependen del proveedor. Capturas pendientes.



### ATLAS

Paper trading: no implica rentabilidad futura ni ejecución real de órdenes. Las imágenes son previews incluidas en la entrega.



### Video Studio

La relevancia de imágenes y los resultados dependen de proveedores y configuración; requieren revisión editorial. Capturas pendientes.



### Natalia Blanco

La versión materializada es la v4; las mejoras v5/v6 mencionadas en el historial no están en este ZIP.

Captura real de la web v4 ejecutada en esta revisión, seguida de fotografía y portada usadas en el proyecto. WebGL no estaba disponible en el navegador de pruebas.

### Biblioverse

Proyecto experimental inspirado en obras literarias. El esquema de mapas incluido es un recurso técnico del proyecto, no una captura del juego.

Esquema técnico de los mapas incluido en la versión 38; no es una captura WebGL del juego.

## Comprobación técnica del portfolio

- Compilación de producción con Vite completada. Dependencias fijadas en package-lock.json.
- Revisión visual de escritorio y marco de 390 px de ancho.
- Comprobados búsqueda, cambio ES/EN, apertura de fichas y pestañas de descripción/arquitectura.
- El navegador de revisión deshabilita WebGL. Se comprobó el fallback SVG y el selector de componentes; queda pendiente comprobar la escena 3D con aceleración gráfica en un navegador compatible.
- La compilación informa de un chunk Three.js superior a 500 kB antes de gzip. Se mantiene separado del código de contenido.
- Se verifican por script 12 IDs únicos, traducciones, cinco nodos por ficha y existencia de medios referenciados.

## Capturas obtenidas durante la revisión

InterOp se ejecutó directamente. HealthTech Career se compiló con los overlays recuperados y ajustes de compatibilidad de tipos; las capturas no implican ingestión actualizada de ofertas. Guardia-MIR se compiló en un entorno reconstruido (el original solo contenía src), con ajustes de compatibilidad y corrección local de un identificador en el agente; la imagen muestra únicamente el formulario inicial. Natalia corresponde a la versión recuperada v4. AVI y ATLAS conservan medios ya aportados. Biblioverse muestra un esquema del proyecto, identificado como tal, no una captura del juego.

Los entornos temporales de revisión y el código de los proyectos originales NO se incluyen en este ZIP. Solo se incluyen el código del portfolio, sus medios y la compilación estática.

## Pendientes reales

- Incorporar código y capturas reales de Linfochat; el CV acredita Angular, Ionic, LLMs y RAG, pero no permite identificar modelos, base vectorial o infraestructura.
- Obtener capturas verificadas de BusinessOS, Aula, WealthPilot y Video Studio. Ampliar Guardia-MIR más allá de la pantalla inicial y Biblioverse con imágenes del juego.
- Contrastar posibles proyectos/versiones que no estuvieran disponibles en el inventario recuperado. SIREN/TAT no se ha incorporado en esta entrega: requiere revisar su versión vigente y preparar medios públicos sin información hospitalaria.
- Revisar Three.js en un equipo con WebGL y publicar en el repositorio cuando corresponda.
