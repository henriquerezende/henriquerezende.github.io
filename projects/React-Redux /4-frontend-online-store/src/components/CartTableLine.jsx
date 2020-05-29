import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addToCart, subToCart, deleteCartItem } from '../services/crudCart';

export class CartTableLine extends Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
    this.quantityCrud = this.quantityCrud.bind(this);
    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
  }

  deleteButton() {
    const {
      updateCartItems,
      updateCartSize,
      item: { id },
    } = this.props;
    return (
      <th scope="row">
        <button
          type="button"
          onClick={() => {
            deleteCartItem(id);
            updateCartItems();
            updateCartSize();
          }}
          className="btn text-danger"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </th>
    );
  }

  decreaseButton() {
    const {
      item: { id },
      updateCartItems,
      updateCartSize,
    } = this.props;
    return (
      <button
        data-testid="product-decrease-quantity"
        type="button"
        onClick={() => {
          subToCart(id);
          updateCartItems();
          updateCartSize();
        }}
        className="btn btn-link"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    );
  }

  increaseButton() {
    const {
      item: { title, price, id, availableQuantity },
      updateCartItems,
      updateCartSize,
    } = this.props;
    return (
      <button
        data-testid="product-increase-quantity"
        type="button"
        onClick={() => {
          addToCart(title, price, id, availableQuantity);
          updateCartItems();
          updateCartSize();
        }}
        className="btn btn-link"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    );
  }

  quantityCrud() {
    const { item: { quantity } } = this.props;
    return (
      <td data-testid="shopping-cart-product-quantity">
        {this.increaseButton()}
        <span>{quantity}</span>
        {this.decreaseButton()}
      </td>
    );
  }

  render() {
    const { item: { title, price } } = this.props;
    return (
      <tr>
        {this.deleteButton()}
        <td data-testid="shopping-cart-product-name">{title}</td>
        <td>R$ {price}</td>
        {this.quantityCrud()}
      </tr>
    );
  }
}

export default CartTableLine;
