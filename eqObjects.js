const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);


  if (objectOneKeys.length !== objectTwoKeys.length)
    return false;

  for (let key in object1) {

    if (Array.isArray(object1[key])){
      if (!eqArrays(object1[key], object2[key]))
        return false;
  }
      else if (object1[key] !== object2[key])
        return false;
  }
  return true;
};


module.exports = eqObjects;