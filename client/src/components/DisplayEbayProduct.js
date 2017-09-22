import React, { Component } from 'react';

class DisplayEbayProduct extends Component {
  render() {
    return(
      <table>
        <tbody>
          <tr>
            <td>
              <img src={this.props.product.galleryURL} />
            </td>
            <td>
              <a href={this.props.product.viewItemURL} target='_blank'>{this.props.product.title}</a>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default DisplayEbayProduct;
