/**
 * Crear una carpeta llamada app-movies y dentro de ella crear un archivo
movies.js el cual, debe contener un array de objetos literales. Cada objeto
literal deberá tener las propiedades: id, title, rating, awards, length, price,
genre. Asigne a cada propiedad al menos cinco (5) de sus películas favoritas,
considerando al menos alguna con los siguientes géneros: Acción -
Animación - Aventuras - Comedia - Ciencia Ficción - Suspenso.
 */

//conozco la estructura pero igual lo he generado usando chat-gpt
const peliculas = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      rating: 9.3,
      awards: ["Oscar", "Golden Globe"],
      length: 142,
      price: 19.99,
      genre: "Drama"
    },
    {
      id: 2,
      title: "The Godfather",
      rating: 9.2,
      awards: ["Oscar", "Golden Globe", "BAFTA"],
      length: 175,
      price: 24.99,
      genre: "Crime"
    },
    {
      id: 3,
      title: "The Dark Knight",
      rating: 9.0,
      awards: ["Oscar", "Golden Globe"],
      length: 152,
      price: 14.99,
      genre: "Action"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      rating: 8.9,
      awards: ["Oscar", "Golden Globe", "Palme d'Or"],
      length: 154,
      price: 18.99,
      genre: "Crime"
    },
    {
      id: 5,
      title: "The Lord of the Rings: The Return of the King",
      rating: 8.9,
      awards: ["Oscar", "Golden Globe", "BAFTA"],
      length: 201,
      price: 22.99,
      genre: "Fantasy"
    },
    {
      id: 6,
      title: "Forrest Gump",
      rating: 8.8,
      awards: ["Oscar", "Golden Globe", "BAFTA"],
      length: 142,
      price: 16.99,
      genre: "Drama"
    },
    {
      id: 7,
      title: "Inception",
      rating: 8.8,
      awards: ["Oscar", "Golden Globe", "BAFTA"],
      length: 148,
      price: 19.99,
      genre: "Sci-Fi"
    },
    {
      id: 8,
      title: "Fight Club",
      rating: 8.8,
      awards: ["Oscar"],
      length: 139,
      price: 17.99,
      genre: "Drama"
    },
    {
      id: 9,
      title: "The Matrix",
      rating: 8.7,
      awards: ["Oscar", "BAFTA"],
      length: 136,
      price: 15.99,
      genre: "Sci-Fi"
    },
    {
      id: 10,
      title: "Goodfellas",
      rating: 8.7,
      awards: ["Oscar", "BAFTA"],
      length: 146,
      price: 14.99,
      genre: "Crime"
    }
  ];
  
  module.exports = peliculas;