// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    //itterate from 1 to 100
    for(let i = 1; i <= 100; i++){
        //initialize output string
        let str = "";
        //if i is divisable by 3 add fizz to output string
        if(i % 3 === 0){
            str += 'Fizz';
        }
        //if i is divisable by 5 add buzz to output string
        if(i % 5 === 0){
            str += 'Buzz';
        }
        //if output string is empty add i to output string
        if(str.length === 0){
            console.log(i);
        }
        //otherwise log output string to console
        else{
            console.log(str);
        };
}
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}