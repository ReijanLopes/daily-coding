const maskPhone = (tel) => {
  const length = tel.length > 14 ? 15 : tel.length;

  tel = tel.substring(0, 15);
  tel = tel.replace(/\D/g, "");
  tel = tel.replace(/(.{0})(\d)/, "$1($2");
  tel = tel.replace(/(.{3})(\d)/, "$1) $2");

  const replacePhone = {
    11: tel.replace(/(.{1})$/, "-$1"),
    12: tel.replace(/(.{2})$/, "-$1"),
    13: tel.replace(/(.{3})$/, "-$1"),
    14: tel.replace(/(.{4})$/, "-$1"),
    15: tel.replace(/(.{4})$/, "-$1"),
  };

  tel = replacePhone[length] ? replacePhone[length] : tel;

  return tel;
};
