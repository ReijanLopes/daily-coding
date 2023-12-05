const rows = (rows) => {
  let result = 1;
  return Array.from({ length: rows }).map((_, index) => {
    return Array.from({ length: index + 1 }).map((_, idx) => {
      return (result =
        index === 0 || idx === 0 ? 1 : (result * (index - idx + 1)) / idx);
    });
  });
};

rows(1);
