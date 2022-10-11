const root = document.querySelector(".root");
const input = document.querySelector("input");
const operators = ["AC", "+", "-", "X", "%"];

const addValues = (values) => {
  let includes;
  if (values == "AC") {
    console.log(input.value.slice(input.value.length - 1));
    input.value.slice(input.value.length - 1) == " "
      ? (input.value = input.value.slice(0, input.value.length - 3))
      : (input.value = input.value.slice(0, input.value.length - 1));
  } else {
    operators.map((item) => {
      const res = input.value.slice(input.value.length - 3).includes(item);
      if (res) {
        includes = true;
      }
    });
  }
  if (includes) {
    input.value = input.value.slice(0, input.value.length - 3);
    input.value = input.value + " " + values + " ";
  } else {
    operators.includes(values)
      ? (input.value = input.value + " " + values + " ")
      : (input.value = input.value + values);
  }
};
const operatorFunction = (value) => {
  operators.map((item) => {
    if (input.value.includes(item)) {
      const count = input.value.split(` ${value} `);
      console.log(count);
    }
  });
};

const createButton = () => {
  const containerNumber = document.createElement("section");
  containerNumber.style.width = "200px";

  const containerOperator = document.createElement("section");
  containerOperator.style.width = "50px";
  root.appendChild(containerNumber);
  root.appendChild(containerOperator);
  Array.from({ length: 11 }).map((_, index) => {
    const button = document.createElement("button");
    button.innerHTML = index == 10 ? "=" : index;
    button.value = index == 10 ? "=" : index;
    button.style.width = "30%";
    button.addEventListener("click", (e) => {
      addValues(e.target.value);
    });
    containerNumber.appendChild(button);
  });
  operators.map((item) => {
    const button = document.createElement("button");
    button.innerHTML = item;
    button.value = item;
    button.style.width = "100%";
    button.addEventListener("click", (e) => {
      addValues(e.target.value);
      if (e.target.value == "=") operatorFunction();
    });
    containerOperator.appendChild(button);
  });
};
//failure
const calc = () => {};
createButton();
