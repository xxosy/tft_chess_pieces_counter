import React, { useState } from "react";
import ChampionList from "./components/ChampionList";
import Deck from "./components/Deck";

function App() {
  const [deck, setDeck] = useState([]);

  return (
    <div style={{ display: "flex" }}>
      <ChampionList state={{ deck: [deck, setDeck] }}></ChampionList>
      <Deck deck={deck}></Deck>
    </div>
  );
}

export default App;
