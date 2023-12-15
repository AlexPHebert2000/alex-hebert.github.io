// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return object with specified key value pairs
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let contacts = [];
    
    return {
        //length(): returns the number of contacts within the list.
        length: function() {
            return contacts.length;
        },

        //addContact(contact): takes a contact object to be added to the contact-list.
        addContact: function(contact) {
            contacts.push(contact);
        },

        //takes a full-name String, like 'Max Gaudin', and  returns the contact object if found in the contacts-list, or, undefined if the fullName does not match any contacts in the list.
        findContact: function(fullName) {
            //itterate through contact array
            for(let contact of contacts){
                //grab first and last name in a formatted string
                let currentFullName = `${contact.nameFirst} ${contact.nameLast}`;
                //compare to input name
                if(currentFullName === fullName){
                    //return current object
                    return contact;
                }
            }
            //if not found return undefined
            return undefined;
        },

        //takes a contact object to be removed from the contact-list.
        removeContact: function(contact) {
            //save contact name
            const fullName = `${contact.nameFirst} ${contact.nameLast}`;
            //itterate through contact array
            for(let con of contacts){
                //if current contact name is the same as input contact name delete it
                if(fullName === `${con.nameFirst} ${con.nameLast}`){
                    contacts.splice(contacts.indexOf(con), 1)
                }
            }
        },
        /*
        The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
        */
        printAllContactNames: function() {
            //initialize a storage array
            let storageArr = [];
            //itterate through the contacts array
            for(let contact of contacts){
                //push formatted string to storage array
                storageArr.push(`${contact.nameFirst} ${contact.nameLast}`);
            }
            //log joined storage array
            return (storageArr.join('\n'));
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
