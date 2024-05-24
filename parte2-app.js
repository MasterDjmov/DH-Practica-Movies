console.clear();
const listadoPeliculas = require('./app-movies/movies');

const ListadoDePeliculas = {
    peliculas: listadoPeliculas,
    //punto 1
    listMovies: function(){
        let devolverListado = this.peliculas.map((pelicula)=>{
            return pelicula;
        });
        return devolverListado;    
    },
    //punto 2
    searchMovie: function(){

    },
    //punto 3
    searchMovieByGenre: function(){

    },
    //punto 4
    totalPrice: function(){

    },
    //punto 5
    changeMovieGenre: function(){

    },
};

/**
 *1- Ahora que el objeto literal moviesDH tiene todas las películas, es posible crear la funcionalidad listMovies. Esta tendrá la responsabilidad de retornar el listado de todas las películas existentes. Puedes utilizar cualquier método para recorrer los arrays, que desees. Para probar que la funcionalidad está correcta debes utilizar el comando que nos permite imprimir los resultados en nuestra terminal.
 */
console.table(ListadoDePeliculas.listMovies());
 /**
  *2 - Crear la funcionalidad searchMovie que debe recibir por parámetro un id ó un title de la película. La responsabilidad de esta función será la de mostrar el detalle de alguna de las películas registradas en nuestro módulo movies, si la película no es encontrada entonces la función debe devolver null.
  */

  /**
   * 3- Crear la funcionalidad searchMoviesByGenre la misma debe recibir por parámetro algunos de los géneros asignados a las películas y la responsabilidad de esta función será la de devolver una lista (array) de todas aquellas películas que posean el género indicado, de no existir ninguna de ese género de retornar null. 
   */

  /**
   * 4- También nos pide que creemos una funcionalidad totalPrice que justamente nos devuelve la sumatoria del precio (price) de todas las películas registradas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!
   */

  /**
   * 5 - Por último, nuestro tech leader se da cuenta que algunas de las películas deben cambiar de género. Para esto nos pide que creemos una funcionalidad changeMovieGenre que reciba el id de una película y el nuevo género a cambiar. Para esto deberíamos utilizar funcionalidad ya existente (searchMovie) y cambiar el género de la película encontrada.
   */