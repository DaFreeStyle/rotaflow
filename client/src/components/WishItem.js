import React, { Component } from 'react';

class WishItem extends Component {
  render() {
    return(
      <tbody>
        <tr>
          <td>
            <img src={this.props.product.imgurl} alt='wishlist product' />
          </td>
          <td>
            <a href={this.props.product.producturl} target='_blank'>{this.props.product.title}</a>
          </td>
          <td>
            <button>View item</button>
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    )
  }
}
export default WishItem;
