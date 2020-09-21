import React from 'react';

class FilterButtons extends React.Component {

	render() {
		const { handlePokemonType } = this.props;

		return (
				<div className="btn-types">
          <button onClick={() => handlePokemonType('All')}>All</button>
          <button onClick={() => handlePokemonType('Bug')}>Bug</button>
          <button onClick={() => handlePokemonType('Dragon')}>Dragon</button>
          <button onClick={() => handlePokemonType('Electric')}>Electric</button>
          <button onClick={() => handlePokemonType('Fire')}>Fire</button>
          <button onClick={() => handlePokemonType('Normal')}>Normal</button>
          <button onClick={() => handlePokemonType('Poison')}>Poison</button>
          <button onClick={() => handlePokemonType('Psychic')}>Psychic</button>
				</div>
		);
	}
}

export default FilterButtons;
