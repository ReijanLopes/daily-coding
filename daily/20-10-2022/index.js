const string =
  "A quick brown fox jumped over the lazy dog. He is Sleeping on the couch. I think we should look up there. This has a spellngi error. His name is Tom. Let us get back to more Coding";
const before = ["jumped", "Sleeping", "up", "spellngi", "Tom.", "Coding"];
const afters = ["leaped", "sitting", "Down", "spelling", "john.", "algorithms"];

const correctingAString = (string, before, after) => {
  const stringSplit = string.split(" ");

  const isCapitalized = (word) => {
    return word[0] === word[0].toUpperCase();
  };
  const capitalizedWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  const smallWord = (word) => {
    return word[0].toLowerCase() + word.slice(1);
  };

  stringSplit.map((word, i) => {
    before.map((before, index) => {
      if (word === before) {
        if (isCapitalized(word)) {
          stringSplit[i] = capitalizedWord(after[index]);
          console.log(stringSplit[i]);
        } else {
          stringSplit[i] = smallWord(after[index]);
          console.log(stringSplit[i]);
        }
      }
    });
  });

  return stringSplit.join(" ");
};

console.log(correctingAString(string, before, afters));
