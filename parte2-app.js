console.clear();
const catalogo = require('./app-movies/movies');

const ListadoDePeliculas = {
    peliculas: catalogo,
    //punto 1
    listMovies: function(){
        let devolverListado = this.peliculas.map((pelicula)=>{
            return pelicula;
        });
        return devolverListado;    
    },
    //punto 2
    searchMovie: function(filtro){
        //veo que llega
        let infoPelicula;
        switch( typeof  filtro){
            case 'number':
                infoPelicula = this.peliculas.find((pelicula)=>{
                    return pelicula.id === filtro;
                });
                break;
            case 'string':
                infoPelicula = this.peliculas.find((pelicula)=>{
                    return pelicula.title === filtro;
                });
                break;
        }
        

        if(infoPelicula.length >0){
            //quiere decir que hay pelicula con ese id
            return infoPelicula;
        }else{
            return null;
        }
    },
    //punto 3
    searchMovieByGenre: function(genre){
        let Lista = this.peliculas.filter((pelicula)=>{
            return pelicula.genre === genre;
        })
        return Lista;
    },
    //punto 4
    totalPrice: function(){
        let totalPrice = this.peliculas.reduce((acu, pelicula) =>acu+pelicula.price, 0);
        return totalPrice;
    },
    //punto 5
    changeMovieGenre: function(id, newGenre){
       let pelicula = this.searchMovie(id);
       if(pelicula != null){
        //la encontro, muestro original
        console.table(pelicula);

        //le cambio el genero
        pelicula.genre = newGenre;

        //vuelvo a mostrar pero con el cambio
        console.table(pelicula);
        

       }else{
        console.log("Lo siento, ese ID no existe");
       }

    },
};

/**
 *1- Ahora que el objeto literal moviesDH tiene todas las películas, es posible crear la funcionalidad listMovies. Esta tendrá la responsabilidad de retornar el listado de todas las películas existentes. Puedes utilizar cualquier método para recorrer los arrays, que desees. Para probar que la funcionalidad está correcta debes utilizar el comando que nos permite imprimir los resultados en nuestra terminal.
 */
//console.table(ListadoDePeliculas.listMovies());

 /**
  *2 - Crear la funcionalidad searchMovie que debe recibir por parámetro un id ó un title de la película. La responsabilidad de esta función será la de mostrar el detalle de alguna de las películas registradas en nuestro módulo movies, si la película no es encontrada entonces la función debe devolver null.
  */
//ListadoDePeliculas.searchMovie(1);
//ListadoDePeliculas.searchMovie("The Dark Knight");
//ListadoDePeliculas.searchMovie("asasas");

  /**
   * 3- Crear la funcionalidad searchMoviesByGenre la misma debe recibir por parámetro algunos de los géneros asignados a las películas y la responsabilidad de esta función será la de devolver una lista (array) de todas aquellas películas que posean el género indicado, de no existir ninguna de ese género de retornar null. 
   */
//console.table(ListadoDePeliculas.searchMovieByGenre("Crime"));

  /**
   * 4- También nos pide que creemos una funcionalidad totalPrice que justamente nos devuelve la sumatoria del precio (price) de todas las películas registradas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!
   */
//console.log("Total de dinero en peliculas : $" + ListadoDePeliculas.totalPrice());
  /**
   * 5 - Por último, nuestro tech leader se da cuenta que algunas de las películas deben cambiar de género. Para esto nos pide que creemos una funcionalidad changeMovieGenre que reciba el id de una película y el nuevo género a cambiar. Para esto deberíamos utilizar funcionalidad ya existente (searchMovie) y cambiar el género de la película encontrada.
   */
 ListadoDePeliculas.changeMovieGenre(1,"Action");