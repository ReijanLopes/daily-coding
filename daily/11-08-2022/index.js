const numberOfPairs = document.querySelector(".numberOfPairs");
const button = document.querySelector(".done");
const areaListCard = document.querySelector(".listCards");

button.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");

  if (cards[0]) {
    for (let i = 0; i < cards.length; i++) {
      cards?.[i].remove();
    }
  }
  createCards(numberOfPairs.value).map((number) => {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.value = number;
    cardContainer.innerHTML = number;
    cardContainer.addEventListener("click", checkCards);
    areaListCard.appendChild(cardContainer);
  });
});

const createCards = (repeat) => {
  let cards = [];
  for (let i = 1; i <= repeat; i++) {
    cards.push(i);
  }
  const ele1 = cards;
  const ele2 = cards;
  const allCards = ele1.concat(ele2);
  return allCards.sort(() => 0.5 - Math.random());
};

let count = 0;
let elements = [];
const checkCards = (e) => {
  console.log(e.target.value);
  if (count > 1) {
    count = 0;
    elements = [];
  }
  if (count === 0) {
    elements[0] = [e.target, e.target.value];
  }
  console.log();
  if (count === 1) {
    if (elements?.[0]?.[0] !== e.target) {
      elements[1] = [e.target.value];
    }else{
        console.log("mesmo elemento");
    }
  }
  console.log(elements?.[1]?.[0])
  if(elements?.[0]?.[1] === elements?.[1]?.[0]){console.log("elementos iguais",elements);}
  
  count++;
};
