import React from 'react';

import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

import './App.css';

import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/pokemon/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
          <Route path='/404' component={NotFound} />
          <Route exact path="/" render={() => <Pokedex pokemons={pokemons} /> } />
          <Redirect to='/404' />
        </Switch>
      </div>
   </BrowserRouter>
  );
}

export default App;