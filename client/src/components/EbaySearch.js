//EbaySearch.js

import React, { Component } from 'react';
import $ from 'jquery';
class EbaySearch extends Component {
  render(){
  return(
    <div>
    <p>Ebay Search</p>
    <form
      className='form'
      onSubmit={this.props.submit_handler}
    >
      <input
        type="text"
        value={this.props.inputSearchValue}
        name='keyword'
        placeholder="Enter keyword"
        onChange={this.props.handle_input}
      />
      <button id="submit">Search</button>
    </form>
    </div>
  )}
}
export default EbaySearch;
