const alphabet =
  "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z".split(
    ", "
  );

const old = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const transform = (olds) => {
  const res = {};
  alphabet.forEach((item) => {
    Object.keys(olds).forEach((old) => {
      if (olds[old].includes(item)) {
        const key = item.toLowerCase();
        res[key] = Number(old);
      }
    });
  });

  return res;
};
transform(old);
