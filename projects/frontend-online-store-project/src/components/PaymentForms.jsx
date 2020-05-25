import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { paymentMethods } from '../services/data';
import PaymentMethod from './PaymentMethod';

export class PaymentForms extends Component {
  render() {
    return (
      <form>
        <h4>Método de Pagamento</h4>
        <div className="row">
          {paymentMethods.map(({ name }) => (
            <PaymentMethod key={name}>
              {name}
              <FontAwesomeIcon icon={faCreditCard} />
            </PaymentMethod>
          ))}
        </div>
      </form>
    );
  }
}

export default PaymentForms;
