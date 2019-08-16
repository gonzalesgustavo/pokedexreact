import React, { Component } from "react";
import "./poke-card.style.scss";
class PokeCard extends Component {
  // --> three digit number padding
  idNumPadding(number) {
    return number <= 999 ? `00${number}`.slice(-3) : number;
  }
  render() {
    // --> Props being passed in
    const { id, name, type, exp } = this.props;
    // --> Image API string
    const imgAPIStr =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";
    return (
      <div className="PokeCard-container">
        <div className="PokeCard-card">
          <div className="PokeCard-background">
            <img src={`${imgAPIStr}/${this.idNumPadding(id)}.png`} alt={name} />
          </div>
          <div className="PokeCard-content">
            <h1 className="PokeCard-pokemon-name">{name}</h1>
            <span className="PokeCard-pokemon-type">{type}</span>
            <div className="PokeCard-pokemon-stats">
              <p>
                Experience:{" "}
                <em
                  className={exp > 90 ? "PokeCard-powerful" : "PokeCard-meak"}
                >
                  {exp}
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeCard;
