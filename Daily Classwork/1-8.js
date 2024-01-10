// Create a function called multiplyByTen that takes in an array of integers. This function should return a new array of integers, where each value is the previous multiplied by 10.

function multiplyByTen(array, output=[]){
    // base
    if(array.length === 0){
        //return output
        return output;
    }
    // recursion
    else{
        //push first number multiplied by 10
        output.push(array[0] * 10);
        //recursive call reducing array
        return multiplyByTen(array.slice(1), output)
    }
  }
  
  //console.log(multiplyByTen([1, 2, 3])); // [10, 20, 30]
