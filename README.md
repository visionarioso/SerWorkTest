# Plantilla para uso de Bootstrap 4 (BS4) con Gulp

Repositorio creado con el fin de optimizar el trabajo de edición de archivos SASS (usados por BS4), y mejora del flujo de trabajo a partir de BrowserSync.

Este desarrollo se soporta en lenguaje HTML, CSS (a partir de SASS) y JS (a partir de los componentes usados por BS4).

## Comenzando
Estas instrucciones les permitirán tener una copia del proyecto y correrlo en una máquina local, para propósitos de desarrollo y pruebas. *Consulte la sección Despliegue para ver como colocar el proyecto en un servidor de producción. (Próximas versiones)*

### Prerequisitos
En el FrontEnd, el proyecto usa [Bootstrap 4](https://getbootstrap.com/docs/4.2/getting-started/introduction/), por lo cual el CSS es preprocesado bajo [SASS](https://sass-lang.com/).

Para facilitar el desarrollo, el proyecto usa [Gulp.js](https://gulpjs.com/), el cual funciona bajo [node.js](https://nodejs.org/en/)

Por tanto, se debe instalar Node,js y gulp.js de forma global para que el proyecto funcione correctamente:

```
npm --version
```
```
npm install --global gulp-cli
```
Si no tiene instalado npm, siga las instrucciones de [node.js](https://nodejs.org/en/)

### Instalación
Para instalar y correr una copia local del proyecto, siga los siguientes pasos (Desde Terminal (MacOs)):

Clone el proyecto
```
git clone https://gitlab.com/visionarioso/and-test-dejimenezg.git
```
Vaya al directorio /gulp
```
cd /gulp
```
Ejecute el comando npm install
```
npm install
```
El sistema automáticamente actualiza las librerias locales para el uso de Gulp.

## Estructura de archivos
El proyecto contiene dos directorios:

* *src/* - Contiene los archivos html y js del proyecto.
* *gulp/* - Contiene las librerías necesarias para la ejecución del proyecto localmente, requeridas por node.js y por gulp.js
* *gulp/sass/* - Contiene el archivo SASS para configurar los estilos CSS del proyecto.


## Correr localmente
Ejecute el comando gulp
```
gulp
```
El sistema automáticamente actualiza las librerias locales y corre un servidor local en http://localhost:3000/

Gulp.js se encarga de administrar el servidor local (http://localhost:3000), procesar el archivo SASS (ubicado en el directorio *gulp/sass/*) y sincronizar el navegador, vía [BrowserSync](https://www.browsersync.io/docs/gulp)
Para terminar el servidor local, ejecute la tecla control y la letra ce (ctrl+c):
```
ctrl+c
```
### Pruebas
*Próximas versiones*

## Despliegue
*Próximas versiones*

## Autores

* **David Enrique Jiménez** - *Configuración de Gulp* - [visionarioso](https://github.com/visionarioso)

## License
Este proyecto está licenciado bajo Licencia MIT, debido al uso de Desarrollos bajo la misma licencia.