import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const stylesLink = {
    padding: '10px'
  }
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink to='/' style={stylesLink}>Home</NavLink>
      <NavLink to='/movies' style={stylesLink}>Movies</NavLink>
      <NavLink to='/directors' style={stylesLink}>Directors</NavLink>
      <NavLink to='/actors' style={stylesLink}>Actors</NavLink>
    </div>
  )
}

export default NavBar;
