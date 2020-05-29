import React, { Component } from 'react';
import CartTableLine from './CartTableLine';

const cartTableHeader = () => (
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Preço</th>
      <th scope="col">Quantidade</th>
    </tr>
  </thead>
);

export class CartTable extends Component {
  constructor(props) {
    super(props);
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.state = { cartItems, totalCartPrice: 0 };
    this.updateCartItems = this.updateCartItems.bind(this);
    this.cartTable = this.cartTable.bind(this);
    this.cartTableBody = this.cartTableBody.bind(this);
    this.totalCartPrice = this.totalCartPrice.bind(this);
  }

  componentDidMount() {
    this.totalCartPrice();
  }

  async updateCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    await this.setState(() => ({ cartItems }));
    this.totalCartPrice();
  }

  cartTableBody() {
    const { updateCartSize } = this.props;
    const { cartItems } = this.state;
    return (
      <tbody>
        {cartItems.map((item, index) => (
          <CartTableLine
            key={item.id}
            item={item}
            index={index}
            updateCartItems={this.updateCartItems}
            updateCartSize={updateCartSize}
          />
        ))}
      </tbody>
    );
  }

  totalCartPrice() {
    const { cartItems } = this.state;
    const totalCartPrice = cartItems
      .reduce((accumulator, { quantity, price }) => (quantity * price) + accumulator, 0)
      .toFixed(2);
    // this.setState({totalCartPrice})
    this.setState(() => ({ totalCartPrice }));
  }

  cartTable() {
    const { cartItems } = this.state;
    if (cartItems.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <table className="table table-striped">
        {cartTableHeader()}
        {this.cartTableBody()}
      </table>
    );
  }

  render() {
    const { totalCartPrice } = this.state;
    return (
      <div>
        {this.cartTable()}
        <span>{`Preço total: R$ ${totalCartPrice}`}</span>
      </div>
    );
  }
}

export default CartTable;
