/**
 * FUNCTIONS
 * 
 * 0.Functions create a codeblock that can be called later and in multiple points in a program
 * 
 * 1.Using fucntions is compised in of two steps, declaration and call. The declaration is creating the function and calling the function runs the code block. 
 *   A function is decalred once and can be called multiple times. 
 * 
 * 2.Variables can store functions like other data and can be used to pass functions into methods and other functions.
 * 
 * 3.Functions can take inputs or arguments and can return a value.
 */

//1. Declaration : declaring a function uses the function keyword, followed by a name and any number of arguments encapsulated in parentheses then a code block inside curly braces
function doSomething (arg){ //declares a function named doSomething with a single argument arg
    return arg; //code block associated with doSomething function returns the argument back to the function call
}

//2. Calling : Functions are called by using the declared name and passing in a number of parameters up to the number of arguments the function was declared with
console.log(doSomething('Hello World!'))//logs Hello World! since doSomething returns the parameter passed to it

//3. Function Expressions : functions can also be made in the form of a function expression. Function expressions can be made without a name, creating an anonymous function.
const myFunc = function(arg){return arg;}; //initalizes a variable storing an anonymous function 

//4. Scope : Functions have access to the global and parent scope, however the global and parent scopes do not have access to the variables declared inside a function
var global = 'GLOBAL SCOPE';
function foo () {
    var parent = 'PARENT SCOPE';
    function bar() {
        var inner = 'ONLY IN BAR';
        console.log(parent);//logs PARENT SCOPE since bar can access the outer function scope
        console.log(global);//logs GLOBAL SCOPE since bar can access the global scope
    }
    bar()
    //console.log(inner);//logs reference error since the foo cannot access variables inside bar
}
foo();
//console.log(parent);//logs reference error since the global scope cannot access variables inside functions

//5. Closure : Functions returned in the resolution if another function will still have access to the variables of the parent function.
function makeFunction(arg){
    var parent = "From parent scope";
    return function () {console.log(parent, arg)}
}

var myFunction = makeFunction('Parent Argument');
myFunction();//logs both From parent scope and Parent Argument since the inner function still has access to parent function variables