const flatten = arr => {

  let result = [];
  for (element of arr){
    
    if (Array.isArray(element)){
      for (subelement of element){
        result.push(subelement);
      }
    }
    else
      result.push(element);

  }
  return result;

}  


module.exports = flatten;