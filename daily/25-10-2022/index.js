const isPrime = (value) => {
  let counter = 2;
  while (counter < value) {
    if (value % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};

const reduceNumberPrimes = (num) => {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(reduceNumberPrimes(10));
