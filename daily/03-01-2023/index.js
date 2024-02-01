const transpose = (array) => {
  // how to know which is the largest string to know which is the largest multiplier Math.max(...array.map(i => i.length))

  return Array.from(
    { length: Math.max(...array.map((i) => i.length)) },
    // (v == item, i == index)
    (v, i) => {
      array.reduce(
        (acc, cur, index) =>
          acc + // returns charAt string element of a by index. the return will always be a string ""
          //padStart gives space between the beginning and the element "B".charAt(0).padStart(5) return "     B"
          (cur.charAt(i) ? cur.charAt(i).padStart(index + 1 - acc.length) : ""),
        ""
      );
    }
  );
};

transpose(["T", "EE", "AAA", "SSSS", "EEEEE", "RRRRRR"]); // [ 'TEASER', ' EASER', '  ASER', '   SER', '    ER', '     R' ]
