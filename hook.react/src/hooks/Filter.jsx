import React, { useState } from "react";

function Filter(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    props.setFilterTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    props.setFilterRating(e.target.value);
  };

  return (
    <div className="filter">
      <label htmlFor="titleFilter">Filter by title: </label>
      <input
        type="text"
        id="titleFilter"
        value={title}
        onChange={handleTitleChange}
      />
      <br />

      <label htmlFor="ratingFilter">Filter by rating: </label>
      <select id="ratingFilter" value={rating} onChange={handleRatingChange}>
        <option value="">All</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
}

export default Filter;
