/**
 * LOOPS
 * 
 * 0.Loops allow a code block to be executed multiple times 
 * 
 * 1. The two types of loops are for and while loops. For loops are used to execute code a number of times. While loops are used to execute code until a condition is false
 * 
 * 2. There are 2 specialized forms of for loops, for...in and for...of. The for...in loop itterates over all property names of an object. A for...of loop itterates over all
 *    elements of an iterable object such as an array.
 */
//1. while loop : A while loop executes a code block until a test expression resolves to a falsy value
let i = 0;
while(i !== 3){//stops executing the codeblock once i === 3
    console.log(i++)//logs numbers 0 - 2
}

//2 for loop : A for loop executes a code block a certian amount of times. The for loop statement has 3 parts, the initalization of the itteration variable, the test expression
//             that limits the number of times the code block is run, and an updating expression that executes at the end of every execution of the code block.
for(let i = 0; i < 4; i++){//i starts at 0 and increments by one each execution until it is greater than or equal to 4
    console.log(i);//logs numbers 0 - 3
}
for(let i = 3; i >= 0; i--){//i starts at 3 and increments by negative one each execution until it is less than 0
    console.log(i);//logs numbers 3 - 0 
}

//2b. itterating though an array using a for loop : by using the itterator variable as as the index and using the length of the array as a bound a for loop can be used to itterate through an array
const arr = ['i', 'am', 'an', 'array'];
for(let i = 0; i < arr.length; i++){//i starts at 0 and increments by one each execution until it is greater than the length of the array
    console.log(arr[i])//logs each element in array
}

for(let i = arr.length - 1; i >= 0; i--){//i starts at the last element index and decrements until it is less than 0
    console.log(arr[i])//logs each element in array backwards
}

//3. for...in loop : Itterates through the keys of an object
const obj = {
    propertyA : 'value',
    propertyB : 1,
    propertyC : {inner : 'x'}
}

for(let key in obj){//defines a variable "key" used to reference the property name as the object is itterated through
    console.log(`${key} : ${obj[key]}`);//logs each key value pair in object
}

//4. for...of loop : itterates through elements of an itterable object such as an array
for(let element of arr){//defines a variable "element" used to reference the element as the object is itterated through
    console.log(element);//logs each element of the array
}