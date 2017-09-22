import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = (prop) => {
  return(
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to RotaFlow</h2>
      </div>
    </div>
  );
}

export default Header;
