import React from 'react';
import './pokemon.css'

class Pokemon extends React.Component {
    render() {
        const { id, name, type, averageWeight, image, moreInfo } = this.props.pokemon;

        return <div className='pokemon'>
            <h1>{name}</h1>
            <h5>{id}</h5>
            <h2>{type}</h2>
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
            <img alt={name} title={name} src={image}/>
            <a href={moreInfo}>More info</a>
        </div>
    }
}

export default Pokemon;