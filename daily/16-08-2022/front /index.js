const root = document.querySelector(".root");

const createPlayer = () => {
  const player = document.createElement("div");
  player.className = "player";
  root.appendChild(player);
};

createPlayer();

document.addEventListener("keydown", (e) => movePlayer(e));
const movePlayer = (e) => {
  const player = document.querySelector(".player");

  if (e.key == "ArrowRight") {
    ArrowRight(player);
  }
  if (e.key == "ArrowLeft") {
    ArrowLeft(player);
  }
  if (e.key == "ArrowUp") {
    ArrowUp(player);
  }
  if (e.key == "ArrowDown") {
    ArrowDown(player);
  }
};

const ArrowRight = (player) => {
  const rect = root.getBoundingClientRect();
  document.getElementById(player).innerHTML =
    "Left: " +
    rect.left.toFixed() +
    ", Top: " +
    rect.top.toFixed() +
    ", Width: " +
    rect.width +
    ", Height: " +
    rect.height;
};

const ArrowLeft = (player) => {
  player.style = `left: ${elCoordinates.x}px`;
};
const ArrowUp = (player) => {
  const coordinates = (elCoordinates.top -= 1);
  player.style = `top: ${coordinates}px`;
};
const ArrowDown = (player) => {
  const coordinates = (elCoordinates.top += 1);
  player.style = `bottom: ${coordinates}px`;
};
