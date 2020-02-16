/**
 * Spread operator (...); it's used to list items inside of an Array or list attributes inside of an object; 
 * This list can be used to complement a new array or object, copying this elements and adding the new ones declared.
 */

const spreadArray = () => {
    let oldArray = [9, 8 ,7];
    let newArrayWithoutSpread = [oldArray, 6, 5, 4, 3];
    let newArrayWithSpread = [...oldArray, 6, 5, 4, 3];

    console.log("Without spread:");
    console.log(newArrayWithoutSpread);

    console.log("With spread:");
    console.log(newArrayWithSpread);
}

const spreadObject = () => {
    const originalPerson = {
        name: "Douglas",
        lastname: "Hernández"
    }

    const newPersonWithoutSpread = {
        originalPerson,
        age: 22,
        gender: "Male"
    }

    const newPersonWithSpread = {
        ...originalPerson,
        age: 22,
        gender: "Male"
    }

    console.log("Without spread:");
    console.log(newPersonWithoutSpread);

    console.log("With spread:");
    console.log(newPersonWithSpread);
    
}

console.log("Arrays");
spreadArray();

console.log("Objects");
spreadObject();