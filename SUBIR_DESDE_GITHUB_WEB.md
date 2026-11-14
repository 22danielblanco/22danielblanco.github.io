# Actualización desde la web de GitHub

Esta entrega no incluye la carpeta `dist`. El workflow de GitHub Actions la genera al publicar y así se evita duplicar todos los recursos.

1. Descomprime `Daniel_Blanco_Portfolio_v0.6_WEB_UPLOAD.zip` en el ordenador.
2. Entra en `22danielblanco/22danielblanco.github.io` y permanece en la rama `main`.
3. Pulsa `Add file` y después `Upload files`.
4. Arrastra a la zona de subida el contenido descomprimido. Deben aparecer rutas como `src/projects.json`, `public/projects/avi/demo.mp4` y `public/projects/wealth/wealth-demo.webp`.
5. No subas el archivo ZIP. GitHub no lo descomprime y lo trataría como un archivo único.
6. Confirma el commit y comprueba el resultado en `Actions`.

Si el navegador no conserva las carpetas al seleccionarlas, arrástralas directamente desde el Explorador de Windows a la zona de subida. También puedes subir primero `src`, confirmar el commit, subir después `public` y confirmar un segundo commit.

La carpeta `.github` solo es necesaria si el workflow no existe ya en el repositorio. En ese caso, GitHub Desktop es el método más fiable para añadirla porque Windows puede ocultar carpetas cuyo nombre empieza por punto.
