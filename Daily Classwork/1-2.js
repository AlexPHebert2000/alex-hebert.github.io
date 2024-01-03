const map = function(collection, func){
    //initalize new array
    const returnArr = [];
    //itterate through collection
    for(let index in collection){
        //push result of function call using element to new array
        returnArr.push(func(collection[index], index, collection));
    }
    //return array
    return returnArr;
}

console.log(map([1,2,4], (x) => {return x + 2}))

const reduce = function (arr, func, seed = arr[0]){
    //initialize previous
    let previous = seed
    //itterate through array
    for(let index = 0; index < arr.length; index++){
        //add function return with element call to seed
        previous = func(previous, arr[index], index)
    }
    //return seed
    return previous;
}

//console.log(reduce([10,20,30,40], function(memo, element, i){return memo + element + i;}, 10))
console.log(reduce([10,20,30,40], function(memo, element, i){return memo * element * (i+1);}))