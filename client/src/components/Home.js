import React, { Component } from 'react';

import HeaderA from '../img/headpic1.jpg';
import HeaderB from '../img/headpic2.jpg';
import HeaderC from '../img/headpic3.jpg';

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <h1 className="welcome">Welcome to RotaFlow</h1>
        <img src ={HeaderC} className="headpics" alt="headpic"/>
      </div>    )
  }
}

export default Home;
