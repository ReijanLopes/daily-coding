const body = document.querySelector("body");
const buttonCreateContainer = document.querySelector(".createContainer");

const positionMouse = (elem) => {
  window.addEventListener(
    "mousemove",
    (e) =>
      (elem.target.style = `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px`)
  );
};

const clearAddlistener = (e) => {
  e.target.removeEventListener("mousemove", positionMouse);
  e.target.removeEventListener("click", clearAddlistener);
};

const createContainer = () => {
  const container = document.createElement("div");
  container.classList = "container";
  body.appendChild(container);
  container.addEventListener("mousemove", positionMouse);
  container.addEventListener("click", clearAddlistener);
};

buttonCreateContainer.addEventListener("click", createContainer);
