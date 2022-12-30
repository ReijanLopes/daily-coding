const numbers = [
  { value: 3, label: "Pling" },
  { value: 5, label: "Plang" },
  { value: 7, label: "Plong" },
];

const convert = (number) => {
  const res = numbers
    .map(({ value, label }) => (number % value === 0 ? label : ""))
    .join("");
  return res !== "" ? res : String(number);
};

convert(49); // 'Plong'

const lowerCaseSearchName = (name) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

lowerCaseSearchName(
  "está, estás, já, olá; até, é, és, olé, pontapé; vó, dominó, paletó, só, ESTÁ, ÁÉÓÚ"
); // 'esta, estas, ja, ola; ate, e, es, ole, pontape; vo, domino, paleto, so, esta, aeou'
