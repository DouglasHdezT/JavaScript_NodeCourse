/**
 * It is an expression that makes it possible to extract data, both from arrays and object properties, in different variables.
 */

 //Reusing the example to list all fullnames
let people = [
    {name: "Douglas", lastname: "Hernandez", gender: "Male", age: 22},
    {name: "Pedro", lastname: "Gomez", gender: "Male", age: 22},
] 

const listFullnames = () => {
    let fullnames = people.map(element => {
        //It pulls out only name and lastname, and assign them to both variables
        let {name, lastname} = element;

        let fullname = `${name} ${lastname}`;
        return fullname;
    });

    console.log(fullnames);
    
}

listFullnames();