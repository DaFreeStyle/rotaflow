import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import EbaySearchForm from './components/EbaySearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      inputSearchValue: '',
    }
    this.handleInputSearchOnChange = this.handleInputSearchOnChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    axios('http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=FelipeHe-RotaFlow-PRD-25d7504c4-6d3d6a4d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=chocolates&paginationInput.entriesPerPage=25&paginationInput.entriesPerPage=1')
      .then((res) => {
        this.setState({
          products: res,
        }).catch((err) => {
          console.log(err);
        });
      });
  }

  handleInputSearchOnChange(event) {
    this.setState({
      inputSearchValue: event.target.value,
    });
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    let keywords = encodeURI(this.state.inputSearchValue);
    let url = 'http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=FelipeHe-RotaFlow-PRD-25d7504c4-6d3d6a4d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=' + keywords + '&paginationInput.entriesPerPage=25&paginationInput.entriesPerPage=1';
    axios(url)
      .then((res) => {
        this.setState({
          products: res,
        }).catch((err) => {
          console.log(err);
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EbaySearchForm
          submitHandler={this.handleSearchSubmit}
          handleInputSearchOnChange={this.handleInputSearchOnChange}
          inputSearchValue={this.state.inputSearchValue}
        />
      </div>
    );
  }
}

export default App;
