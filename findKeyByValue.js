const findKeyByValue = (obj, value) =>  Object.keys(obj).filter(key => obj[key] === value)[0];

module.exports = findKeyByValue;