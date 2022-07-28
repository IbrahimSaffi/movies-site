import React from 'react'

export default function MoviesPage(props) {
  return (
    <div>
      <img className='backdrop' src={`https://image.tmdb.org/t/p/w1280${props.movie.backdrop_path}`} alt="" />
      <div className='poster-details' >
      <img className='poster' src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt="" />      
      <div className='movie-details' >
        <h1>{props.movie.title}</h1>
        <p>{props.movie.overview}</p>
        <div className='genres' >
           {props.movie.genre_ids.map(ele=>{
            return props.gen.genres.map(gen=>{
              if(gen["id"]===ele){
                return <h3>{gen["name"]}</h3>
              }
            })
          })} 
        </div>
        <button className='trailer'>
           <a href={`https://www.${props.url}`} target ="_blank">
          <p>Watch Trailer </p>
          <img className='play' src="../play.png" alt="" srcset="" />
          </a> 
          </button>
      </div>
      </div>
    </div>
  )
}
