import React from 'react'
import "./MovieCard.css"

const movieCard = ({poster_path,title,overview}) => {

    const API_IMG ="https://image.tmdb.org/t/p/w500/";
    

  return (
    <div className='card'>

        <div className='hero'>
            <img className='poster' src={API_IMG + poster_path}  />
            <h2 className='title'>{title}</h2>
        </div>
        <p className='overview'>{overview}</p>
    </div>
  )
}

export default movieCard