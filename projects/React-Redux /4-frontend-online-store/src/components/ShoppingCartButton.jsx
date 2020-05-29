import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export class ShoppingCartButton extends Component {
  render() {
    const { cartSize } = this.props;
    return (
      <Link to="/shoppingCart" data-testid="shopping-cart-button">
        <span data-testid="shopping-cart-size" className="cart-size">{cartSize}</span>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      </Link>
    );
  }
}

export default ShoppingCartButton;
