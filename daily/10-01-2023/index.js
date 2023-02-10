const steps = (n) => {
let res = n
let count = 0
  while(res !== 1){
    res = res % 2 === 0 ? res / 2 : 3 * res + 1
    count += 1
  }  
 return count
};

steps(12)