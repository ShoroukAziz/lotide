const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (callback(element))
      break;

    results.push(element);
  }


  return results;
};

module.exports = takeUntil;