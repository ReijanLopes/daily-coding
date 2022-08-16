const DB = []

const root = document.querySelector(".root");


const createPlayer = () => {
  const player = document.createElement("div");
  player.className = "player";
  root.appendChild(player);
};
createPlayer();

document.addEventListener("keydown", (e) => movePlayer(e));
let x = 0;
let y = 0;
const movePlayer = (e) => {
  const player = document.querySelector(".player");

  if (e.key == "ArrowRight" && x < sizeWindow()?.[0] - 50) {
    player.style.left = `${(x += 10)}px`;
  }
  if (e.key == "ArrowLeft" && x > 0) {
    player.style.left = `${(x -= 10)}px`;
  }
  if (e.key == "ArrowUp" && y > 0) {
    player.style.top = `${(y -= 10)}px`;
  }
  if (e.key == "ArrowDown" && y < sizeWindow()?.[1] - 51) {
    player.style.top = `${(y += 10)}px`;
  }
  
  collision(x,y)
};

const sizeWindow = () => {
  const largura =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const altura =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  return [largura, altura];
};

const seedsRandom = () => {
  let coordinates = sizeWindow().map((larAlt) => {
    return Math.floor(Math.random() * larAlt);
  });

  const seed = document.createElement("div");
  seed.className = "seed";
  if(coordinates?.[0] > 50){coordinates?.[0] - 100}
  if(coordinates?.[1] > 50){coordinates?.[1] - 100}
  seed.style.left = `${(coordinates?.[0])}px`;
  seed.style.top = `${(coordinates?.[1])}px`;
  root.appendChild(seed);
  DB.push([coordinates?.[0], coordinates?.[1], seed])
};

setInterval(() => {
  seedsRandom();

}, 10000);

const collision = (x,y) => { 
  DB.map((item) => {
    console.log(item?.[0] == x, item?.[1] == y)
    if((item?.[0]) > (x - 20) && (item?.[0]) < (x + 20)  && (item?.[1]) > (y - 20) && (item?.[1]) < (y + 20)){
      item?.[2].remove()
      const deleteSeed = DB.splice(DB.findIndex(e => e == item), 1)
      console.log(DB)
    }
  })  
}