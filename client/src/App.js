import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import EbaySearchForm from './components/EbaySearchForm';
import DisplayEbayProduct from './components/DisplayEbayProduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      dbItems: [],
      inputSearchValue: '',

    }
    //this.handleInputSearchOnChange = this.handleInputSearchOnChange.bind(this);
    //this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    axios('https://accesscontrolalloworiginall.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=FelipeHe-RotaFlow-PRD-25d7504c4-6d3d6a4d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=chocolates&paginationInput.entriesPerPage=25&paginationInput.entriesPerPage=1')
    .then((res) => {
      // console.log('didMount before setState ', res.data);
        this.setState(prevState => {
          return {products: res.data.findItemsByKeywordsResponse[0].searchResult[0].item,}
        })
        //console.log('didMount Products ',this.state.products);
    }).catch((err) => {
        console.log(err);
    });

  }

  // handleInputSearchOnChange(event) {
  //   this.setState({
  //     inputSearchValue: event.target.value,
  //   });
  // }

  // handleSearchSubmit(event) {
  //   event.preventDefault();
  //   let keywords = encodeURI(this.state.inputSearchValue);
  //   let url = 'https://accesscontrolalloworiginall.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=FelipeHe-RotaFlow-PRD-25d7504c4-6d3d6a4d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=' + keywords + '&paginationInput.entriesPerPage=25&paginationInput.entriesPerPage=1';
  //   axios(url)
  //   .then((res) => {
  //       this.setState(prevState => {
  //         return {
  //           products: res.data.findItemsByKeywordsResponse[0].searchResult[0].item,}
  //       })
  //     }).catch((err) => {
  //         console.log(err);
  //     });
  // }

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/searchForm' component={EbaySearchForm} />
            <Route exact path='/displayProduct' component={DisplayEbayProduct} />
            <Route exact path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
