import React, { Component } from 'react';
import EbaySearchForm from './EbaySearchForm';

class DisplayEbayProduct extends Component {
  render() {
    return(
      <div>
        <h2>Dispaly Ebay Products</h2>
        <EbaySearchForm />
        <table>
          <tbody>
            <tr>
              <td>
                <img src={this.props.product.galleryURL} alt='Ebay product' />
              </td>
              <td>
                <a href={this.props.product.viewItemURL} target='_blank'>{this.props.product.title}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default DisplayEbayProduct;
