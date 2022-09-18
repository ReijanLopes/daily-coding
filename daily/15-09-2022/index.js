const component = (className, eleHTML, children, Father) => {
  const father = document.querySelector(`.${Father}`);
  const ele = document.createElement(`${eleHTML}`);
  ele.classList.add(`${className}`);
  ele.innerHTML = children;
  father.appendChild(ele);
};

component("test", "div", "yarn e melhor", "root");
component("jose", "div", "fs e estranho", "root");


