import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Image1 from "../hooks/Supe.jpeg";
import Image2 from "../hooks/Avengers.jpeg";
import Image3 from "../hooks/pirate.jpeg";
import AddMovies from "./AddMovies";
import Filter from "./Filter";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      title: "Man of Steel",
      description:
        "Man of Steel is an exhilarating superhero film that traces the journey of Clark Kent, a man with extraordinary powers hiding beneath his everyday persona. As Earth faces a menacing threat from General Zod, Clark must embrace his destiny as Superman to protect his adopted home and the ones he loves. Action-packed and visually stunning, this film explores themes of identity and sacrifice while showcasing Superman as a symbol of hope.",
      posterURL: Image1,
      rating: 5,
      id: 1,
    },
    {
      title: "Avengers Infinity War",
      description: "The Best Avengers movie",
      posterURL: Image2,
      rating: 4,
      id: 2,
    },
    {
      title: "Pirates of the Caribbean",
      description: "A classic movie",
      posterURL: Image3,
      rating: 3,
      id: 3,
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = (title, rating) => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    return filteredMovies;
  };

  return (
    <div>
      <AddMovies addMovie={addMovie} />
      <Filter filterMovies={filterMovies} />
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          key={movie.id}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
