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
  console.log(player);
  const [selectedPlayer, setSelectedPlayer] = useState(0);
  const [isFieldDeck, setIsFieldDeck] = useState(true);
  return (
    <div style={{ display: "flex" }}>
      <ChampionList
        state={{
          player: [player, setPlayer],
          selectedPlayer: [selectedPlayer, setSelectedPlayer],
          isFieldDeck: [isFieldDeck, setIsFieldDeck],
        }}
      ></ChampionList>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Deck
          state={{
            player: player,
            selectedPlayer: [selectedPlayer, setSelectedPlayer],
            isFieldDeck: [isFieldDeck, setIsFieldDeck],
          }}
        ></Deck>
      </div>
    </div>
  );
}

export default App;
