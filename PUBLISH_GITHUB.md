# Publicar el portfolio en GitHub — guía paso a paso

Esta guía está preparada para la cuenta **22danielblanco** y no presupone experiencia previa con GitHub.

## Opción A — La más sencilla: navegador web

### 1. Crear el repositorio

En GitHub:

1. Pulsa **New repository**.
2. En **Repository name** escribe exactamente:

```text
22danielblanco.github.io
```

3. Selecciona **Public**.
4. No marques opciones para crear README, `.gitignore` o licencia: el ZIP ya los contiene.
5. Pulsa **Create repository**.

### 2. Subir los archivos

Dentro del repositorio vacío:

1. Pulsa **uploading an existing file** / **Add file → Upload files**.
2. Descomprime el ZIP del portfolio en tu PC.
3. Sube **el contenido de la carpeta**, no la carpeta contenedora como un único nivel adicional.
4. Comprueba que en la raíz ves al menos:

```text
.github/
public/
src/
index.html
package.json
vite.config.js
README.md
```

5. Escribe un mensaje de commit como:

```text
Initial portfolio v0.2
```

6. Confirma la subida.

> Si GitHub no permite subir cómodamente la carpeta `.github` desde el navegador, usa la opción B con GitHub Desktop. Esa carpeta contiene el despliegue automático.

## Opción B — Recomendable: GitHub Desktop

1. Instala GitHub Desktop.
2. Inicia sesión con **22danielblanco**.
3. Descomprime el portfolio.
4. En GitHub Desktop: **File → Add local repository**.
5. Si indica que aún no es un repositorio Git, elige crear uno en esa carpeta.
6. Publica el repositorio con el nombre:

```text
22danielblanco.github.io
```

7. Asegúrate de que el repositorio del portfolio es público.
8. Haz commit de todos los archivos y pulsa **Push origin**.

## 3. Activar GitHub Pages

Una vez estén los archivos en GitHub:

1. Abre el repositorio `22danielblanco.github.io`.
2. Ve a **Settings**.
3. En el menú lateral abre **Pages**.
4. En **Build and deployment → Source**, selecciona **GitHub Actions**.

El archivo:

```text
.github/workflows/deploy.yml
```

se ocupa de instalar las dependencias, construir la web y publicarla.

## 4. Revisar el despliegue

1. Ve a la pestaña **Actions** del repositorio.
2. Abre el workflow **Deploy portfolio to GitHub Pages**.
3. Espera a que aparezca en verde.
4. La web debería quedar disponible en:

```text
https://22danielblanco.github.io/
```

## Si falla el primer despliegue

Revisa primero estas tres cosas:

- El repositorio se llama exactamente `22danielblanco.github.io`.
- GitHub Pages tiene **GitHub Actions** como fuente.
- Todos los archivos están en la raíz correcta y existe `.github/workflows/deploy.yml`.

Si aparece un error en **Actions**, copia el texto del error y se puede corregir sin publicar ninguna de las apps privadas.

## Qué NO subir a este repositorio

No subas aquí:

- el código Angular real de AVI-MAMA u otras apps;
- `.env`;
- API keys;
- credenciales;
- endpoints internos;
- bases de datos;
- documentos sanitarios privados;
- datos reales de usuarios/pacientes/clientes;
- corpus médicos propietarios;
- configuraciones internas que no quieras hacer públicas.

Este repositorio debe contener únicamente el portfolio y sus demos sanitizadas.
