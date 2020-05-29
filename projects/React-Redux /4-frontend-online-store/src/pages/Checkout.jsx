import React, { Component } from 'react';
import BuyerInfo from '../components/BuyerInfo';
import PaymentForms from '../components/PaymentForms';
import CartTable from '../components/CartTable';

export default class Checkout extends Component {
  render() {
    const { updateCartSize } = this.props;
    return (
      <div>
        <CartTable updateCartSize={updateCartSize} />
        <BuyerInfo />
        <PaymentForms />
        <button type="submit" className="btn btn-primary">
          Comprar
        </button>
      </div>
    );
  }
}
