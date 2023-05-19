import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom';
function MovieCard(props) {
  const getDescriptionLink = () => {
    if (props.title === 'Avengers Infinity War') {
      return '/description2';
    } else if (props.title === 'Pirates of the Caribbean') {
      return '/description3';
    } else {
      return '/description1'; 
    }
  };
  return (
    <div className='container'>
      <Link to = {getDescriptionLink()}>
        <img src={props.posterURL} alt="" />
      
        </Link>
      <h1>{props.title}</h1>
      {props.description}
  
    </div>
  )
}
  
export default MovieCard;
