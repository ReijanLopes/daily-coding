const scoreBoard = {
  Jose: 99373,
  Ruan: 0,
};

const score = 898;
const player = "Ruan";

function addPlayer(scoreBoard, player, score) {
  return Object.assign(scoreBoard, { [player]: score });
}

addPlayer(scoreBoard, "Marcos", score);

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}
removePlayer(scoreBoard, player);

function updateScore(scoreBoard, player, points) {
  scoreBoard[player]
    ? (scoreBoard[player] += points)
    : (scoreBoard[player] = points);
  return scoreBoard;
}

updateScore(scoreBoard, player, 100);

function applyMondayBonus(scoreBoard) {
  for (let keys in scoreBoard) {
    scoreBoard[keys] += 100;
  }
  return scoreBoard;
}
applyMondayBonus(scoreBoard);

const params = {
  score: 2100,
  normalizeFunction: function (score) {
    return score / 2 + 100;
  },
};

function normalizeScore(params) {
  const { normalizeFunction, score } = params;
  return normalizeFunction(score);
}

normalizeScore(params);
