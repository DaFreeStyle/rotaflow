import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import rotowheel from '../img/rotowheel.png';
import rotalogo from '../img/rotalogo.png';

const Header = (prop) => {
  return(
    <div className="App">
      <div className="App-header">
        <img src={rotowheel} id="rotowheel" alt="pic"/>
        <img src={rotalogo} id="rotalogo" alt="logo"/>
        <h1 id="header-title">Your fun, customizable wishlist For shopping or registries</h1>
        <nav>
          <ul className='nav-menu'>
            <li><Link to='/'><h2>Home</h2></Link></li>
            <li>|</li>
            <li><Link to='/searchform'><h2>Search Products</h2></Link></li>
            <li>|</li>
            <li><Link to='/wishlist'><h2>Your Wishlist</h2></Link></li>
            <li>|</li>
            <li><Link to='/about'><h2>About</h2></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
