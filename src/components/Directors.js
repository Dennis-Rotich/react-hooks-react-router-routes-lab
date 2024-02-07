import React from "react";
import { directors } from "../data";
import { v4 } from 'uuid';

function Directors() {
  
  const displayDirectors = directors.map((director)=>{
    return (
      <div key={v4()}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map(film => <li key={v4()}>{film}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  )
}

export default Directors;
