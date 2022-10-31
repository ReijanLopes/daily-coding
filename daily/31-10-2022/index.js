const numbersRamon = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
//its structure is very important, as the numbers must be reduced from the largest to the smallest, otherwise there will be a bug

const convertingNumbersInNumberRoman = (number) => {
  let res = "";
  for (const key in numbersRamon) {
    //iterate per
    const numberValue = numbersRamon[key];
    while (numberValue <= number) {
      number -= numberValue;
      res += key;
    }
  }

  return res;
};

convertingNumbersInNumberRoman(13232);
