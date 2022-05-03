import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return <>
  <ul className='top-navbar-fixed'>
  <li><Link className="active" to="*">HOME</Link></li>
  <li><Link to="/movies">MOVIES</Link></li>
  <li><Link to="/color-games">COLOR GAME</Link></li>
  <li><Link to="/add-movies">ADD MOVIE</Link></li>
  <li><Link to="/mode">LIGHT MODE</Link></li>
</ul>

    </>
}

export default TopNavbar