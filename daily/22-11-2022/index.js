const arrayLimes = {
  small: 6,
  medium: 8,
  large: 10,
};

const limesToCut = (wedgesNeeded, limes) => {
  const res = [];
  limes.map((item) => {
    if (wedgesNeeded > 0) {
      res.push(item);
      wedgesNeeded - arrayLimes[item];
    }
  });
  return res.length;
};

limesToCut(24, ["largee", "large", "medium", "small", "small"]);
