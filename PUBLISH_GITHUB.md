# Actualizar el portfolio existente

Descomprime el ZIP. Abre el repositorio 22danielblanco/22danielblanco.github.io con una cuenta que tenga permiso de escritura.

Desde la raíz del repositorio, abre **Add file → Upload files**. Arrastra desde el explorador las carpetas completas **src** y **public**, junto con **index.html**, **package.json**, **package-lock.json** y **vite.config.js**. Verifica que la lista muestre rutas como **src/projects.json** y **public/projects/wealth/wealth-demo.webp** antes de confirmar el commit. El workflow ya existente en **.github/workflows/deploy.yml** compila el sitio cuando se actualiza main. La carpeta dist del ZIP permite servir directamente una copia compilada.

Si la subida web omite subcarpetas, abre el repositorio existente en GitHub Desktop con **File → Clone repository**. Copia el contenido del ZIP en la carpeta clonada, combinando las carpetas y reemplazando archivos coincidentes. Comprueba las rutas en **Changes**, crea el commit y pulsa **Push origin**.

En GitHub, abre **Actions** y comprueba que el despliegue termina en verde. El sitio se configura en **Settings → Pages → GitHub Actions**.
