import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Header = (prop) => {
  return(
    <div className="App">
      <div className="App-header">
        <img className="App-logo" alt="logo" />
        <h2>Welcome to RotaFlow</h2>
        <nav>
          <ul>
            <li><Link to='/searchForm'>Search Form</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
