console.clear();
/**
 * En esta primera etapa, debes generar un archivo llamado: app.js y
recuerda que necesitamos requerir tu módulo propio movies que se
encuentra en la misma carpeta del archivo donde estás trabajando.
 */
const listadoPeliculas = require('./app-movies/movies');

//observo si se cargaron bien usando table
console.table(listadoPeliculas);

/**
 * Además en este archivo necesitarás crear un objeto literal llamado
moviesDH que contendrá todas las funcionalidades que el cliente solicita.
 */

const ListadoDePeliculas = {
    peliculas: listadoPeliculas
};
