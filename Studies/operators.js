/**
 *  OPERATORS
 * 
 * 0.Operators are the syntax used to manipulate or gain information about data. The data used is call the operators
 * 
 * 1.Assignment operators assign or reassign a variable. The assignment operator = can be used in conjuction with many other operators to
 * preform an operation on the current value and reassign the new value to a variable
 *   Examples include: =, +=, -=, ++, 
 * 
 * 2.Arithmetic operators are used to preform mathematical operations. Most only resolve to numbers.
 *   Examples: +, -, *, /, **, and %
 * 
 * 3.Comparison operators are used to compare values. Resolve to boolean values
 *   Examples: instanceof, in, ===, !==, <, >, <=, and >=
 *  
 * 4.Logical operators are used to preform logical operations. Resolve to boolean values.
 *   Examples: ||, &&, and !
 * 
 * 5.Unary operators preform a variety of operations but ony take one peice of data
 *   Examples: delete, typeof, and +
 * 
 * 6.Ternary operator resolves to one of two values depending on a logical test expression
 *  syntax: (logical expression) ? (value if truthy) : (value if falsy)
 * 
 */

//** ASSIGNMENT OPERATORS **/
//1a. Assignment operator (=) : sets the value of a variable
var variable = 'assigned';//the value of variable is now 'assigned'
variable = 'reassigned';//the value of variable is now 'reassigned'

//1b.Compound Assignment operators : Use the assignment operator in conjunction with another operator to preform an operation on the current value and 
//                                   reassign the variable to the result
variable += ' with compound assignment';//the value of variable is now 'reassigned with compound assignmnent'

//** ARITHMETIC OPERATORS **/
//2a. Addition operator (+) : resolves to the sum two numbers together or the concatenation of two strings
console.log(1 + 1);//logs 2 
console.log('Hello ' + 'World!');//logs 'Hello World!'

//2b. Subtraction operator (-) : resolves to the difference of two numbers
console.log(1 - 1);//logs 0

//2c. Multplication operator (*) : reslolves to the product of two numbers 
console.log(2 * 4)//logs 8

//2d. Division operator (/) : resolves to the quotient of two numbers
console.log(10 / 2)//logs 5

//2e. Exponentiation operator (**) : resolves to the result of raising the first operand to the power of the second
console.log(2 ** 16)//logs 65536

//2f. Remainder operator (%) : resolves to the remainder after dividing two numbers
console.log(17 % 3)//logs 2 since 17/3 = (5*3) + 2

//** COMPARISON OPERATORS **//
//3a. Less than operator (<) : determines if the left operand is less than the right operand. Logically opposite of greater than or equal to.
console.log(2 < 3);//logs true
console.log(3 < 2);//logs false
console.log(3 < 3);//logs false

//3b. Greater than operator (>) : determines if the left operand is greater than the right operand. Logically opposite of less than or equal.
console.log(2 > 3);//logs false
console.log(3 > 2);//logs true
console.log(3 > 3);//logs false

//3c. Less than or equal operator (<=) : determines if the left operand is less than or equal to the right operand. Logically opposite of greater than.
console.log(2 <= 3);//logs true
console.log(3 <= 2);//logs false
console.log(3 <= 3);//logs true

//3d. Greater than or equal operator (>=) : determines if the left operand is greater than or equal to the right operand. Logically opposite of less than.
console.log(2 >= 3);//logs false
console.log(3 >= 2);//logs true
console.log(3 >= 3);//logs true

//3e. Strict equality operator (===) : determines if the operands are equivalent and the same data type
console.log(2 === 3);//logs false
console.log(2 === '2');//logs false
console.log(2 === 2);//logs true

//3f. Strict inequality operator (!==) : determines if the operands are not equivalent and not the same data type
console.log(2 !== 3);//logs true
console.log(2 !== '2');//logs true
console.log(2 !== 2);//logs false

//3g. in operator (in) : determines if the first operand is a property of an object
const obj = {
    'isAProperty' : 0
};

console.log('isAProperty' in obj)//logs true
console.log('isNotAProperty' in obj)//logs false

//3h. instance of operator (instanceof) : determines if given obect is an instance of another object
function Foo(prop){
    this.prop = prop;
}

function Bar(prop){
    this.prop = prop;
}

const instance = new Foo ('Hello');

console.log(instance instanceof Foo);//logs true
console.log(instance instanceof Object);//logs true, since instance is an instance of the built-in object type
console.log(instance instanceof Bar);//logs false

//** LOGICAL OPERATORS **/
//4a. OR operator (||) : resolves to true if either operand is truthy, false otherwise
console.log(true || false);//logs true
console.log(false || true);//logs true
console.log(true || true);//logs true
console.log(false || false);//logs false

//4b. AND operator (&&) : resolves to true if both operands are truthy, false otherwise
console.log(false && false);//logs false
console.log(false && true);//logs false
console.log(true && false);//logs false
console.log(true && true);//logs true

//4c. NOT operator (!) : negates the truthy value of the operand
console.log(! true);//logs false
console.log(! false);//logs true

//4d. Nullish coalescing operator (??) : resolves to the first operand unless it is null or undefined, in that case resolves to the second operand
console.log(0 ?? 'default value');//logs 0
console.log(undefined ?? 'default value');//logs 'default value'

//** UNARY OPERATORS **/
//5a. delete operator (delete) : deletes a property from an object
let test = new Foo('property');//creates an object with a single property
console.log(test);//logs Foo {prop: 'property'}
delete test.prop;//removes prop property from test
console.log(test);//logs Foo {}

//5b. type of operator (typeof) : resolves to a string of the name of the data type of the operand. Limited in that it considers all complex datatypes - including arrays - objects
console.log(typeof 'String');//logs string
console.log(typeof 0);//logs number
console.log(typeof false);//logs boolean
console.log(typeof Foo);//logs function
console.log(typeof {isObject: true});//logs object
console.log(typeof ['i', 'am', 'an', 'array']);//logs object

//5c. Unary plus operator (+) : converts operand to a number
console.log('2' + 2)//logs 22, since it concatenates the numbers as strings
console.log((+'2') + 2)//logs 4 since the first 2 is converted into a number

//** TERNARY OPERATOR **/
//6 Ternary Operator ( ? : ) : resolves to one of two values depending on a logical test expression
console.log(true ? 'log if truthy' : 'log if falsy')//logs 'log if truthy'
console.log(false ? 'log if truthy' : 'log if falsy')//logs 'log if falsy'