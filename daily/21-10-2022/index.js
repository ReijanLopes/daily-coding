const alphabet = "abcdefghijklmnopqrstuvwxyz";

const missingLetter = (str) => {
  const initial = alphabet.indexOf(str[0]);
  let focusedAlphabet = alphabet.slice("");

  console.log(str);

  let res;
  str.split("").map((letter, index) => {
    if (letter != focusedAlphabet[index]) {
      res = focusedAlphabet[index];
    }
  });
  return res;
};

console.log(missingLetter("abce"));
