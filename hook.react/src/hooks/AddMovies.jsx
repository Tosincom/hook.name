import React, { useState } from "react";

function AddMovies(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title: title,
      description: description,
      posterURL: posterURL,
      rating: rating,
      id: Math.floor(Math.random() * 100),
    };
    props.addMovie(newMovie);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <div ><form onSubmit={handleSubmit} className="add-movies-form">
    <label htmlFor="title">Title: </label>
    <input
      type="text"
      id="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
    <br />

    <label htmlFor="description">Description: </label>
    <textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    />
    <br />

    <label htmlFor="posterURL">Poster URL: </label>
    <input
      type="text"
      id="posterURL"
      value={posterURL}
      onChange={(e) => setPosterURL(e.target.value)}
      required
    />
    <br />

    <label htmlFor="rating">Rating: </label>
    <input
      type="number"
      id="rating"
      min="1"
      max="5"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      required
    />
    <br />

    <button type="submit">Add Movie</button>
  </form></div>
    
  );
}

export default AddMovies;
