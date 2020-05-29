import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({
      movies,
      loading: false,
    }));
  }


  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
