const data = [
  { father: "jose", eleName: "div", className: "j1", content: "seu pai" },
  { father: "jose", eleName: "div", className: "j2", content: "seu pai" },
  { father: "jose", eleName: "div", className: "j3", content: "seu pai" },
  { father: "jose", eleName: "div", className: "j4", content: "seu pai" },
];

const root = document.querySelector(".root");

const createElementsHTML = (father, eleName, className, content) => {
  const eleHTML = document.createElement(`${eleName}`);

  className ? (eleHTML.classList = className) : (eleHTML.classList = "");
  content ? (eleHTML.innerHTML = content) : (eleHTML.innerHTML = "");

  const eleFather = father ? document.querySelector(`.${father}`) : root;

  eleFather.appendChild(eleHTML);
};

createElementsHTML(null, "div", "jose", "seu pai");
createElementsHTML("jose", "div", "felipe", "rapaz");
createElementsHTML(null, "div", "felipe", null);

data.map((item) =>
  createElementsHTML(item.father, item.eleName, item.className, item.content)
);
