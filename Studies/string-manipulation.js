/**
 * STRING MANIPULATION
 * 
 * 0. There are many situations in which a string will need to be manipluated and this can be done using operators or built-in methods.
 * 
 * 1. It is possible to concatenate strings using the + and += operators
 * 
 * 2. it is possible to achieve more complex operations with strings by using methods such as: .replace, .toLowerCase, .toUpperCase, .substring and .splice
 * 
 */

//1a. Concatenation using + operator : two strings can be combined into a single string using the + operator
console.log('Hello ' + 'World!');//logs the strings Hello and World! as a single string

//1b. Concatenation using the += operator : a variable representing a string can be concatenated with another string and assigned to the resulting string
let stringA = 'Hello ';//initalizie a variable storing a string
stringA += 'World!';//concatenate 'Hello ' and 'World!' and assign it to the variable stringA
console.log(stringA);//logs 'Hello World!'

//2a. Manipulation using .replace : This method replaces the first instance of a substring inside a string with a new substring
let stringB = 'I love Python';
stringB.replace('Python', 'JavaScript');//replaces Python with JavaScript
console.log(stringB);//logs 'I love JavaScript'

//2b. Manipulation using .toLowerCase : This method makes every alphabetical charater lowercase
let cappedString = 'ALEX',
    lowerCaseString = cappedString.toLowerCase();//lowerCaseString = 'alex'
console.log(lowerCaseString);//logs alex

//2c. Manipulation using .toUpperCase : This method makes every alphabetical character uppercase
let lowerString = 'hebert',
    upperCaseString = lowerString.toUpperCase();//upperCaseString = HEBERT
console.log(upperCaseString);//logs HEBERT

//2d. Manipulation using .substring and slice: These methods extract a section of the string
let stringC = 'Alex Hebert',
    firstName = stringC.slice(0, 3),//extract the first 4 characters of stringC
    lastName = string.substring(5, 11);//extracts characters 6 though 12 of stringC
    console.log(firstName);//logs Alex
    console.log(lastName);//logs Hebert

