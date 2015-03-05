module.exports.reversePlusOne = function(array){
  array.reverse().unshift(array.last());
  return array;
};

module.exports.plusesEverywhere = function(array){
  return array.join("+");
};

module.exports.arrayQuantityPlusOne = function(array){
  return array.length + 1;
};

// I really like how ruby gives you a first and last method on Arrays. So I found someone creating them. 
Array.prototype.first = function(){
    return this[0];
};

Array.prototype.last = function(){
    return this[this.length - 1];
};
