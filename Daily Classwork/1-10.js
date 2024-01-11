let app = {};
// DO NOT REMOVE CODE ABOVE /////////////////////////

/////////////////////////////////////////////////////
////////////// BOOTCAMP WEEK 4 - DAY 3 //////////////
////////// forEach, map, filter Checkpoint///////////
/////////////////////////////////////////////////////

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
    gender: "non-binary",
    preexistingConditions: ["Symbiont"],
    allergies: ["Pencilin"]
  },
  {
    name: "Dee Reynolds",
    age: 44,
    gender: "female",
    preexistingConditions: ["Heart disease", "High blood pressure", "Alcoholism", "Drug addiction"],
    allergies: []
  }
];


/*
Directions: Use the native filter function to return a new array of only the patients that more than 2 preexisting conditions.
*/



/*
Directions: Use the native filter method to return a new array of only the patients who's first name begins with the letter 'A'.
*/

const startsWithA = patients.filter(patient => patient.name[0].toLowerCase() === 'a');
console.log(startsWithA);



/////////////////// PROBLEM #1 //////////////////////
/*
Directions: Use the native filter function to return an array of only patients that have no allergies.
 */

const noAllergies = patients.filter(patient => patient.allergies.length === 0);
console.log(noAllergies);


/////////////////// PROBLEM #2 //////////////////////
/*
Directions: Use the native map function to return a new array where each value is a string of the patients name, age, gender, and the first preexisting condition in their preexisting conditions array like so: 
// name - age - gender - Drug addiction
[
"Abe Froman - 56 - male - Heart Disease", 
"Kendall Roy - 40 - male - Depression", 
...
]
 */

const patientStrings = patients.map(patient => `${patient.name} - ${patient.age} - ${patient.gender} - ${patient.preexistingConditions[0]}`);
console.log(patientStrings);


/////////////////// PROBLEM #3 //////////////////////
/*
Directions: Use the native forEach function to add "Omicron exposure" to the preexistingConditions property for every patient.
 */



/////////////////// PROBLEM #4 //////////////////////
/*
Directions: Use the native higher order function filter to return an array of only patients who have "Drug addiction" as one of their pre-existing conditions.
**Hint: use the array.includes() method in your callback function
 */


const drugAddictionPatents = patients.filter(patient => patient['preexistingConditions'].includes('Drug addiction'));
console.log(drugAddictionPatents);



/////////////////// PROBLEM #5 //////////////////////
/*
Directions: Use the native filter function to return a new array only the patients who have no allergies AND high cholesterol.
 */


const noAllergiesAndHighColesterol = patients.filter(patient => patient['preexistingConditions'].includes('High cholesterol') && patient.allergies.length === 0);
console.log(noAllergiesAndHighColesterol);

/////////////////// PROBLEM #6 //////////////////////
/*
Directions: Use filter, map, and forEach to do the following -
 - return a new array of only the names of patients who have "High cholesterol" as one of their preexistingConditions and print the names of the patients to the console.
 */