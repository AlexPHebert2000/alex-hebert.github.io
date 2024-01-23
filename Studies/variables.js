/**
 * VARIABLES
 * 
 * 0: Variables are named pointers or references that allow for direct and named access to values.
 * The data the variable references can be changed later. Variables have a scope that limits the 
 * access to that variable in other places in the code.
 * 
 * 1: Creating a variable is comprised of 2 steps: declaration and initialization. Declaration 
 * involves using a declariative keyword - var, let, or const - and assigning it a name. 
 * Initialization assigns the variable to a value to reference
 * 
 * 2: Declarative keywords used when declaring a variable have different implications affecting
 * how the variable can be changed later. Var can be reassigned to a new value and is either function 
 * or globally scoped. Let and const are both block scoped but let can be reassigned whereas const 
 * cannot
 * 
 * 3: Hoisting can be seen as the interpreter changing the declaration of variables and functions
 * to the top of their scope, resulting in hoisted variables and functions being accessable but 
 * undefined anywhere in their scope. Variables declared using the var, let and const keywords will 
 * be hoisted, however variables declared with let and const cannot be accessed before declaration
 * so they may be treated as not being hoisted in most situations. 
 */

// 1a. declaration : 
//declares the variable name but does not assign it a value, undefined until assigned a value
var variable; //decalaration using var declarative keyword
console.log(variable) //logs undefined

// 1b. initalization : 
//assigns a value to a decalred variable
variable = 0; // assigns variable to 0
console.log(variable); //logs 0

// 1c. declaration and initalization : 
//variables can be declared and initalized in a single line
var variable = 'Hello World!'; //declared and assigned simultaneously
console.log(variable); // logs 'Hello World!'

// 1d. reassignment : 
//variables declared with var and let can be reassigned, overwriting the value assigned to the variable
variable = 'new data'; // overwrite 'Hello World' with 'new data'
console.log(variable); // logs 'new data'

// 2a. var declarative keyword : 
//variables using the var declarative keyword can be declared without initalization, reassigned, and are either function or globally scoped
var usedVar; // declared without initalization
console.log(usedVar); // logs undefined
usedVar = 'usedVar'; //initalized later
console.log(usedVar); // logs 'usedVar'
usedVar = 'reassigned'; // reassigned to a new string
console.log(usedVar); // logs 'reassigned'

function varFunc(){
    var insideFunctionVar = 0; //declared and initalized inside a function
    console.log(insideFunctionVar); //logs 0, can be accessed inside the function
}
varFunc();

//console.log(insideFunctionVar) // logs ReferenceError, since variables inside functions cannot be accessed outside of the function

for(var i = 0; i <= 5; i++){
    var insideForLoopVar = insideForLoopVar + 1 || 0 // declared and initalized inside a for loop code block, createing a global variable
    console.log(insideForLoopVar) // logs numbers 0 - 5, accessable in code block
}

console.log(insideForLoopVar) // logs 5, accessable outside code block

// 2b. let delcarative keyword : 
//variables using the let declarative keyword can be declared without initalization, reassinged and are block scoped
let usedLet; // declared without initalization
console.log(usedLet); // logs undefined
usedVar = 'usedLet'; //initalized later
console.log(usedLet); // logs 'usedLet'
usedLet = 'reassigned'; // reassigned to a new string
console.log(usedLet); // logs 'reassigned'

function letFunc(){
    let insideFunctionLet = 0; //declared and initalized inside a function
    console.log(insideFunctionLet); //logs 0, can be accessed inside the function
}
letFunc();

//console.log(insideFunctionLet) // logs ReferenceError, since variables inside functions cannot be accessed outside of the function

for(let insideForLoopLet = 0; insideForLoopLet <= 5; insideForLoopLet++){// declared and initalized inside a for loop code block, createing a block scoped variable
    console.log(insideForLoopLet) // logs numbers 0 - 5, accessable in code block
}

//console.log(insideForLoopLet) // logs ReferenceError, inaccessable outside code block

// 2c. const declariative keyword :
//variables using the const declarative keyword must be initialized when declared, cannot be reassinged and are block scoped
const usedConst = 'usedConst'; //initalized when declared
console.log(usedConst); // logs 'usedConst'
//usedConst = 'reassigned'; // attempting to reassign causes an error

function cosntFunc(){
    const insideFunctionConst = 0; //declared and initalized inside a function
    console.log(insideFunctionConst); //logs 0, can be accessed inside the function
}
letFunc();

//console.log(insideFunctionConst) // logs ReferenceError, since variables inside functions cannot be accessed outside of the function

for(let i = 0; i < 1; i++){// declared and initalized inside a for loop code block, createing a block scoped variable
    const insideLoopConst = 'Im inside a for loop'
    console.log(insideLoopConst) // logs 'Im inside a for loop', accessable in code block
}

//console.log(insideLoopConst) // logs ReferenceError, inaccessable outside code block

// 3a. Hoisted variables are undefined before initialization 
console.log(hoistedVariable)// logs undefined
var hoistedVariable = 'defined';// declared and intialized after console.log statement

// 3b. Hoisting only hoists to the top of the scope

console.log(insideVar);// logs an error since the variable is not hoisted out of the function just to the top of its scope

function foo(){
    console.log(insideVar); //logs undefined, accessable inside the function
    var insideVar = 'defined' // declared and intialized inside of the function after console.log statement
}