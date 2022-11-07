function addTogether() {
  if (typeof arguments[0] !== "number") {
    return undefined;
  }
  if (arguments.length == 2) {
    if (typeof arguments[1] !== "number") {
      return undefined;
    }
  }

  const arg1 = arguments[0];

  if (arguments[1]) {
    return arg1 + arguments[1];
  }

  return (arg2) => {
    if (typeof arg2 === "number") {
      return arg1 + arg2;
    } else {
      return undefined;
    }
  };
}

addTogether(73)(23);
