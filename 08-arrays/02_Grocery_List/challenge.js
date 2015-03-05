module.exports.addItem = function(item, origArray){
  if(origArray.indexOf(item) === -1){
    origArray.push(item);
    return origArray
  } else {
    return origArray;
  }
};

module.exports.reverseSortedList = function(array){
  return array.sort().reverse()
};