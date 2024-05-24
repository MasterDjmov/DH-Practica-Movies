console.clear();
/**
 * cargo las peliculas desde su carpeta
 */
const peliculas = require('./app-movies/movies');

//observo si se cargaron bien usando table
console.table(peliculas);
