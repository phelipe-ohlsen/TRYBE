import React, { Component } from 'react';
import Pokemon from './Pokemon'
import data from './data.js'

class Pokedex extends Component {
  render() {
    return (
      data.map(pokemon => 
        <Pokemon 
          key={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          averageWeight={pokemon.averageWeight}
          image={pokemon.image}
        />
      )
    );
  }
}

export default Pokedex;
