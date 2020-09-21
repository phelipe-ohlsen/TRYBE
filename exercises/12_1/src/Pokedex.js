import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor(props) {
		super(props);

		this.handleNextPokemon = this.handleNextPokemon.bind(this);
		this.handleDisplay = this.handleDisplay.bind(this);
		
		this.state = {
			pokeIndex: 0,
			displayAll: false,
		}
  }

  handleNextPokemon() {
		const { pokemons } = this.props;

		this.setState((prevState) => (
			(prevState.pokeIndex < pokemons.length -1)
			? { pokeIndex: prevState.pokeIndex + 1 }
			: { pokeIndex: 0 }
		));
	}

	handleDisplay() {
		this.setState((prevState) => ({
			displayAll: !prevState.displayAll,
			pokeIndex: 0
		}))
	}

	render() {
		const { pokemons } = this.props;

		return (
			<div>
				<div className="pokedex">
					{
						(this.state.displayAll)
						? pokemons
								.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
						: pokemons
								.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[this.state.pokeIndex]
					}
				</div>
				<button onClick={this.handleDisplay}>Change display</button>
				<button onClick={this.handleNextPokemon}>Next pokemon</button>
			</div>
		);
	}
}

export default Pokedex;
