// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./alex-hebert.github.io/projects/let-s-get-functional
 * 
 */

var maleCount = function(array) {
    return _.filter(array, customer => customer.gender === 'male').length
};

var femaleCount = function(array){

    return  _.reduce(array, (acc, current) => acc + (current.gender === 'female' ? 1 : 0), 0)
};

var oldestCustomer = function(array){
    //initalize current oldest
    let currentOldest = array[0];
    //itterate through array
    for(let customer of array){
        //if customer is older than current oldest
        if(customer.age > currentOldest.age){
            //change current oldest
            currentOldest = customer;
        }
    }
    //return current oldest name
    return currentOldest.name;

};

var youngestCustomer = function(array){
    //initalize current youngest
    let currentYoungest = array[0];
    //itterate through array
    for(let customer of array){
        //if customer is younger than current youngest
        if(customer.age < currentYoungest.age){
            //change current youngest 
            currentYoungest = customer;
        }
    }
    //return current oldest name
    return currentYoungest.name;
}
;

var averageBalance = function(array){
    const reducer = function(acc, current){
        let currentBalance = current.balance.replaceAll(/\$*(,)*/g, "")
        return acc + parseFloat(currentBalance);
    };

    return Math.round(_.reduce(array, reducer, 0) / array.length, 2)

};

console.log(averageBalance(customers));

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
