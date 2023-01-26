const test = [
  { value: "dev 1" },
  { value: "dev 2" },
  { value: "dev 3" },
  { value: "dev 2" },
  { value: "dev 3" },
  { value: "dev 2" },
  { value: "dev 3" },
];

function columnQuantity(products) {
  const array = [];

  const length = products.length < 3 ? products.length : 3;
  const quantityColumn = Math.ceil(products.length / length);

  products.map((_, idx) => {
    const arraySeparate = products.slice(
      idx * quantityColumn,
      idx * quantityColumn + quantityColumn
    );
    if (arraySeparate?.[0]) {
      array.push(arraySeparate);
    }
  });

  return array;
}
const columns = columnQuantity(test);
