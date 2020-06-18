import React from "react";

function Deck({ player }) {
  return player.map((item, index) => {
    return (
      <div>
        <Field key={index} player={player}></Field>
        <Bench></Bench>
      </div>
    );
  });
}
function Bench() {
  return <div></div>;
}
function Field({ player }) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "32px",
          width: "32px",
          display: "inline-block",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "32px",
          width: "32px",
          display: "inline-block",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "32px",
          width: "32px",
          display: "inline-block",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "32px",
          width: "32px",
          display: "inline-block",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "32px",
          width: "32px",
          display: "inline-block",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "32px",
          width: "32px",
          display: "inline-block",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "32px",
          width: "32px",
          display: "inline-block",
          background: "black",
        }}
      ></div>
    </div>
  );
}
export default Deck;
