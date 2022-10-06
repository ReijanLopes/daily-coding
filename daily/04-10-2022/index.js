const diameter = 12;
const r = diameter / 2;
const area = Math.PI * Math.pow(r, 2);
console.log(area);
const length = 2 * Math.PI * r;
console.log(length);

Math.pow(r, 2); // significado r ao quadrado

const canvas = document.querySelector(".root");
const ctx = canvas.getContext("2d");

const drawing = () => {
  const semicircle = Math.PI / 180;
  ctx.arc(50, 50, 50, semicircle * 0, semicircle * 360, true);
  // circunferencia 360
  ctx.arc(180, 50, 40, semicircle * 0, semicircle * 360, true);
  // distancia left, distancia top, size
  ctx.fill();
};
drawing();
