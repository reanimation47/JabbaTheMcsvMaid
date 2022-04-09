// Multiply digits 
export function mulStr(string: string) {
    let pos = 1;
    let numArray = [];
    let numString = null;
  
    for (let num of string) {
      let isParsed = isNaN(parseInt(num));
      if (!numString && !isParsed && pos === string.length) {
        numArray.push(num);
      } else if (!numString && !isParsed && pos !== string.length) {
        numString = num;
      } else if (numString && !isParsed && pos === string.length) {
        numString += num;
        numArray.push(numString);
      } else if (numString && isParsed && pos === string.length) {
        numArray.push(numString);
      } else if (numString && !isParsed) {
        numString += num;
      } else if (numString && isParsed && pos !== string.length) {
        numArray.push(numString);
        numString = null;
      } else if (!numString && isParsed && pos === string.length) {
        numString += num;
        numArray.push(numString);
      }
      pos++;
    }
    //   console.log('numAray:', numArray);
    let result = 1;
  
    for (let num of numArray) {
      let value = parseInt(num!);
      result = result * value;
    }
    return result;
  }