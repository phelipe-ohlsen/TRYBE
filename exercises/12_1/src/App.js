import React, { Component } from 'react';
import Pokedex from './Pokedex';
import FilterButtons from './FilterButtons';

import './App.css';

import pokemons from './data';

class App extends Component {
  constructor(props) {
		super(props);

		this.handlePokemonType = this.handlePokemonType.bind(this);
		
		this.state = {
      pokemonsList: pokemons,
		}
  }

  handlePokemonType(type) {
    this.setState(() => 
      (type !== 'All') 
      ? { pokemonsList:  pokemons.filter(pokemon => pokemon.type === type) }
      : { pokemonsList:  pokemons }
    )
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.pokemonsList} />
        <FilterButtons handlePokemonType={this.handlePokemonType} />
      </div>
    );
  };
}

export default App;
