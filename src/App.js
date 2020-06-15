import React from "react";

const champions = require("./assets/static/champions.json");

function Champion({ champion }) {
  const src = `/img/champions/${champion.toLowerCase()}.png`;
  return (
    <div>
      {/* <img src={src} alt="" /> */}
      <span>{champion}</span>
    </div>
  );
}

function ChampionList({ cost, champions }) {
  return champions.map((champion) => {
    if (cost === champion.cost)
      return (
        <Champion key={champion.championId} champion={champion.name}></Champion>
      );
    else return undefined;
  });
}

function App() {
  champions.sort((a, b) => a.cost - b.cost);
  return (
    <div className="App">
      <div>
        <ChampionList key="1" cost={1} champions={champions}></ChampionList>
      </div>
      <div>
        <ChampionList key="2" cost={2} champions={champions}></ChampionList>
      </div>
      <div>
        <ChampionList key="3" cost={3} champions={champions}></ChampionList>
      </div>
      <div>
        <ChampionList key="4" cost={4} champions={champions}></ChampionList>
      </div>
      <div>
        <ChampionList key="5" cost={5} champions={champions}></ChampionList>
      </div>
    </div>
  );
}

export default App;
