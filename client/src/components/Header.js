import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Header extends Component {
render() {
const logopic = require('./img/rotowheel.png');
const Header =(prop) => {
  return (
    <div id="header-container">
      <img src={logopic} />


        <h2 id="color"> Welcome to RotaFlow</h2>
        <nav>
          <ul>
            <li><Link to='/searchForm'>Search Form</Link></li>
          </ul>
        </nav>
      </div>
      )
     };

export default Header;
