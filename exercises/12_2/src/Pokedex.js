import React from 'react';

import Pokemon from './Pokemon';
import './pokedex.css'

class Pokedex extends React.Component {
    render() {
        const { pokemon } = this.props;
    return (
    <div>
        <h1 className='title'>Pokedex</h1>
        <div className='pokedex'>
        {pokemon.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    </div>);
    }
}

export default Pokedex;