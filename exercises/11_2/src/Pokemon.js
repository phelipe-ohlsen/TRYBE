import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;

    return (
      <div className="card-container">
        <div className="pokemonInfo">
          <h2>{name}</h2>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className="pokemonAvatar">
          <img src={image} alt={name} />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
}

export default Pokemon;
