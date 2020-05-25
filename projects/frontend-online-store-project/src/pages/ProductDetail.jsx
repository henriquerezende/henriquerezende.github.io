import React, { Component } from 'react';
import Rating from '../components/Rating';
import CrudCartItem from '../components/CrudCartItem';

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.productCard = this.productCard.bind(this);
  }

  productCard() {
    const { location: { state: { price, thumbnail, title, shipping } } } = this.props;
    return (
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={thumbnail} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" data-testid="product-detail-name">
                {`${title} - R$${price}`}
              </h5>
              {shipping.shipping ? (
                <p className="bg-danger text-white" data-testid="free-shipping">
                  Frete grátis
                </p>
              ) : null}
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { location: { state: { price, title, availableQuantity } } } = this.props;
    const { match: { params: { id } }, updateCartSize } = this.props;
    return (
      <div>
        <div className="container">
          {this.productCard()}
          <CrudCartItem
            product={{ id, price, title, availableQuantity }}
            updateCartSize={updateCartSize}
          />
          <Rating productId={id} />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
