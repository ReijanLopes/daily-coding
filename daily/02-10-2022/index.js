const stringNumbers = "73167176531330624919225119674426574742355349194934";

function largestMultiplesAligned(value, numberOfElements) {
  const array = [];
  const splitted = value.split("");
  const numbers = splitted.map((_, index) => {
    const numberAligned = [];
    for (let i = 0; i < numberOfElements; i++) {
      if (isNaN(stringNumbers[i + index])) {
        numberAligned.push(0);
      } else {
        numberAligned.push(Number(stringNumbers[i + index]));
      }
    }
    return numberAligned.reduce((total, current) => total * current);
  });

  console.log(Math.max(...numbers));
}

largestMultiplesAligned(stringNumbers, 5);
