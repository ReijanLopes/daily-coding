const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
const colorCode = (color) => {
  return color ? colors.indexOf(color) : null;
};

colorCode("black");

export const decodedValue = (colorsResistors = []) => {
  const numberIndex = colorsResistors
    .map((item, index) => {
      if (index < 2) return colors.indexOf(item);
    })
    .join("");
  return numberIndex * 1 || 0;
};

decodedValue(["red", "orange"]);
