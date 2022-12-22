const RNATranscription = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

const toRna = (rna) => {
  return rna
    .split("")
    .map((item) => RNATranscription[item])
    .join("");
};

toRna("ACGTGGTCTTAA");

const timeOrbitalPlanets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const age = (planet, orbita) => {
  return (
    (orbita / (timeOrbitalPlanets[planet] * 365.25 * 24 * 60 * 60)).toFixed(2) *
    1
  );
};

age("earth", 1000000000);
