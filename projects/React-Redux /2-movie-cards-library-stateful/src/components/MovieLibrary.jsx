import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.filterMovie = this.filterMovie.bind(this);
    this.handleOnBookmarkedChange = this.handleOnBookmarkedChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  handleOnBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  checkBookmarked(movie) {
    const { bookmarkedOnly } = this.state;
    if (!bookmarkedOnly || (bookmarkedOnly && movie.bookmarked === true)) {
      return movie;
    }
    return false;
  }

  checkGenre(movie) {
    const { selectedGenre } = this.state;
    if ((selectedGenre && movie.genre === selectedGenre) || !selectedGenre) return movie;
    return false;
  }

  filterMovie(movies) {
    const { searchText } = this.state;
    return movies.filter(
      (movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText))
      && this.checkBookmarked(movie)
      && this.checkGenre(movie),
    );
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          onBookmarkedChange={this.handleOnBookmarkedChange}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <MovieList movies={this.filterMovie(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}
