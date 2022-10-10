const root = document.querySelector(".root");
root.style = "display: flex;";
const styleLetters = "";

const data = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
];

const createContent = (letters, index) => {
  const containerLetters = document.createElement("div");
  containerLetters.style = "display: flex;";
  root.appendChild(containerLetters);

  letters.map((item) => {
    const boxLetter = document.createElement("p");
    boxLetter.classList = "letter";
    boxLetter.innerHTML = item;
    boxLetter.style = "height: 18px;";
    containerLetters.appendChild(boxLetter);
  });
  const boxLetter = document.createElement("p");
  boxLetter.innerHTML = " ";
  boxLetter.classList = "letter";
  boxLetter.style = "height: 18px; width: 8px";
  containerLetters.appendChild(boxLetter);
};

const separetText = (text) => {
  const splitedWords = text.split(" ");
  const separatingLetters = splitedWords.map((item) => item.split(""));

  separatingLetters.map((letters) => createContent(letters));
};

data.map((text) => {
  separetText(text);
});

let count = 0;
const comparation = (key) => {
  const letter = document.querySelectorAll(".letter");
  console.log(letter[count].innerHTML == key);

  if (key != "Backspace") {
    count++;
  } else if (key == "Backspace") {
    count--;
  }
};

window.addEventListener("keydown", (e) => {
  if (
    e.key !== "Shift" &&
    e.key !== "Control" &&
    e.key !== "CapsLock" &&
    e.key !== "Meta" &&
    e.key !== "Alt"
  ) {
    console.log(e.key);
    comparation(e.key);
  }
});
