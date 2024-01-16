const vowels = ['a', 'e', 'i', 'o', 'u', 'yt', 'xr'];
const combos = ['ch', 'qu', 'th', 'thr', 'sch', 'rh']

export const translate = (sentence) => {
  return sentence.split(' ').map(translateWord).join(' ')
};

const frontToBack = (word, n) => {
  return word.slice(n) + word.substring(0, n)
}

function translateWord(word) {
  let chopFront = 1;
  vowels.forEach(vowel => { 
    if (word.startsWith(vowel)) chopFront = 0;
  })
  combos.forEach(combo => {
    if (word.startsWith(combo)) 
      chopFront =  combo.length;
  })
  if (chopFront === 1 && word.match(/^\wqu/) != null) chopFront = 3;
  return frontToBack(word, chopFront) + "ay";
}