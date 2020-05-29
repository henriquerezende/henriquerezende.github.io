import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(this.setState({
      redirect: true,
    }));
  }

  render() {
    const { redirect } = this.state;
    const { history } = this.props;
    if (redirect) history.push('/');
    console.log(this.props);
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;

NewMovie.propTypes = {
  history: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))
    .isRequired,
};
