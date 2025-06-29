// Пункт 2
function min(a, b) {
  return a < b ? a : b;
}
alert(min(3, 5));

// Пункт 3
const minExpr = function(a, b) {
  return a < b ? a : b;
};
alert(minExpr(3, 5));

// Пункт 4
const minArrow = (a, b) => a < b ? a : b;
alert(minArrow(3, 5));

// Пункт 5
function createProgression(base, times) {
  if (times <= 0) return base.toString();
  let result = "";
  for (let i = 1; i <= times; i++) {
    result += base * i;
    if (i < times) result += ", ";
  }
  return result;
}
alert(createProgression(7, 3));