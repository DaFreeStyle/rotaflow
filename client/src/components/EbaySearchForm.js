import React, { Component } from 'react';
import axios from 'axios';
import DisplayEbayProduct from './DisplayEbayProduct';

class EbaySearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      inputSearchValue: '',

    }
    this.handleInputSearchOnChange = this.handleInputSearchOnChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleInputSearchOnChange(event) {
    this.setState({
      inputSearchValue: event.target.value,
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    let keywords = encodeURI(this.state.inputSearchValue);
    let url = 'https://accesscontrolalloworiginall.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=FelipeHe-RotaFlow-PRD-25d7504c4-6d3d6a4d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=' + keywords + '&paginationInput.entriesPerPage=25&paginationInput.entriesPerPage=10';
    axios(url)
    .then((res) => {
        this.setState(prevState => {
          return {
            products: res.data.findItemsByKeywordsResponse[0].searchResult[0].item,
          }
        })
        console.log(this.state.products);
      }).catch((err) => {
          console.log(err);
      });
  }

  render() {
    return(
      <div>
        <h1>Ebay Search Form</h1>
        <form
          className='ebaySearch'
          onSubmit={this.handleSearchSubmit}
        >
          <input
            type='text'
            value={this.state.inputSearchValue}
            placeholder='Enter your keywords'
            onChange={this.handleInputSearchOnChange}
          />
          <button id='submit'>Search</button>
        </form>
        {this.state.products.map((product) => {
          return (
            <div>
              <h2>Search results</h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={product.galleryURL} alt='Ebay product' />
                    </td>
                    <td>
                      <a href={product.viewItemURL} target='_blank'>{product.title}</a>
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
