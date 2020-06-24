import React, { useState } from "react";
function TargetChampion({ state, targetChampion, index }) {
  const {
    currentTarget: [currentTarget, setCurrentTarget],
    isTarget: [isTarget, setIsTarget],
    player: [player],
  } = {
    currentTarget: useState(0),
    ...(state || {}),
    isTarget: useState(false),
    ...(state || {}),
    player: useState([]),
    ...(state || {}),
  };
  let name = "-";
  let positive = 0;
  let negative = 0;
  let probability = 0;
  if (targetChampion.champion) {
    player.map((player) => {
      for (let i = 0; i < player.fieldDeck.length; i++) {
        if (player.fieldDeck[i]) {
          if (
            player.fieldDeck[i].champion.championId ===
              targetChampion.champion.championId &&
            player.fieldDeck[i].champion.cost === targetChampion.champion.cost
          ) {
            negative++;
          } else if (
            player.fieldDeck[i].champion.championId !==
              targetChampion.champion.championId &&
            player.fieldDeck[i].champion.cost === targetChampion.champion.cost
          ) {
            positive++;
          }
        }
      }
    });
    name = targetChampion.champion.name;
    console.log(positive, negative);
    probability = (18 - negative) / (234 - positive - negative);
    probability = (probability * 100).toFixed(2);
    console.log(probability);
  }
  return (
    <div
      onClick={() => {
        setIsTarget(isTarget || true);
        setCurrentTarget(currentTarget * 0 + index);
      }}
    >
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>cost</span>
      </div>
      <div>
        <span>{probability}</span>
      </div>
    </div>
  );
}
function TargetChampions({ state }) {
  const {
    targetChampions: [targetChampions, setTargetChampions],
    currentTarget: [currentTarget, setCurrentTarget],
    isTarget: [isTarget, setIsTarget],
    player: [player, setPlayer],
  } = {
    targetChampions: useState(0),
    ...(state || {}),
    currentTarget: useState(0),
    ...(state || {}),
    isTarget: useState(false),
    ...(state || {}),
    player: useState([]),
    ...(state || {}),
  };
  let result = [];
  targetChampions.map((targetChampion, index) => {
    result.push(
      <TargetChampion
        key={index}
        state={{
          currentTarget: [currentTarget, setCurrentTarget],
          isTarget: [isTarget, setIsTarget],
          player: [player],
        }}
        index={index}
        targetChampion={targetChampion}
      ></TargetChampion>
    );
  });
  return <div>{result}</div>;
}

export default TargetChampions;
