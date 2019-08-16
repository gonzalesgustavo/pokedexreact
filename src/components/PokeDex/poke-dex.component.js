import React, { Component } from "react";

import "./poke-dex.style.scss";
import PokeCard from "../PokeCard/poke-card.component";

class PokeDex extends Component {
  static defaultProps = {
    pokemon: []
  };
  loadPokemon() {
    // --> create alist of pokecards
    return this.props.pokemon.map(p => {
      return (
        <PokeCard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      );
    });
  }
  render() {
    return <div className="Pokedex-container">{this.loadPokemon()}</div>;
  }
}

export default PokeDex;
