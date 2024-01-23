/**
 * CONTROL FLOW
 * 
 * 0. Control flow refers to controling what code is executing by testing conditions
 * 
 * 1. The 3 statements used in controlflow are if, else and switch
 * 
 */
//1a. if : checks if an expression is truthy and runs the following code block and skips over it otherwise. 
if(true){//code block executes because test expression is truthy
    console.log('logged because true')//logs logged because true
}
if(false){//code block doesn't execute because test expression is falsy
    console.log('not logged because false')//not logged
}

//1b. else : used following an if statement, executes code block if the preceding if statement did not, otherwise is skipped over
if(true){console.log('Dont run else')}//logs Dont run else
else{console.log('not logged')}//not logged since previous if statement executed

if(false){console.log('Run else')}//not logged
else{console.log('logged')}//logs logged since previous if statement did not execute

//1c. else if : used following an if statement, adds a condition to an else statement. The test expression will only be tested if the 
//              previous if statement did not run and the following code block will only execute if the test expression is truthy
if(false){console.log('falsy')}//not logged
else if(false){console.log('also falsy')}//tested since the previous if statement did not run but not executed since test expression is falsy
else if(true){console.log('logged')}//tested since previous if statement did not run and logged since test expression is truthy
else if(true){console.log('truthy but not logged')}//skipped since previous if statement executed

//2 switch statement : evaluates an expression and compares the result to a set of cases
const color = 'orange';
switch(color){
    case 'red': console.log('apple'); break; //does not log since the variable color does not equal 'red'
    case 'orange': console.log('carrot'); break// logs carrot since the variable color does equal red
}