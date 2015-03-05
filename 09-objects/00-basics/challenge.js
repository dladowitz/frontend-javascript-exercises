module.exports.createCourse = function(title, duration, students){
  return { title: title, duration: duration, students: students };
};

module.exports.addProperty = function(object, property, value){
  if (object[property] === undefined){
    object[property] = value;
  } 
  return object;
};

module.exports.formLetter = function(letter){
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(product, money){
  var inventory = {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1,
  }

  if(money >= inventory[product]){
    return true;
  } else {
    return false;
  }
};