import React, { Component } from 'react';

class ViewSingleItem extends Component {
  render() {
    return (
      <div>
        <h1>ViewSingleItem</h1>
        <table>
          <tbody>
          {this.props.item.map((product) => {
            return(
              <tr>
                <td>
                  <img src={product.imgurl} alt='wishlist product' />
                </td>
                <td>
                  <a href={product.producturl} target='_blank'>{product.title}</a>
                </td>
                <td>
                  <button
                    onClick={(id) => {this.props.handleItemEdit(this.props.product.id)}}
                  >Edit</button>
                </td>
                <td>
                  <button
                    onClick={(id) => {this.props.handleItemDelete(product.id)}}
                  >Delete</button>
                </td>
              </tr>
              )})}
          </tbody>
        </table>
        <form
          className='ebaySearch'
        >
          <input
            className='singleDescription'
            type='text'
            placeholder='Enter your notes here'
          />
        </form>
      </div>
    )
  }
}

export default ViewSingleItem;
