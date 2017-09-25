import React, { Component } from 'react';
import axios from 'axios';

class EbaySearchForm extends Component {
  render() {
    return(
      <div>
        <h1>Ebay Search Form</h1>
        <form
          className='ebaySearch'
          onSubmit={this.props.handleSearchSubmit}
        >
          <input
            type='text'
            value={this.props.inputSearchValue}
            placeholder='Enter your keywords'
            onChange={this.props.handleInputSearchOnChange}
          />
          <button id='submit'>Search</button>
        </form>
        {this.props.products.map((product) => {
          <h2>Search results</h2>
          return (
            <div key={parseInt(product.itemId[0])}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={product.galleryURL} alt='Ebay product' />
                    </td>
                    <td>
                      <a href={product.viewItemURL} target='_blank'>{product.title}</a>
                    </td>
                    <td>
                      <button
                        onClick={(titleP, imgP, linkP) => {
                          this.props.handleAddProduct(
                            product.title[0],
                            product.galleryURL[0],
                            product.viewItemURL[0]
                            )}
                        }
                      >add</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )})
        }
      </div>

    );
  };
};

export default EbaySearchForm;
