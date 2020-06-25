import React, { useState } from "react";
import ChampionList from "./components/ChampionList";
import Deck from "./components/Deck";
import TargetChampions from "./components/TargetChampions";

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
  const [isFieldDeck, setIsFieldDeck] = useState(true);
  const [isTarget, setIsTarget] = useState(false);
  const [targetChampions, setTagetChampions] = useState([0, 0, 0, 0]);
  const [currentTarget, setCurrentTarget] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <ChampionList
        state={{
          player: [player, setPlayer],
          selectedPlayer: [selectedPlayer, setSelectedPlayer],
          isFieldDeck: [isFieldDeck, setIsFieldDeck],
          isTarget: [isTarget, setIsTarget],
          targetChampions: [targetChampions, setTagetChampions],
          currentTarget: [currentTarget, setCurrentTarget],
        }}
      ></ChampionList>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Deck
            state={{
              player: player,
              selectedPlayer: [selectedPlayer, setSelectedPlayer],
              isFieldDeck: [isFieldDeck, setIsFieldDeck],
              isTarget: [isTarget, setIsTarget],
            }}
          ></Deck>
        </div>
        <div>
          <TargetChampions
            state={{
              player: [player, setPlayer],
              isTarget: [isTarget, setIsTarget],
              targetChampions: [targetChampions, setTagetChampions],
              currentTarget: [currentTarget, setCurrentTarget],
            }}
          ></TargetChampions>
        </div>
      </div>
    </div>
  );
}

export default App;
