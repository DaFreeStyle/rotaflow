import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className='about-content'>
        <h1>About</h1>
        <p>This group project is created and by the Freesytle Squad: Felipe Hernandez,
        Kitty Pelerin, and Rastko Sassic of GA. The name of our App is RotaFlow. Rota is Latin
        for wheel or a form of rotation or roster call, an overview, list of duties, or in this
          case, wish items. RotaFlow is a fun, user-friendly, organization app, which facilitates
        your wishes easier.

        The application allows users to search products online and add those products to their list
        of wished products.

        RotaFlow have two types of users, registered and guest users. Registered users make and keep a
        profile, and they can save searched products to that profile. On the other hand, guest users can
        search for wish lists of family members, friends, or people they know so that they can get those
        products for them.</p>
      </div>

    )
  }

}

export default About;
