import React from "react";
import { movies } from "../data";
import { v4 } from 'uuid'

function Movies() {
  const displayMovies = movies.map((movie)=>{
    return (
      <div key={v4()} className="card">
        <h3>{movie.title}</h3>
        <p>{movie.time} minutes</p>
        <ul>
          {movie.genres.map(g=><li key={v4()}>{g}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;
