import React from "react";
import { actors } from "../data";
import { v4 } from 'uuid';

function Actors() {
  const displayActors = actors.map((actor)=>{
    return(
      <div key={v4()}>
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map((movie)=>{
          return (<li key={v4()}>{movie}</li>)
        })}
      </ul>
    </div>
    )
  })
  
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  )
}

export default Actors;
