import React from "react";

import PokeGame from "./components/PokeGame/poke-game.component";

function App() {
  // --> style for main app
  const container = {
    width: "50%",
    height: "100vh",
    margin: "auto",
    paddingTop: "3rem"
  };
  return (
    <div style={container}>
      <PokeGame />
    </div>
  );
}

export default App;
