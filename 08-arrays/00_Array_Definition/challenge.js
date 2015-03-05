module.exports.newArray = function(first, second, third, fourth){
  return [first, second, third, fourth]
};

module.exports.firstAndLast = function(array){
  return [array.first(), array.last()]
};


// I really like how ruby gives you a first and last method on Arrays. So I found someone creating them. 
Array.prototype.first = function(){
    return this[0];
};

Array.prototype.last = function(){
    return this[this.length - 1];
};
