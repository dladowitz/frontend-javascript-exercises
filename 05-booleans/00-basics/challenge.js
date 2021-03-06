module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
  return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
  return lower < middle && middle < upper
};

module.exports.outsideRanges = function(number) {
  return (number <=1 || number >=6) && (number <= 9 || number >= 21) && (number <= 42 || number >= 76);
};

module.exports.nameAndPrice = function(name, price) {
  return (name === "LATimes" && (price >= 1)) || (name === "NYTimes" && (price >= 1)) ;
};