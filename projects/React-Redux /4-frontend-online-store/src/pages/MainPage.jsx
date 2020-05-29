import React, { Component } from 'react';

import * as api from '../services/api';
import SearchBox from '../components/SearchBox';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem('cartItems')) {
      localStorage.setItem('cartItems', '[]');
    }

    this.state = {
      categories: [],
      selectedCategory: '',
      searchText: '',
      products: [],
    };
    this.searchProducts = this.searchProducts.bind(this);
    this.searchProductsSorted = this.searchProductsSorted.bind(this);
    this.sortButtons = this.sortButtons.bind(this);
    this.categorySelector = this.categorySelector.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  searchProducts() {
    const { searchText, selectedCategory } = this.state;
    api
      .getProductsFromCategoryAndQuery(selectedCategory, searchText)
      .then((products) => this.setState({ products }));
  }

  searchProductsSorted(sort) {
    const { products: { query, filters } } = this.state;
    let q = query;
    let category = '';
    if (filters[0]) category = filters[0].values[0].id;
    if (!query) q = '';
    api.getProductsSorted(category, q, sort).then((products) => this.setState({ products }));
  }

  sortButtons() {
    return (
      <form className="form-control-lg">
        <button
          type="button"
          className="btn btn-danger mx-2 my-2 my-sm-0"
          onClick={() => this.searchProductsSorted('price_asc')}
        >
          Menor Preço
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2 my-2 my-sm-0"
          onClick={() => this.searchProductsSorted('price_desc')}
        >
          Maior Preço
        </button>
      </form>
    );
  }

  categorySelector() {
    const { categories, selectedCategory } = this.state;
    return (
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={async (e) => {
          await this.setState({ selectedCategory: e.target.id });
          this.searchProducts();
        }}
      />
    );
  }

  render() {
    const { searchText, products } = this.state;
    const { updateCartSize } = this.props;
    return (
      <div>
        <Navbar>
          <SearchBox
            handleClick={() => this.searchProducts}
            searchText={searchText}
            onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          />
          <h5 className="text-white">Ordenar</h5>
          {this.sortButtons()}
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-3">{this.categorySelector()}</div>
            <div className="col">
              <ProductList products={products} updateCartSize={updateCartSize} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
