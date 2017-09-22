import React, { Component } from 'react';

class EbaySearchForm extends Component {
  render() {
    return(
      <div>
        <h1>Ebay Search Form</h1>
        <form
          className='ebaySearch'
          onSubmit={this.props.submitHandler}
        >
          <input
            type='text'
            value={this.props.inputSearchValue}
            placeholder='Enter your keywords'
            onChange={this.props.handleInputSearchOnChange}
          />
          <button id='submit'>Search</button>
        </form>

      </div>

    );
  };
};

export default EbaySearchForm;
