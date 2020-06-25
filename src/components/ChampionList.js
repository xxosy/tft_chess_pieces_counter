import React, { useState } from "react";
import { Divider } from "@material-ui/core";
import "./ChampionList.css";

const champions = require("../assets/static/champions.json");
function Champion({ champion, index, state }) {
  const {
    player: [player, setPlayer],
    selectedPlayer: [selectedPlayer],
    isFieldDeck: [isFieldDeck],
    isTarget: [isTarget],
    currentTarget: [currentTarget],
    targetChampions: [targetChampions, setTargetChampions],
  } = {
    player: useState([]),
    ...(state || {}),
    selectedPlayer: useState(0),
    ...(state || {}),
    isFieldDeck: useState(true),
    ...(state || {}),
    isTarget: useState(false),
    ...(state || {}),
    currentTarget: useState(0),
    ...(state || {}),
    targetChampions: useState([]),
    ...(state || {}),
  };
  //   const src = `/img/champions/${champion.name.toLowerCase()}.png`;
  function addChampion() {
    console.log(isTarget);
    if (isTarget) {
      targetChampions[currentTarget] = { champion };
      setTargetChampions([...targetChampions]);
    } else {
      if (isFieldDeck)
        player[selectedPlayer].fieldDeck.push({
          champion: champion,
          id: index,
        });
      else
        player[selectedPlayer].benchDeck.push({
          champion: champion,
          id: index,
        });
      setPlayer([...player]);
    }
  }
  let className = `champion__list__champion cost__${champion.cost}`;
  let costLabelClassName = `champion__list__cost__label cost__${champion.cost}`;
  return (
    <div style={{ display: "inline-block" }} onClick={() => addChampion()}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <img src={src} alt="" /> */}
        <span className={className}>
          <div className={costLabelClassName}>${champion.cost}</div>
        </span>
        {/* <span style={{ fontSize: "10px" }}>
          {champion.name.length > 8
            ? champion.name.slice(0, 8) + "..."
            : champion.name}
        </span> */}
        <span>{"Aaaaaaa".slice(0, 5)}...</span>
      </div>
    </div>
  );
}

function Champions({ cost, champions, state }) {
  return champions.map((champion, index) => {
    if (cost === champion.cost)
      return (
        <Champion
          key={champion.championId}
          champion={champion}
          cost={cost}
          index={index}
          state={state}
        ></Champion>
      );
    else return undefined;
  });
}

function ChampionList({ state }) {
  champions.sort((a, b) => a.cost - b.cost);
  return (
    <div>
      <div className="champion__list__champions">
        <div className="champion__list__champions__cost">
          <Champions
            key="1"
            cost={1}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <Divider />
        <div className="champion__list__champions__cost">
          <Champions
            key="2"
            cost={2}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <Divider />
        <div className="champion__list__champions__cost">
          <Champions
            key="3"
            cost={3}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <Divider />
        <div className="champion__list__champions__cost">
          <Champions
            key="4"
            cost={4}
            champions={champions}
            state={state}
          ></Champions>
        </div>
        <Divider />
        <div className="champion__list__champions__cost">
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
