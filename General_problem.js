let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    let N = contacts.length;
    if (!isNameExist(contacts,name)) {
        return 'No such contact found!!!';
    } else if (!isPropExist(contacts, prop, name)) {
        return 'No such property found !!!';
    }

    for (let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
    }
    
}
function isNameExist(obj, name) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].firstName == name) {
            return true;
        }
    }
    return false;
}
function isPropExist(obj, prop, name) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].firstName == name && obj[i].hasOwnProperty(prop)) {
            return true;
        }
    }
    return false;
}
console.log(lookUpProfile('Kristian', 'likes'));
console.log('This file is not got added');