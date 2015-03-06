module.exports.getKeys = function(object){
  var keys = [];
  
  for(var property in object){
    keys.push(property);    
  }

  return keys;
};

module.exports.getValues = function(object){
  var values = [];
  for(var property in object){
    values.push(object[property]);
  }

  return values;
};

module.exports.objectToArray = function(object){
  array = [];
  for(var property in object){
    array.push(property + " is " + object[property])
  }

  return array;
};