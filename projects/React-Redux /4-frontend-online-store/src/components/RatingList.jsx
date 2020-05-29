import React, { Component } from 'react';
import Rater from 'react-rater';

export class RatingList extends Component {
  render() {
    const { ratingList } = this.props;
    if (ratingList.length !== 0) {
      return (
        <div>
          {ratingList.map(({ rate, comment, email, ratingId }) => (
            <div key={ratingId} className="jumbotron jumbotron-fluid bg-transparent">
              <h1 className="display-4">{comment}</h1>
              <Rater total={5} rating={rate} interactive={false} />
              <p className="lead">{email}</p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  }
}

export default RatingList;
