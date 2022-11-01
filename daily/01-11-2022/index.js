/* Types phone number:
    +55 55 55555 5555
    +55 55 55555-5555
    +55 (55) 55555 5555
    +55 (55) 55555-5555
    +55 (55)55555-5555
    (55) 55555-5555
    (55)55555-5555
    55555-5555
    555555555 */

const regexPhoneNumber = [
  /[+]\d{2} \(\d{2}\) \d{5}-\d{4}/,
  /[+]\d{2} \d{2} \d{5}[ -]\d{4}/,
  /[+]\d{2} \(\d{2}\)? ?\d{5}[ -]\d{4}/,
  /\(\d{2}\)? ?\d{5}[ -]\d{4}/,
  /\d{9}/,
  /\d{5}-\d{4}/,
];

function formattedPhoneNumber(numberInString) {
  const validNumber = regexPhoneNumber.some((item) =>
    item.test(numberInString)
  );
  const _DD = 55;
  const _DDICode = 55;

  if (validNumber) {
    const cleaned = ("" + numberInString).replace(/\D/g, "");

    if (cleaned.length == 9) {
      const splittedInitial = cleaned.slice(0, 5);
      const splittedEnd = cleaned.slice(5);

      return `+${_DDICode} (${_DD}) ${splittedInitial}-${splittedEnd}`;
    }
    if (cleaned.length == 11) {
      const DD = cleaned.slice(0, 2);
      const splittedInitial = cleaned.slice(2, 7);
      const splittedEnd = cleaned.slice(7);

      return `+${_DDICode} (${DD}) ${splittedInitial}-${splittedEnd}`;
    }

    if (cleaned.length == 13) {
      const DDICode = cleaned.slice(0, 2);
      const DD = cleaned.slice(2, 4);
      const splittedInitial = cleaned.slice(4, 9);
      const splittedEnd = cleaned.slice(9);

      return `+${DDICode} (${DD}) ${splittedInitial}-${splittedEnd}`;
    }
  }
  return "Number invalid";
}

console.log(formattedPhoneNumber("96545001"));
