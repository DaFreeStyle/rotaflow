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
            <button
              onClick={(id) => {this.props.handleViewItem(this.props.product.id)}}
            >View item</button>
          </td>
          <td>
            <button
              onClick={(id) => {this.props.handleItemDelete(this.props.product.id)}}
            >Delete</button>
          </td>
        </tr>
      </tbody>
    )
  }
}
export default WishItem;
