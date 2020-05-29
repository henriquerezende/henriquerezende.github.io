import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/crudCart';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.addCartInput = this.addCartInput.bind(this);
  }

  addCartInput() {
    const {
      product:
      { title, price, id, available_quantity: availableQuantity },
      updateCartSize,
    } = this.props;
    return (
      <input
        data-testid="product-add-to-cart"
        className="btn btn-link"
        value="Adicionar ao Carrinho"
        type="button"
        onClick={() => {
          addToCart(title, price, id, availableQuantity);
          updateCartSize();
        }}
      />
    );
  }

  render() {
    const { product: { title, price, thumbnail, id, shipping } } = this.props;
    const { product: { available_quantity: availableQuantity } } = this.props;
    return (
      <div className="col mb-3" data-testid="product">
        <div className="card text-center" style={{ width: '18rem' }}>
          <img src={thumbnail} alt={`${title} thumbnail`} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {shipping.free_shipping ? (
              <p className="bg-danger text-white" data-testid="free-shipping">
                Frete grátis
              </p>
            ) : null}
            <p className="card-text">{`R$${price}`}</p>
            <Link
              to={{
                pathname: `/product/${id}`,
                state: { title, thumbnail, price, shipping, availableQuantity, id },
              }}
              className="btn btn-link"
              data-testid="product-detail-link"
            >
              Detalhes
            </Link>
            {this.addCartInput()}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
