import React, { useState } from "react";
import ChampionList from "./components/ChampionList";
import Deck from "./components/Deck";

function App() {
  const [player, setPlayer] = useState([
    { fieldDeck: [], benchDeck: [] },
    { fieldDeck: [], benchDeck: [] },
    { fieldDeck: [], benchDeck: [] },
    { fieldDeck: [], benchDeck: [] },
    { fieldDeck: [], benchDeck: [] },
    { fieldDeck: [], benchDeck: [] },
    { fieldDeck: [], benchDeck: [] },
    { fieldDeck: [], benchDeck: [] },
  ]);
  const [selectedPlayer, setSelectedPlayer] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <ChampionList
        state={{
          player: [player, setPlayer],
          selectedPlayer: [selectedPlayer, setSelectedPlayer],
        }}
      ></ChampionList>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Deck player={player}></Deck>
      </div>
    </div>
  );
}

export default App;
