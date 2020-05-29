import React, { Component } from 'react';

export class Categories extends Component {
  render() {
    const { onCategoryClick, categories } = this.props;

    return categories.map(({ id, name }) => (
      <div key={id}>
        <input
          className="btn btn-link"
          data-testid="category"
          type="button"
          id={id}
          value={name}
          name="categories"
          onClick={onCategoryClick}
        />
      </div>
    ));
  }
}

export default Categories;
