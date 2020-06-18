import React, { useState } from "react";
import { Divider } from "@material-ui/core";

const champions = require("../assets/static/champions.json");
function Champion({ champion, state }) {
  const {
    player: [player, setPlayer],
  } = { player: useState([]), ...(state || {}) };

  const {
    selecTedPlayer: [selecTedPlayer, setselecTedPlayer],
  } = { selecTedPlayer: useState(0), ...(state || {}) };
  //   const src = `/img/champions/${champion.toLowerCase()}.png`;
  function addChampion() {
    player[selecTedPlayer].fieldDeck.push({ champion });
    setPlayer(player);
    console.log(player);
  }
  return (
    <div style={{ display: "inline-block" }} onClick={() => addChampion()}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <img src={src} alt="" /> */}
        <span
          style={{
            display: "inline-block",
            background: "blue",
            width: "32px",
            height: "32px",
          }}
        ></span>
        {/* <span>{champion}</span> */}
        <span>Aaaaaaa</span>
      </div>
    </div>
  );
}

function Champions({ cost, champions, state }) {
  return champions.map((champion, index) => {
    if (cost === champion.cost)
      if (index % 5 === 0) {
        return (
          <Champion
            key={champion.championId}
            champion={champion.name}
            state={state}
          ></Champion>
        );
      } else {
        return (
          <Champion
            key={champion.championId}
            champion={champion.name}
            state={state}
          ></Champion>
        );
      }
    else return undefined;
  });
}

function ChampionList({ state }) {
  champions.sort((a, b) => a.cost - b.cost);
  return (
    <div>
      <div style={{ backgroundColor: "green", width: "620px" }}>
        <div>
          <Champions
            key="1"
            cost={1}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <Divider />
        <div>
          <Champions
            key="2"
            cost={2}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <div>
          <Champions
            key="3"
            cost={3}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <div>
          <Champions
            key="4"
            cost={4}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <div>
          <Champions
            key="5"
            cost={5}
            champions={champions}
            state={state}
          ></Champions>
        </div>
      </div>
    </div>
  );
}
export default ChampionList;
