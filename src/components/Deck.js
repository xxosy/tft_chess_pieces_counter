import React from "react";

function Deck(deck) {
  console.log(deck);
  return (
    <div>
      <Field></Field>
      <Bench></Bench>
    </div>
  );
}
function Bench() {
  return <div></div>;
}
function Field() {
  return <div></div>;
}
export default Deck;
