import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import EbaySearchForm from './components/EbaySearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      dbItems: [],
      inputSearchValue: '',
      wantedItem: {},

    }
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleItemAdding = this.handleItemAdding.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
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

    axios('http://localhost:3001/api/rotas')
      .then(res => {
        this.setState(prevState => {
          return {
            dbItems: res.data.data.rotaflows,
          }
      });
    });

  }

handleItemAdding(event) {
  event.preventDefault();
  axios.post('http://localhost:3001/api/rotas', {
    title: this.state.wanteditem.title,
    imgurl: this.state.wanteditem.imgurl,
    producturl: this.state.wanteditem.producturl
  })
  .then(res => {
    var newItem=this.state.wanteditem;
    this.setState((prevState) => {
      return {
        dbItems: prevState.dbItems.concat(newItem),
      }
    })
  }).catch(err => console.log(err));
    console.log(this.state.dbItems)
 };

handleItemDelete(event) {
  var id=90;
  event.preventDefault();
  axios.delete(`http://localhost:3001/api/rotas/${id}`).then((res) => {
  console.log(res)
  //udate state5
  this.setState({dbItems: this.state.dbItems})
  })
}

  // method to add item
  handleAddProduct(titleP, imgP, linkP) {
    console.log('here', titleP, imgP, linkP);
    var n = {title:titleP, imgurl:imgP, producturl:linkP}
    this.setState({
      wantedItem: n,
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
    console.log('setState ', this.state.wantedItem);
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/searchForm'
              render={(props) => <EbaySearchForm handleAddProduct={this.handleAddProduct} wantedItem={this.state.wantedItem}/> }
            />
            <Route exact path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
