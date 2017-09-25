import React, { Component } from 'react';
import WishItem from './WishItem';

class WishList extends Component {
  render() {
    return (
      <div>
        <table>
          {this.props.data.map((product) => {
            return(
              <WishItem
                product={product}
                key={product.id}
                handleViewItem={this.props.handleViewItem}
                handleItemDelete={this.props.handleItemDelete}
                handleItemEdit={this.props.handleItemEdit}
              />
            )})
          }
        </table>
      </div>
    )
  }
}

export default WishList;
