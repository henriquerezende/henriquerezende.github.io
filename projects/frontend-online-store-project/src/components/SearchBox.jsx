import React, { Component } from 'react';

export class SearchBox extends Component {
  render() {
    const { handleClick, searchText, onSearchTextChange } = this.props;
    return (
      <form className="form-inline form-control-lg w-50">
        <input
          id="search-input"
          className="form-control my-5 mx-3 my-sm-0 w-75"
          type="search"
          placeholder="Procurar"
          aria-label="Search"
          data-testid="query-input"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <button
          className="btn btn-danger my-2 my-sm-0"
          type="button"
          data-testid="query-button"
          onClick={handleClick()}
        >
          Procurar
        </button>
      </form>
    );
  }
}

export default SearchBox;
