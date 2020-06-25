export default function calculateTargetProbability(
  player,
  targetChampion,
  probabilityByCost,
  numberOfPiece,
  numberOfType
) {
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
    probability =
      ((numberOfPiece - negative) /
        (numberOfPiece * numberOfType - positive - negative)) *
      (probabilityByCost / 100) *
      5;
    probability = (probability * 100).toFixed(2);
    return probability;
  }
}
