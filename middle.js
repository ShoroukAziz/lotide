const middle = function (array) {

  const result = [];
  const arrayLength = array.length;
  if (arrayLength <= 2) return result;
 
  if (arrayLength % 2 !== 0)
    result.push( array[(arrayLength-1)/2] );
  else{
    result.push( array[(arrayLength/2)-1] );
    result.push( array[arrayLength/2] );
  }
  return result;
  
}


module.exports = middle;

