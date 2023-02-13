  const without = (source, itemsToRemove) => {

    let result =[];
    for (let item of source) {

      let remove = false;
      for(let removable of itemsToRemove){

        if(item === removable){
          remove = true;
          break;
        }
      }
      if(!remove)
        result.push(item);

    }
    return result;

  }

module.exports = without;