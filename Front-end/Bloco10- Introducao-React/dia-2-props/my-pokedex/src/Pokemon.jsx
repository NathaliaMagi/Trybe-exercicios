import React, { Component } from "react";
// import pokemons from './data';

class DataPokemon extends Component {
  render() {
    const { name, type, image, averageWeight } = this.props.dados;
    return (
      <section className='section-pokemon'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        <img src={image} alt='Pokemon' className='img-pokemon'></img>
      </section>
    );
  }
}

export default DataPokemon;