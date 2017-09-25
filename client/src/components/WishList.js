import React, { Component } from 'react';
import WishItem from './WishItem';

class WishList extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <table>
              {this.props.data.map((product) => {
                return(
                  <WishItem
                    product={product}
                    key={product.id}
                    handleViewItem={this.props.handleViewItem}
                    handleItemDelete={this.props.handleItemDelete}
                    handleItemEdit={this.porps.handleItemEdit}
                  />
                )})
              }
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default WishList;
