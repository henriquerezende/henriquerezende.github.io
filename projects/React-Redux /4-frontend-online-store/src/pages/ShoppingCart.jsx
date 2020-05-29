import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartTable from '../components/CartTable';

export class ShoppingCart extends Component {
  render() {
    const { updateCartSize } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <CartTable updateCartSize={updateCartSize} />
        <Link data-testid="checkout-products" to="/checkout">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
