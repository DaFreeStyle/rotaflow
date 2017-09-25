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
            isViewItem: false,
            singleItem: {},

    }
    this.handleSearchSubmit        = this.handleSearchSubmit.bind(this);
    this.handleInputSearchOnChange = this.handleInputSearchOnChange.bind(this);
    this.handleAddProduct          = this.handleAddProduct.bind(this);
    //this.handleItemAdding          = this.handleItemAdding.bind(this);
    this.handleItemDelete          = this.handleItemDelete.bind(this);
    this.handleViewItem            = this.handleViewItem.bind(this);
    this.handleItemDelete          = this.handleItemDelete.bind(this);
    this.handleItemEdit            = this.handleItemEdit.bind(this);
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
    let url = 'https://accesscontrolalloworiginall.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?SERVICE-NAME=FindingService&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=FelipeHe-RotaFlow-PRD-25d7504c4-6d3d6a4d&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&GLOBAL-ID=EBAY-US&keywords=' + keywords + '&paginationInput.entriesPerPage=25&paginationInput.entriesPerPage=10';
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

  // handleItemAdding(event) {
  //   axios.post('http://localhost:3000/api/rotas', {
  //     title: this.state.wantedItem.title,
  //     imgurl: this.state.wantedItem.imgurl,
  //     producturl: this.state.wantedItem.producturl
  //   })
  //   .then(res => {
  //     var newItem=this.state.wantedItem;
  //     this.setState((prevState) => {
  //       return {
  //         dbItems: prevState.dbItems.concat(newItem),
  //       }
  //     })
  //   }).catch(err => console.log(err));
  //     console.log(this.state.dbItems)
  //  };

  handleItemDelete(id) {
    axios.delete(`http://localhost:3000/api/rotas/${id}`)
    .then((res) => {
      let dbItems=this.state.dbItems;
      let newDbItems=[];
      dbItems.forEach((item) => {
        if (item.id !== id){
        newDbItems.push(item)
        }})
      this.setState((prevState) => {
        return{
          dbItems: newDbItems,
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

    axios.post('http://localhost:3000/api/rotas', {
      title: n.title,
      imgurl: n.imgurl,
      producturl: n.producturl,
    }).then(res => {
      console.log("inside post ", res);
      var newItem = res.data.data.data;
      this.setState((prevState) => {
        return {
          dbItems: prevState.dbItems.concat(newItem),
        }
      })
    }).catch(err => console.log(err));
  }

  handleViewItem(id) {
    const item = this.state.dbItems.filter((item) => {
      var viewItem = item.id;
      return (viewItem === id);
    });
    this.setState({
      isViewItem: true,
      singleItem: item,
    })
  }

  handleItemEdit(id) {
    axios.post(`http://localhost:3000/api/rotas/${id}`)
    .then((res) => {
      //console.log(res)
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
    console.log('dbItems after delete ' , this.state.dbItems);
    if(this.state.isViewItem){
      return(
        <div>
          <Header />
          <ViewSingleItem handleItemDelete={this.handleItemDelete} item={this.state.singleItem} />
          <Footer />
        </div>
      )
    }else{
      return (
        <div className='App'>
          <Header />
          <main className='center'>
            <Switch>
              <Route exact path='/searchform'
                render={(props) => <EbaySearchForm
                                      handleAddProduct={this.handleAddProduct}
                                      handleSearchSubmit={this.handleSearchSubmit}
                                      products={this.state.products}
                                      handleInputSearchOnChange={this.handleInputSearchOnChange}
                                      inputSearchValue={this.state.inputSearchValue}
                                      wantedItem={this.state.wantedItem}/> }
              />
              <Route exact path='/wishlist'
                render={(props) => <WishList
                                      data={this.state.dbItems}
                                      handleViewItem={this.handleViewItem}
                                      handleItemDelete={this.handleItemDelete}
                                      handleItemEdit={this.handleItemEdit}
                                    />}
              />
              <Route exact path='/wishlist/:id' component={ViewSingleItem}/>
              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Home} />
              <Redirect to='/' />
            </Switch>
          </main>
          <Footer />
        </div>
      );
    };
  }
}

export default App;
