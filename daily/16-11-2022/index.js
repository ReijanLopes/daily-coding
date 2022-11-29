const encode = (str) => {
  if (str === "") {
    return "";
  }
  let res = "";
  let count = 0;
  let value = str[0];
  const split = str.split("");

  split.map((item) => {
    if (item != value) {
      res += count == 1 ? value : count + value;
      count = 1;
      value = item;
    } else {
      count++;
    }
  });

  res += count == 1 ? value : count + value;

  return res;
};

encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"); // "12WB12W3B24WB"

const decode = (str) => {
  let result = "";
  const reg = /[A-Za-z]/;
  let cut = 0;

  const split = str.split("");

  split.map((item, i) => {
    const validation = item.match(reg);
    if (validation || item === " ") {
      let res = "";
      split.slice(cut == 1 ? cut + 1 : cut, i).map((item) => (res += item));

      if (Number(res) > 1) {
        for (let i = 0; i < Number(res); i++) {
          result += item;
        }
      } else {
        result += item;
      }

      cut = cut == 0 ? i : i + 1;
    }
  });

  return result;
};

decode("12WB12W3B24WB"); // "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"

// A good way to improve code is to use regex to its full power
// Why to filter string and transform your regex structure is the best choice

const encode2 = (str) => {
  return str.replace(/(.)\1+/g, (chunk, char) => chunk.length + char);
};

encode2("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"); // "12WB12W3B24WB"

const decode2 = (str) => {
  return str.replace(/(\d+)(.)/g, (pair, count, char) => char.repeat(count));
};

decode2("12WB12W3B24WB"); // "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"
