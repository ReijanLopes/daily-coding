const root = document.querySelector(".root");
const car = document.querySelector(".car");

Array.from({ length: 10 }).map((val, idx) => {
  const card = document.createElement("p");
  root.appendChild(card);
});

const accelerateMax = 180;
let currentSpeed = 0;
let accelerateActive = false;

const carControl = () => {
  if (currentSpeed < 180) {
    accelerateActive && currentSpeed < 130
      ? (currentSpeed += currentSpeed / 2)
      : (currentSpeed = currentSpeed);
    if (currentSpeed <= accelerateMax) {
      currentSpeed += 10;
      if (!accelerateActive) {
        accelerateActive = true;
      }
    }
  }
};

const whatToDo = () => {
  carControl();
  car.style = `margin-top: ${currentSpeed}px`;
};

window.addEventListener("keypress", whatToDo);
