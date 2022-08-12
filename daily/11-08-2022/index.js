const numberOfPairs = document.querySelector(".numberOfPairs");
const button = document.querySelector(".done");
const areaListCard = document.querySelector(".listCards");

button.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  console.log(cards);
//   if (cards[0]) {
//     console.log("foi cards");
//     cards.map((card) => {
//       card.remove();
//     });
//   }
  console.log("card",cards);
  numberOfPairs.value;
  console.log(numberOfPairs.value);
  createCards(numberOfPairs.value).map((number) => {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.innerHTML = number;
    areaListCard.appendChild(cardContainer);
  });
});

const createCards = (repeat) => {
  console.log("foi");
  let cards = [];
  for (let i = 1; i <= repeat * 2; i++) {
    cards.push(i);
  }
  return cards.sort(() => 0.5 - Math.random());
};
