const data = [{ id: 1234324234, item: [] }];

for (let i = 0; i < 5; i++) {
  // data[0].id.push(i);
  data[0].item.unshift(i);
}

data[0].text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the";

const index = data[0].text.indexOf("is");
const indexDot = data[0].text.indexOf(".");
const sliced1 = data[0].text.slice(0, index + 2);
const sliced2 = data[0].text.slice(indexDot);
const find = data[0].item.findIndex((item) => item == 1); //acha o primeiro elemento
console.log(find);
console.log(sliced1 + sliced2);

console.log(data[0].item.pop()); // 0
console.log(data[0].item); // 4,3,2,1
