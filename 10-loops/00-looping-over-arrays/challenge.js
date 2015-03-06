module.exports.sumNumbers = function(array){
  var result = 0;
  for(var counter = 0; counter < array.length; counter++){
    result += array[counter];
  }

  return result;
};

module.exports.splitAndLowerCaseString = function(string){
  return array = string.toLowerCase().split(",");
};

module.exports.addIndex = function(array){
  var newArray = []
  for(var index = 0; index < array.length; index++){
    newArray[index] = index + " is " + array[index]; 
  }

  return newArray;
};
