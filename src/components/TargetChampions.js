import React, { useState } from "react";
import calculateTargetProbability from "../util/probability";
const probabilitiesByLevel = require("../assets/static/level.json");
const piece = require("../assets/static/piece.json");

function TargetChampion({ state, targetChampion, index, level }) {
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
  let probability = 0;
  if (targetChampion.champion) {
    name = targetChampion.champion.name;
    probability = calculateTargetProbability(
      player,
      targetChampion,
      probabilitiesByLevel[level][targetChampion.champion.cost - 1],
      piece[targetChampion.champion.cost - 1].numberOfPiece,
      piece[targetChampion.champion.cost - 1].numberOfType
    );
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
        <span></span>
      </div>
      <div>
        <span>{probability}</span>
      </div>
    </div>
  );
}
function Probabilities({ level }) {
  return probabilitiesByLevel[level].map((item) => {
    return <div>{item}</div>;
  });
}
function TargetChampions({ state }) {
  const [level, setLevel] = useState(0);
  const {
    targetChampions: [targetChampions],
    currentTarget: [currentTarget, setCurrentTarget],
    isTarget: [isTarget, setIsTarget],
    player: [player],
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
        level={level}
        targetChampion={targetChampion}
      ></TargetChampion>
    );
  });
  return (
    <div>
      <div style={{ display: "flex" }}>{result}</div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            if (level - 1 > 0) setLevel(level - 1);
            else if (level - 1 <= 0) setLevel(level);
          }}
        ></button>
        <Probabilities level={level}></Probabilities>
        <button
          onClick={() => {
            if (level + 1 < 8) setLevel(level + 1);
            else if (level + 1 >= 8) setLevel(level);
          }}
        ></button>
      </div>
    </div>
  );
}

export default TargetChampions;
