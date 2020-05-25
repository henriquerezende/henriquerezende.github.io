import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { updateCart } from '../services/crudCart';

export class CrudCartItem extends Component {
  constructor(props) {
    super(props);

    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const { product: { id } } = props;
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    let quantity = 1;
    if (itemIndex !== -1) {
      quantity = cartItems[itemIndex].quantity;
    }

    this.state = ({ quantity });

    this.addProductToCart = this.addProductToCart.bind(this);
    this.subProductToCart = this.subProductToCart.bind(this);
  }

  addProductToCart() {
    const { quantity } = this.state;
    const { product: { availableQuantity } } = this.props;
    if (quantity < availableQuantity) this.setState({ quantity: quantity + 1 });
  }

  subProductToCart() {
    const { quantity } = this.state;
    if (quantity > 1) this.setState({ quantity: quantity - 1 });
  }

  render() {
    const { quantity } = this.state;
    const { product: { id, price, title, availableQuantity }, updateCartSize } = this.props;
    return (
      <div>
        <h5>Quantidade</h5>
        <button type="button" onClick={this.addProductToCart} className="btn btn-link">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={this.subProductToCart} className="btn btn-link">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input
          data-testid="product-detail-add-to-cart"
          type="button"
          value="Adicionar ao Carrinho"
          className="btn btn-link"
          onClick={() => {
            updateCart(title, price, id, quantity, availableQuantity);
            updateCartSize();
          }}
        />
      </div>
    );
  }
}

export default CrudCartItem;
