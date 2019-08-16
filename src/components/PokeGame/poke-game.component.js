import React, { Component } from "react";
import PokeDex from "../PokeDex/poke-dex.component";
import "./poke-game.style.scss";

class PokeGame extends Component {
  // --> winner object
  winnerPoints = {
    winner: "",
    points: 0
  };
  // --> static pokemon for demonstration POKEAPI
  pokemon = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ];
  // --> deck hand one
  handOne = [];
  // --> deck hand two
  handTwo = [...this.pokemon];
  // --> Split or deal cards
  splitHands() {
    while (this.handOne.length < this.handTwo.length) {
      let randIDX = Math.floor(Math.random() * this.handTwo.length);
      let dealtHand = this.handTwo.splice(randIDX, 1)[0];
      this.handOne.push(dealtHand);
    }
  }
  // --> Compute the exp points of each hand and declare a winner using the winnerPoints object
  findWinner() {
    let handOnePoints = this.handOne.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    let handTwoPoints = this.handTwo.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    // --> If hand one has more exp poits select as winner
    if (handOnePoints > handTwoPoints) {
      this.winnerPoints = {
        winner: "Hand One",
        points: handOnePoints
      };
    } else {
      // --> else if hand two has more exp points select as winner
      this.winnerPoints = {
        winner: "Hand Two",
        points: handTwoPoints
      };
    }
  }
  render() {
    // --> Deal cards
    this.splitHands();
    // --> Find which hand contains the winning set
    this.findWinner();
    return (
      <div>
        <div className="PokeGame-handOne">
          <h2
            className={
              this.winnerPoints.winner === "Hand One" && "PokeGame-winner"
            }
          >
            Hand 1:
          </h2>
          <PokeDex pokemon={this.handOne} />
        </div>
        <div className="PokeGame-score">
          <h5>{this.winnerPoints.winner} Wins with </h5>
          <p className="PokeGame-points"> {this.winnerPoints.points}</p>
        </div>
        <div className="PokeGame-HandTwo">
          <h2
            className={
              this.winnerPoints.winner === "Hand Two" && "PokeGame-winner"
            }
          >
            Hand 2:
          </h2>
          <PokeDex pokemon={this.handTwo} />
        </div>
        <div className="PokeGame-roll">
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Deal Cards
          </button>
        </div>
      </div>
    );
  }
}

export default PokeGame;
