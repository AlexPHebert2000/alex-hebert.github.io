
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(n) {
  //intialize base string
  let str = "#";
  //itterate to n
  for(let i = 1; i <= n; i++){
    //log str
    console.log(str);
    //add # to str
    str += "#"
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //itterate from 1 to 100
  for(let i = 1; i <= 15; i++){
    //initialize output string
    let str = "";
    //if i is divisable by 3 add fizz to output string
    if(i % 3 === 0){
        str += 'fizz';
    }
    //if i is divisable by 5 add buzz to output string
    if(i % 5 === 0){
        str += 'buzz';
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
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//draws a chess board of "#" and " " in a x by x square to the console
function drawChessboard(x) {
  //intialize empty strings
  let strOdd = "", strEven = "", board = ""
  //*Create odd row string
  //itterate to x
  for(let i = 1; i <= x; i++){
    //if odd add " " to strOdd
    if(i % 2 !== 0){strOdd += ' ';}
    //if even add "#" to strOdd
    else{strOdd += "#";}
  }
  //add newline to end of strOdd
  strOdd += '\n';
  //*Create even row string
  //itterate to x
  for(let i = 1; i <= x; i++){
    //if odd add " " to strOdd
    if(i % 2 !== 0){strEven += '#';}
    //if even add "#" to strOdd
    else{strEven += " ";}
  }
  //add newline to strEven
  strEven+= '\n'
  //*Populate board
  //itterate to x
  for(let i = 1; i <= x; i++){
    //if odd add strOdd to board 
    if(i % 2 === 1){board += strOdd;}
    //if even add strEven to board
    else{board += strEven;}
  }
  //log board
  console.log(board)
}
drawChessboard(9)
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
