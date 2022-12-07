export function translate2d(dx, dy) {
  return (x, y) => [dx + x, dy + y];
}
translate2d(2, 5)(3, 4);

export function scale2d(sx, sy) {
  return (x, y) => [sx * x, sy * y];
}
scale2d(2, 4)(4, 5);

export function composeTransform(f, g) {
  return function (x, y) {
    let fResult = f(x, y);
    return g(fResult[0], fResult[1]);
  };
}

composeTransform(scale2d, translate2d)(5, 7);

export function memoizeTransform(f) {
  let lastX = undefined;
  let lastY = undefined;
  let lastResult = undefined;
  return function (x, y) {
    if (lastX === x && lastY === y) return lastResult;
    lastX = x;
    lastY = y;
    lastResult = f(x, y);
    return lastResult;
  };
}
