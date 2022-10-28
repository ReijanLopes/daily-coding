function args0() {
  const string = [...arguments];
  console.log(arguments);
}

const args1 = () => {
  const array = Array.from(arguments);
  console.log(arguments);
};

//args0(1, 3, 32, 23, 52, 52);
//args1(1, 3, 32, 23, 52, 52);

function calculator() {
  let string = "";
  [...arguments].map(
    (item, index) => (string = index == 0 ? item : string + " + " + item)
  );

  const Operator = string
    .split(" ")
    .map((item) => {
      if (item == "x") {
        item = "*";
      } else if (item == "%") {
        item = "/";
      }

      return item;
    })
    .join(" ");

  console.log(eval(Operator));
}

calculator("13 x 4 + 6 % 2", "87 + 2 x 7");
