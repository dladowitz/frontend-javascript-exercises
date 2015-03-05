module.exports.favoriteNumber = function(number, guess){
  if(number === guess){
    return "You got it!";
  } else if(guess >= number){
    return 'Too high';
  } else {
    return "Too low";
  }
};

module.exports.canIGet = function(product, savings){
  if (product === "MacBook Air"){
    return savings >= 999;
  } else if (product === "MacBook Pro"){
    return savings >= 1299;
  } else if (product === "Mac Pro"){
    return savings >= 2499;    
  } else if (product === "Apple Sticker"){
    return savings >= 1;
  } else {
    return false;
  }
};

module.exports.checkLock = function(first, second, third, fourth){
  if (first !== 3 && first !== 5 && first !== 7){
    return "incorrect";
  } else if (second !== 2){
    return "incorrect";
  } else if (third <= 4 || third >= 101){
    return "incorrect";
  } else if (fourth >= 9 && fourth <= 20){
    return "incorrect";
  } else {
    return "correct";
  }
};