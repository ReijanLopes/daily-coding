// good discovery
// to find out how close an element is to the center of a circle it was necessary to use Math.sqrt and multiply its coordinates and add, but now it's just using Math.hypot
// for example

const score = (x, y) => {
  const radius = Math.hypot(x, y);
  // the closer to the center, the higher the score
  if (radius <= 1) return 10;
  if (radius <= 5) return 5;
  if (radius <= 10) return 1;
  return 0;
};
