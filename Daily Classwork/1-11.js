///////////////// BOOTCAMP WEEK 4 - DAY 4 ////////////////////
//////////////////////// REDUCE //////////////////////////////

const patients = [
    {
      name: "Abe Froman",
      age: 56,
      gender: "male",
      preexistingConditions: ["Heart disease", "High cholesterol"],
      allergies: []
    },
    {
      name: "Kendall Roy",
      age: 40,
      gender: "male",
      preexistingConditions: ["Depression", "Drug addiction"],
      allergies: ["Peanuts", "Penicilin"]
    },
    {
      name: "Leslie Knope",
      age: 45,
      gender: "female",
      preexistingConditions: ["High blood pressure", "High cholesterol"],
      allergies: [],
    },
    {
      name: "Adira",
      age: 18,
      gender: "non binary",
      preexistingConditions: ["Symbiont"],
      allergies: ["Penicilin"]
    },
    {
      name: "Dee Reynolds",
      age: 44,
      gender: "female",
      preexistingConditions: ["Heart disease", "High blood pressure", "Alcoholism", "Drug addiction"],
      allergies: []
    }
  ];
  
  
  
  /////////////////////// PROBLEM #1 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return the number of patients who are over 40.
   */
  
  let over40 = patients.reduce((acc, cur) => acc + (cur.age > 40 ? 1 : 0), 0);
  console.log(`There are ${over40} patients over 40.`)
  /////////////////////// PROBLEM #2 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return the number of patients who are allergic to penicilin.
  **Hint: implement the includes() method
   */
  
  
  let penicilin = patients.reduce((acc, cur) => acc + (cur.allergies.includes('Penicilin') ? 1 : 0), 0);
  console.log(`There are ${penicilin} patients allergic to penicilin.`)
  
  /////////////////////// PROBLEM #3 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return a string listing patients with a line break.
  - example output: 
  "Abe Froman\nKendall Roy\nLeslie Knope\nAdira\nDee Reynolds\n"
  
  "Abe Froman
  Kendall Roy
  Leslie Knope
  Adira
  Dee Reynolds"
   */
  
  let names = patients.reduce((acc, cur) => acc += cur.name + '\n', "");
  console.log(names)
  
  
  /////////////////////// PROBLEM #4 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return an array of patient objects who are 40 or older and have high blood pressure.
   */
  
  
//   let array;
  
  
  
//   function reduce(array, func, seed){
//     let result;
//     if (seed === undefined){
//       result = array[0];
//       for (let i = 1; i < array.length; i++){
//         result = func(result, array[i], i, array);
//       }
//     } else {
//       result = seed; 
//       for (let i = 0; i < array.length; i++){
//         result = func(result, array[i], i, array);
//       }
//     }
//     return result;
//   }
  
  
  
  /////////////////////// PROBLEM #5 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return an object where each key is a gender and the value at each key is an array of the names corresponding to gender.
  - example output:
  {
    male: ["Abe Froman", "Kendall Roy"],
    female: ["Leslie Knope", "Dee Reynolds"],
    non-binary: ["Adira"]
  }
   */
  
  
  
  /////////////////////// PROBLEM #6 ///////////////////////////
  /*
  Directions: Use the native version of reduce to return an object where each key is a preexisting condition and the value is the number of patients who have this condition.
  
  {
    "Heart disease": 2,
    "Drug addiction": 2,
    ...etc.
  }
  */

  const preexistingConditions = patients.reduce((acc, cur) => {
    for(let element of cur.preexistingConditions){
        if(!Object.keys(acc).includes(element)){
            acc[element] = 0
        }
        acc[element] ++;
    }
    return acc;
  }, {})
  
  console.log(preexistingConditions)