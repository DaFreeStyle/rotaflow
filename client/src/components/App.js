import React, { Component }        from 'react';
import axios                       from 'axios';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header         from './Header';
import Home           from './Home';
import EbaySearchForm from './EbaySearchForm';
import WishList       from './WishList';
import ViewSingleItem from './ViewSingleItem';
import Footer         from './Footer';
import About          from './About';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
              products: [],
               dbItems: [],
      inputSearchValue: '',
            wantedItem: {},
            isViewItem: null,
            singleItem: {},

    }
    this.handleSearchSubmit        = this.handleSearchSubmit.bind(this);
    this.handleInputSearchOnChange = this.handleInputSearchOnChange.bind(this);
    this.handleAddProduct          = this.handleAddProduct.bind(this);
    this.handleItemAdding          = this.handleItemAdding.bind(this);
    this.handleItemDelete          = this.handleItemDelete.bind(this);
    this.handleViewItem            = this.handleViewItem.bind(this);
    this.handleItemDelete          = this.handleItemDelete.bind(this);
  }

  componentDidMount() {
    axios('http://localhost:3000/api/rotas')
      .then(res => {
        this.setState(prevState => {
          return {
            dbItems: res.data.data.rotaflows,
          }
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
    let url = 'https://accesscontrolalloworiginall.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=FelipeHe-RotaFlow-PRD-25d7504c4-6d3d6a4d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=' + keywords + '&paginationInput.entriesPerPage=25&paginationInput.entriesPerPage=1';
    axios(url)
    .then((res) => {
        this.setState(prevState => {
          return {
            products: res.data.findItemsByKeywordsResponse[0].searchResult[0].item,
          }
        })
        //console.log(this.state.products);
      }).catch((err) => {
          console.log(err);
      });
  }

  handleItemAdding(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/api/rotas', {
      title: this.state.wantedItem.title,
      imgurl: this.state.wantedItem.imgurl,
      producturl: this.state.wantedItem.producturl
    })
    .then(res => {
      var newItem=this.state.wantedItem;
      this.setState((prevState) => {
        return {
          dbItems: prevState.dbItems.concat(newItem),
        }
      })
    }).catch(err => console.log(err));
      console.log(this.state.dbItems)
   };

  handleItemDelete(id) {
    event.preventDefault();
    axios.delete(`http://localhost:3000/api/rotas/${id}`)
    .then((res) => {
      console.log(res)
      //udate state5
      this.setState((prevState) => {
        return{
          dbItems: this.state.dbItems
        }
      });
    }).catch(err => console.log(err));
  }

  // method to add item
  handleAddProduct(titleP, imgP, linkP) {
    console.log('here', titleP, imgP, linkP);
    var n = {title:titleP, imgurl:imgP, producturl:linkP}
    this.setState({
      wantedItem: n,
    });
    let self = this;
    axios.post('http://localhost:3000/api/rotas', {
      title: n.title,
      imgurl: n.imgurl,
      producturl: n.producturl,
    }).then(res => {
      var newItem = self.state.wantedItem;
      self.setState((prevState) => {
        return {
          dbItems: prevState.dbItems.concat(newItem),
        }
      })
    }).catch(err => console.log(err));
  }

  handleViewItem(id) {
    var item=id;
   // event.preventDefault();
   //let self = this;
    axios.get(`http://localhost:3000/api/rotas/${item}`)
    .then((res) => {
      console.log('handleViewItem', res);
      this.setState({
          isViewItem: true,
          singleItem: res.data.data.rotaflow,
        })
    }).catch(err => console.log(err));
    console.log('isViewItem in handleViewItem ', this.state.isViewItem);
    if (this.state.isViewItem) {
      return <ViewSingleItem />
    }
  }

  handleItemEdit(id) {
    axios.post(`http://localhost:3000/api/rotas/${id}`)
    .then((res) => {
      console.log(res)
      //udate state5
      this.setState((prevState) => {
        return{
          dbItems: this.state.dbItems
        }
      });
    }).catch(err => console.log(err));
  }

  render() {
    console.log('singleItem in Render ' , this.state.singleItem);
    return (
      <div className='App'>
        <Header />
        <main className='center'>
          <Switch>
            <Route exact path='/searchForm'
              render={(props) => <EbaySearchForm
                                    handleAddProduct={this.handleAddProduct}
                                    handleSearchSubmit={this.handleSearchSubmit}
                                    products={this.state.products}
                                    handleInputSearchOnChange={this.handleInputSearchOnChange}
                                    inputSearchValue={this.state.inputSearchValue}
                                    wantedItem={this.state.wantedItem}/> }
            />
            <Route exact path='/whishlist'
              render={(props) => <WishList
                                    data={this.state.dbItems}
                                    handleViewItem={this.handleViewItem}
                                    handleItemDelete={this.handleItemDelete}
                                  />}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Home} />
            <Redirect to='/' />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
