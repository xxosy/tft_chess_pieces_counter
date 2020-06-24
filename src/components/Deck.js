import React, { useState } from "react";
import "./Deck.css";
function Deck({ state }) {
  const {
    selectedPlayer: [selectedPlayer, setSelectedPlayer],
  } = { selectedPlayer: useState(0), ...(state || {}) };
  const {
    isFieldDeck: [isFieldDeck, setIsFieldDeck],
  } = { isFieldDeck: useState(true), ...(state || {}) };
  const {
    isTarget: [isTarget, setIsTarget],
  } = { isTarget: useState(false), ...(state || {}) };
  function selectPlayerAndDeckType(index, deckType) {
    setSelectedPlayer(selectedPlayer * 0 + index);
    setIsTarget(isTarget && false);
    if (deckType) setIsFieldDeck(isFieldDeck || deckType);
    else setIsFieldDeck(isFieldDeck && deckType);
  }
  return state.player.map((item, index) => {
    let deck = adjustDeck(item.fieldDeck);

    return (
      <div key={index}>
        <div
          style={{ display: "flex" }}
          onClick={() => {
            selectPlayerAndDeckType(index, true);
          }}
        >
          <Field field={deck}></Field>
          <EmptyField field={deck}></EmptyField>
        </div>
        <div
          style={{ display: "flex" }}
          onClick={() => {
            selectPlayerAndDeckType(index, false);
          }}
        >
          <Bench bench={item.benchDeck}></Bench>
          <EmptyBench bench={item.benchDeck}></EmptyBench>
        </div>
      </div>
    );
  });
}
function Bench({ bench }) {
  return bench.map((item, index) => {
    return <div key={index} className="champion"></div>;
  });
}
function EmptyBench({ bench }) {
  const result = [];
  for (let i = bench.length; i < 8; i++) {
    result.push(<div key={i} className="champion red"></div>);
  }
  return result;
}
function Field({ field }) {
  return field.map((item, index) => {
    return (
      <div key={index} className="champion">
        {item}
      </div>
    );
  });
}
function EmptyField({ field }) {
  const result = [];
  for (let i = field.length; i < 8; i++) {
    result.push(<div key={i} className="champion blue"></div>);
  }
  return result;
}
function adjustDeck(deck) {
  let board = Array.apply(null, new Array(57)).map(Number.prototype.valueOf, 0);
  let result = [];
  let map = new Map();

  for (let i = 0; i < deck.length; i++) {
    board[deck[i].id]++;
    map = map.set(deck[i].id, deck[i].champion);
  }
  for (let i = 0; i < 57; i++) {
    if (board[i] >= 9) result.push(board[i] + "X3");
    else if (board[i] === 8) {
      result.push(map.get(i) + "X2");
      result.push(map.get(i) + "X2");
      result.push(map.get(i) + "");
      result.push(map.get(i) + "");
    } else if (board[i] === 7) {
      result.push(map.get(i) + "X2");
      result.push(map.get(i) + "X2");
      result.push(map.get(i) + "");
    } else if (board[i] === 6) {
      result.push(map.get(i) + "X2");
      result.push(map.get(i) + "X2");
    } else if (board[i] === 5) {
      result.push(map.get(i) + "X2");
      result.push(map.get(i) + "");
      result.push(map.get(i) + "");
    } else if (board[i] === 4) {
      result.push(map.get(i) + "X2");
      result.push(map.get(i) + "");
    } else if (board[i] === 3) {
      result.push(map.get(i) + "X2");
    } else if (board[i] === 2) {
      result.push(map.get(i) + "");
      result.push(map.get(i) + "");
    } else if (board[i] === 1) {
      result.push(map.get(i) + "");
    } else if (board[i] === 0) {
    }
  }
  return result;
}
export default Deck;
