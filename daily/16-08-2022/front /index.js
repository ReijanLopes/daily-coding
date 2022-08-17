const root = document.querySelector(".root");
const DB = [];
const whereHaveBeen = [];
let x = 0;
let y = 0;
let z = 0;
let sizeBodySnake = [0];
let direction = "ArrowRight";

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

const createPlayer = () => {
  const player = document.createElement("div");
  player.className = "player";
  root.appendChild(player);
};
createPlayer();

document.addEventListener("keydown", (e) => directionSnake(e));

const directionSnake = (e) => {
  if (direction == "ArrowRight" && e.key == "ArrowLeft") {
    console.log("movimento nao aceito");
  } else if (direction == "ArrowLeft" && e.key == "ArrowRight") {
    console.log("movimento nao aceito");
  } else if (direction == "ArrowUp" && e.key == "ArrowDown") {
    console.log("movimento nao aceito");
  } else if (direction == "ArrowDown" && e.key == "ArrowUp") {
    console.log("movimento nao aceito");
  } else {
    direction = e.key;
  }
};

const movePlayer = (e) => {
  const player = document.querySelector(".player");


  if (direction == "ArrowLeft" && x > 0) {
    player.style.left = `${(x -= 20)}px`;
  }else if (direction == "ArrowUp" && y > 0) {
    player.style.top = `${(y -= 20)}px`;
  }else if (direction == "ArrowRight" && x < sizeWindow()?.[0] - 20) {
    player.style.left = `${(x += 20)}px`;
  }else if (direction == "ArrowDown" && y < sizeWindow()?.[1] - 20) {
    player.style.top = `${(y += 20)}px`;
  }else{
    alert("vc perdeu")
    clearInterval(moveSnake);
    clearInterval(createSeed);
  }

  whereHaveBeen.unshift([x, y]);
  if (whereHaveBeen.length > sizeBodySnake[0]) {
    whereHaveBeen.splice(sizeBodySnake[0], 2);
  }
  const rest = whereHaveBeen.slice(1, whereHaveBeen.length);

  if (rest[0]) {
    rest.map((coordinates) => {
      if (coordinates[0] === x && coordinates[1] === y) {
        alert("vc perdeu");
        clearInterval(moveSnake);
        clearInterval(createSeed);
      }
    });
  }

  snakeBody();
  collision(x, y);
};

const seedsRandom = () => {
  return sizeWindow().map((larAlt) => {
    return Math.floor(Math.random() * larAlt);
  });
}

const seedCoordinates = () => {
  const coordinates = seedsRandom()
  const filter = whereHaveBeen.filter((item) => {
    item[0] > coordinates[0] && (item[0] + 20) < coordinates[0] && item[1] == coordinates[1]
  });
  if(filter?.[0]){
    console.log("foi")
    return null
  }else{
    return coordinates
  }
  
};

const createSeeds = () => {
  const coordinates = seedCoordinates();

  if(coordinates){
  const seed = document.createElement("div");
  seed.className = "seed";
  if (coordinates?.[0] > 50) {
    coordinates?.[0] - 100;
  }
  if (coordinates?.[1] > 50) {
    coordinates?.[1] - 100;
  }
  seed.style.left = `${coordinates?.[0]}px`;
  seed.style.top = `${coordinates?.[1]}px`;
  root.appendChild(seed);
  DB.push([coordinates?.[0], coordinates?.[1], seed]);
}
};

const createSeed = setInterval(() => {
  createSeeds();
}, 1000);

const moveSnake = setInterval(() => {
  movePlayer();
}, 200);

const collision = (x, y) => {
  DB.map((item) => {
    if (
      item?.[0] > x - 20 &&
      item?.[0] < x + 20 &&
      item?.[1] > y - 20 &&
      item?.[1] < y + 30
    ) {
      item?.[2].remove();
      DB.splice(
        DB.findIndex((e) => e == item),
        1
      );
      setSizeSnakeBody();
    }
  });
};

const snakeBody = () => {
  deleteAllBody();
  const rest = whereHaveBeen.slice(1, whereHaveBeen.length - 1);
  rest.map((coordinates) => {
    const body = document.createElement("div");
    body.className = "snakeBody";
    body.style.left = `${coordinates?.[0]}px`;
    body.style.top = `${coordinates?.[1]}px`;
    root.appendChild(body);
  });
};

const setSizeSnakeBody = () => {
  z++;
  sizeBodySnake[0] = z;
};

const deleteAllBody = () => {
  const AllBody = document.querySelectorAll(".snakeBody");
  if (AllBody[0]) {
    AllBody.forEach((body) => {
      body.remove();
    });
  }
};
