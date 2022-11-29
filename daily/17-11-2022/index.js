const dayRate = (ratePerHour, workingTimePerDay) => {
  return ratePerHour * workingTimePerDay;
};

const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;
  const fullMonthPrice = fullMonths * 22 * dayRate(ratePerHour, 8);
  return Math.ceil(
    fullMonthPrice -
      discount * fullMonthPrice +
      remainingDays * dayRate(ratePerHour, 8)
  );
};

priceWithMonthlyDiscount(29.654321, 155, 0.2547);
