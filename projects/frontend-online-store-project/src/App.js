import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import ShoppingCartButton from './components/ShoppingCartButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cartSize: 0 };
    this.updateCartSize = this.updateCartSize.bind(this);
  }

  componentDidMount() {
    this.updateCartSize();
  }

  updateCartSize() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const cartSize = cartItems.reduce((total, item) => total + item.quantity, 0);
    this.setState({ cartSize });
  }

  render() {
    const { cartSize } = this.state;
    return (
      <Router>
        <Navbar>
          <Link to="/" className="navbar-brand">Online Store</Link>
          <ShoppingCartButton cartSize={cartSize} />
        </Navbar>
        <Switch>
          <Route
            path="/checkout"
            render={(props) => <Checkout {...props} updateCartSize={this.updateCartSize} />}
          />
          <Route
            path="/shoppingCart"
            render={(props) => <ShoppingCart {...props} updateCartSize={this.updateCartSize} />}
          />
          <Route
            path="/product/:id"
            render={(props) => <ProductDetail {...props} updateCartSize={this.updateCartSize} />}
          />
          <Route path="/" render={() => <MainPage updateCartSize={this.updateCartSize} />} />
        </Switch>
      </Router>
    );
  }
}
