const discountBooks = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};

const separeteBooks = (books) => {
  const filter = [];

  books.map(() => {
    const res = [];

    Object.keys(discountBooks).map((item) => {
      const index = books.indexOf(Number(item));

      if (index != -1) {
        res.push(books[index]);
        books[index] = "";
      }
    });
    res?.[0] ? filter.push(res) : null;
  });
  return filter;
};

export const cost = (books) => {
  const valueFull = 800;
  const valueDiscounted = Object.keys(discountBooks).map(
    (item) => valueFull * item - valueFull * item * discountBooks[item]
  );
  const filter = separeteBooks(books);

  let total = 0;
  filter.map((item) => {
    console.log(valueDiscounted[item.length - 1]);
    total += valueDiscounted[item.length - 1];
  });

  return total;
};

cost([1, 1, 2, 3, 4, 4, 5, 5]); //Accepted numbers from 1 to 5
