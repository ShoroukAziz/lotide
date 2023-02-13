const findKey = (obj, callback) => Object.keys(obj).filter(key => callback(obj[key]))[0];
module.exports = findKey;