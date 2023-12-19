/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    //itterate trough animals
    for(let animal of animals){
        //if animal name = name
        if (animal.name === name){
            //return animal object
            return animal;
        }
    }
    //if never found return null
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    //itterate through animals
    for(let index = 0; index < animals.length; index++){
        //if animal name = name
        if(animal.name === name){
            //overwrite current index with replacement
            animals[index] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){

    //if animal in animals
    if(search(animals, name)){
        //splice it out of animals
        
        animals.splice(animals.indexOf(search(animals, name)), 1)
        console.log(`${animals}`);
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){

    //check that name and species are valid
    //both must be not empty strings
    //animal must not share a name with an animal already in the list
    if( animal.name.length > 0 && animal.species.length > 0 && !(search(animals, animal.name))){
        //add animal to animals list
            animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
