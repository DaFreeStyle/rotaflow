import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Header = (prop) => {
  return(
    <div className="App">
      <div className="App-header">
        <img className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><Link to='/'><h2>Home</h2></Link></li>
            <li>|</li>
            <li><Link to='/searchForm'><h2>Search Products</h2></Link></li>
            <li>|</li>
            <li><Link to='/whishlist'><h2>Your Wishlist</h2></Link></li>
            <li>|</li>
            <li><Link to='/about'><h2>About</h2></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
