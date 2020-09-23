import React, { Component } from 'react';
import './pokemon.css';

class PokemonDetails extends Component {
  constructor(props) {
    super();
    const { id } = props.match.params;
    const pokemonId = parseInt(id);
    
    this.state = {
      pokemon: props.pokemons.find(el => el.id === pokemonId)
    }
  }

  render() {    
    const {name, type, averageWeight, image, summary, foundAt} = this.state.pokemon;

    return (
      <div>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
            <p>{summary}</p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <div className="locations-container">
          {foundAt.map(el => 
            <div key={el.location}>
              <h4>{el.location}</h4>
              <img src={el.map} alt={el.location} />
            </div> 
          )}
          </div>
      </div>
    );
  }
}

export default PokemonDetails;
