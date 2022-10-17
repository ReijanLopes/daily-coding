const data = [12, 23.2, 16, -23, 87, 0.43, -50, -65, -0.2];

const filtered = data.filter(
  (item) => Math.sign(item) > 0 && Number.isInteger(item)
); //
const squared = filtered.map((item) => Math.pow(item, 2));

const reduced = (data) => {
  const res = data.reduce((prev, initial) => (prev += initial), 0);
  return Math.round(res);
};

console.log(reduced(data)); //= 0; with negative values.
console.log(reduced(squared)); //= 7969;  only non-negative integer values.
