import React from 'react'
import "../index.css"
function MovieCard(props) {
  return (
    <div className='container'>
        <img src={props.posterURL} alt="" />
      <h1>{props.title}</h1>
      {props.description}
    
    </div>
  )
}

export default MovieCard;
