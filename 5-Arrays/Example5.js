/**
 * Map; Apply a function to every item in an array, returning a new array with the items modified; Returns a new instance of Array
 */

let numbers = [1, 2, 3, 4, 5];
let people = [
    {name: "Douglas", lastname: "Hernandez"},
    {name: "Pedro", lastname: "Gomez"},
] 

const arrayTimesX = x => {
    let newArray = numbers.map(element => {
        return element * x;
    });

    console.log(newArray);
}

const listFullnames = () => {
    let fullnames = people.map(element => {
        let fullname = `${element.name} ${element.lastname}`;
        return fullname;
    });

    console.log(fullnames);
    
}

arrayTimesX(2);
arrayTimesX(3);
arrayTimesX(4);
arrayTimesX(5);

listFullnames();