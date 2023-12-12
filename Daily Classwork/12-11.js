//////////// BOOTCAMP WEEK 1 - DAY 1 //////////////
///////////// PSEUDOCODING EXAMPLE ////////////////


/*
Instructor Example: Watch the instructor model how to utilize I/O/C/E in conjunction with pseudocoding to solve a coding problem.

Sample Directions: Create a function called firstAndLast that takes in an one parameter - array - which represents an array of strings. 
This function should return a NEW array that only contains the first and last value from the input array with an exclamation point added. 
Solve this problem without using any array methods other than array.push(). 

If the input array is empty, return null.

example: firstAndLast(['a', 'b', 'c']); // => ['a!', 'c!']
*/
//I: array of strings 
//O: array of strings of the first and last entry of input array with exclaimation point after each entry
//C: can only use Array.push() method
//E: if input is an empty array return null
function firstAndLast(strings) {
    //if empty array, return null
    if(strings.length === 0){return null}
    //initialize return array
    let returnArr = [];
    // push first element concatenated with "!"
    returnArr.push(strings[0] + "!");
    //push last element concatenated with "!"
    returnArr.push(strings[strings.length - 1] + "!");
    //return return array
    return returnArr;
}


/*
PROBLEM #2
Directions: Create a function called addFiveArray that takes in one parameter - array - which represents an array of numbers. 
This function should should return a NEW array where each value is the number from the input array with 5 aadded to it. 
Only use array.push method (no other array methods).

If the input array is empty, return an empty array.

example: addFiveArray([1, 2, 3]); // => [6, 7, 8]
*/
//I:array of numbers
//O:new array of numbers which is the input array with each element + 5
//E:if array is empty return an empty array
//C:only use array.push() method
function addFiveArray(nums) {
    //initialize empty array
    let returnArr = [];
    //itterate through nums
    for(let num of nums){
    //push number + 5 to output array
        returnArr.push(num + 5);
    }
    //return output array
    return returnArr;
}


/* PROBLEM #3
Create a function called createUserMessage that takes in one parameter - object - which represents a user object. 
This function should access the `age` property on the input object to see if it is greater than or equal to 21. 
If it is, the function should return a string like this => "<user name> is <user age> years old and can have a drink."
 */
//I:user object
//O:return string formatted as "<user name> is <user age> years old and can have a drink." if user's age is at least 21
//C:N/A
//E:N/A
function createUserMessage(user) {
    //check if user's age is 21 or more
    if(user.age >= 21){
        //return "<user name> is <user age> years old and can have a drink."
        return `${user.name} is ${user.age} years old and can have a drink.`
    }
}


console.log(firstAndLast(["a", "b", "c"]));
console.log(addFiveArray([1, 4, 6, 7]));
console.log(createUserMessage({age:23, name: 'Alex Hebert'}));

const letters = 'abcdefghijklmnopqrstuvwxyz';
    //compare index position of the first characters of each of the strings
  console.log(letters.indexOf('clex'[0].toLowerCase()))