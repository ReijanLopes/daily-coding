function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

const array1 = [2, 4];
const array2 = [1, 5, 7];
twoSum(array1, array2);

function luckyNumber(value) {
  return String(value).split("").reverse().join("") === String(value);
}

luckyNumber(15651);

function errorMessage(input) {
  if (!input) {
    return "Required field";
  } else if (input == 0 || !Number(input)) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}

errorMessage("some text");
