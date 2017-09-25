import React, { Component } from 'react';
import Fist from '../img/fist.jpg';
import Heart from '../img/heart.png';
import Sweat from '../img/sweat.png';

class Footer extends Component {
  render() {
    return(
      <div className="footer-area">
        <div id="footer-content">
          <p>Made with Love, Sweat, and Team Work.  Boom! Fresh from the Freestyle Squad. 2017 </p>
          <img src={Heart} id="heart" alt="heart" />
          <img src={Sweat} id="sweat" alt="sweat" />
          <img src={Fist} id="fist" alt="fist" />

        </div>
      </div>
    )
  };
}

export default Footer;
