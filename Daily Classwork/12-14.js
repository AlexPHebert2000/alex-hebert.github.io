function addKeyValue(arr, key, value){
    //itterate through array
    for(let obj of arr){
        //add key value pair to object
        obj[key] = value;
}
}

let contacts = [
    {nameFirst: 'Alex', nameLast: 'Hebert', age: 23},
    {nameFirst: 'Tom', nameLast: 'Bombadil', age: 24}
];

const findContact = function(fullName) {
    //itterate through contact array
    for(let contact of contacts){
        //grab first and last name in a formatted string
        let currentFullName = `${contact.nameFirst} ${contact.nameLast}`;
        console.log(currentFullName)
        //compare to input name
        if(currentFullName === fullName){
            //return current object
            return contact;
        }
    }
    //if not found return undefined
    return undefined;
}
console.log(findContact('Alex Hebert'))


