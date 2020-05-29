import React, { Component } from 'react';

export class PaymentMethod extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="form-check form-check-inline">
        <input type="radio" className="form-check-input" id="paymentMethod" name="paymentMethod" />
        <label className="form-check-label" htmlFor="materialInline1">
          {children}
        </label>
      </div>
    );
  }
}

export default PaymentMethod;
