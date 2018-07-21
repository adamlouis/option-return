function f() {
  return 1;
}

function g() {
  var optionReturn_3351940613 = (1);
  if (optionReturn_3351940613) {
    return optionReturn_3351940613;
  }
}

function h() {
  var optionReturn_2256352508 = (Math.random() > 0.5);
  if (optionReturn_2256352508) {
    return optionReturn_2256352508;
  }
}

function i() {
  var optionReturn_281524318 = (f());
  if (optionReturn_281524318) {
    return optionReturn_281524318;
  }
  var optionReturn_3122542605 = (g());
  if (optionReturn_3122542605) {
    return optionReturn_3122542605;
  }
  var optionReturn_7140946 = (h());
  if (optionReturn_7140946) {
    return optionReturn_7140946;
  }
}

function k(v) {
  var optionReturn_4135391078 = (v > 5 ? 'apple' : 'pear');
  if (optionReturn_4135391078) {
    return optionReturn_4135391078;
  }
}

console.log(f());
console.log(g());
console.log(h());
console.log(i());
console.log(k(4));
console.log(k(11));