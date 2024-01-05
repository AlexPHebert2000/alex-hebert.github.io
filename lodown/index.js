'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
function each(collection, func){
    //itterate through collection
    for(let index in collection){
        //apply function to element
        func(collection[index], index, collection);
    }
}


/**
 * Function takes in an input value and retuns the value unchanged
 * @param {*} value : Function takes in any input value
 * @returns {*} value: Function returns the input value unchanged
 */

function identity (value){
    return value;
}

/**
 * 
 * @param {*} value : Function takes in any value
 * @returns {string} type : Function returns the type of the input value
 */

function typeOf(value){
    switch(typeof value){
       case('string'):
       case('function'):
       case('undefined'):
       case('boolean'):
       case('number'):
           return typeof value;
       case('object'):
       if(Array.isArray(value)){
           return 'array';
       }
       else if(value){
           return 'object';
       }
       else{
           return "null";
       }
   }
}

/**
 * Function takes in an array and returns the first x elements in a new array
 * @param {Array} arr : Array to trim
 * @param {Number} num : The number of elements to retain off the front of the array
 * @returns {Array} : Array of the first num elements of the input array 
 */

function first(arr, num){
    if(!Array.isArray(arr) || typeof num !== 'number' && num || num < 0){return []}
    else if(num === undefined){
        return arr[0];
    }
    else{
        arr.splice(num, arr.length - num);
        return arr;
    }
}

/**
 * Function takes in an array and returns the last x elements in a new array
 * @param {Array} arr : Array to trim
 * @param {Number} num : The number of elements to retain off the end of the array
 * @returns {Array} : Array of the last num elements of the input array
 */

function last(arr, num){
    if(!Array.isArray(arr)){return [];}
    else if(num === undefined || typeof num !== 'number'){return arr[arr.length - 1];}
    else if(num >= arr.length){return arr;}
    else{
        return arr.splice(arr.length - num);
    }
}

/**
 * Searches input array for a value and returns the first index that contains that value
 * @param {Array} arr : Array to search
 * @param {*} value : Value to search for
 * @returns {Number} : returns index of value in input array, -1 if not found
 */

function indexOf(arr, value){
    //itterate through array
    for(let index in arr){
        //if element == value return index
        if(arr[index] === value){
            return +index;
        }
    }
    //if not found return -1
    return -1;
}

/**
 * Determines if array contains value
 * @param {Array} arr : Array to search 
 * @param {*} val : value to search for
 * @returns {Boolean} : if the array contains the value
 */

function contains(arr, val){
    return _.indexOf(arr, val) > -1 ? true : false;
}

/**
 * Creates a new array of all the unique values of the input array
 * @param {Array} arr : Array of values
 * @returns {Array} : Array of unique values of input array
 */

function unique(arr){
    const output = [];
    for(let index in arr){
        if(+index === _.indexOf(arr, arr[index])){
            output.push(arr[index]);
        }
    }
    return output;
}

/**
 * Returns an array of array elements that pass given test
 * @param {Array} arr : Array to be filtered
 * @param {Function} func : test to test array elements
 * @returns {Array} : Array of array elements that passed the test function
 */

function filter(arr, func){
    const output = [];
    for(let index in arr){
        if(func(arr[index], +index, arr)){output.push(arr[index])}
    }
    return output;
}

/**
 * Returns an array of array elements that fail a given test
 * @param {Array} arr : Array to be filtered
 * @param {Function} func : Test function
 * @returns {Array} : Array of array elements that fail test function
 */

function reject(arr, func){
    const output = [];
    for(let index in arr){
        if(!func(arr[index], +index, arr)){output.push(arr[index])}
    }
    return output;
}

/**
 * Seperates input array into an array of elements that pass the test function and array of elements
 * that fail the test function and encapsulates those in an array
 * @param {Array} arr : Array to test
 * @param {Function} func : Test function
 * @returns {Array} : Array of array of elements that pass the test function and array of elements
 * that fail the test function
 */

function partition(arr, func){
    return [_.filter(arr, func),_.reject(arr, func)];
}

/**
 * Execute a function on each element of a collection and return a new array of the altered values
 * @param {Array or Object} collection : collection of elements to call function on
 * @param {Function} func : Funtion to call with each element of the collection
 * @returns {Array} : Array of results of each function call
 */

function map(collection, func){
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

/**
 * Returns array of values associated with a given property from given objects
 * @param {Array} arr : Array of objects
 * @param {String} property : Key to get the values out of each object
 * @returns {Array} : Array of values assocated with given property from each object
 */

function pluck(arr, property){
    return _.map(arr, function(x){return x[property]})
}

/**
 * Tests if every element in a collection passes a test function
 * @param {Array or Object} collection : Collection of elements to test
 * @param {Function} func : Test function
 * @returns {Boolean} : If every element passes the test function
 */

function every(collection, func = function(x){return x}){
    //itterate through collection
    for(let index in collection){
        //if function called with element at index is false
        if(!func(collection[index], index, collection)){
            //return false
            return false;
        }
    }   
    //if every item passes, return true
    return true;
}

/**
 * Tests if at least one element of a collection passes the test fucntion
 * @param {Array or Object} collection : elements to test
 * @param {Function} func : test function 
 * @returns {Boolean} : If at least one element passes the test function
 */

function some(collection, func = function(x){return x}){
    //itterate through collection
    for(let index in collection){
        //if function called with element at index is true
        if(func(collection[index], index, collection)){
            //return true
            return true;
        }
    }   
    //if every item fails, return false
    return false;
}

/**
 * Uses a function to reduce an array to a single value
 * @param {Array} arr : Array to be reduced
 * @param {Function} func : function to be called with an accumulator value, array element, and array index
 * @param {*} seed : starting value, defaults to 1
 * @returns {*} : single value from function calls
 */

function reduce(arr, func, seed = 1){
    //itterate through array
    for(let index = 0; index < arr.length; index++){
        //add function return with element call to seed
        seed = func(seed, arr[index], +index )
    }
    //return seed
    return seed;
}

/**
 * Adds properties from other objects to a single object
 * @param {Object} baseObj : Object to extend 
 * @param {Object} addObj : Object whose properties will be added to baseObj
 * @param  {...Object} objs : Other objects whose properties will be added to baseObj
 * @returns {Object} : base object with properties added
 */

function extend(baseObj, addObj, ...objs){
    //create a list of additional objects
    const objects = [addObj, ...objs];
    //itterate though objects
    for(let object of objects){
        //itterate through keys of object
        for(let key in object){
            //add key value pair to base object
            baseObj[key] = object[key];
        }
    }
    //return base object
    return baseObj;
}

module.exports.each = each;
module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.last = last;
module.exports.indexOf = indexOf;
module.exports.contains = contains;
module.exports.unique = unique;
module.exports.filter = filter;
module.exports.reject = reject;
module.exports.partition = partition;
module.exports.map = map;
module.exports.pluck = pluck;
module.exports.every = every;
module.exports.some = some;
module.exports.reduce = reduce;
module.exports.extend = extend;
