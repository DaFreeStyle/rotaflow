import React, { Component } from 'react';

class WishList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.data.map((product, i) => {
            <h2>Wish List</h2>
            return (
              <div key={i}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img src={product.imgurl} alt='wishlist product' />
                      </td>
                      <td>
                        <a href={product.producturl} target='_blank'>{product.title}</a>
                      </td>
                      <td>
                        <button>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default WishList;
