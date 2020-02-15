'use-strict'

/**
 * Sintax variations
 */

//No parameters
const af1 = () => {
    console.log("I don't recieved any parameter");
}

//One parameter
const af2 = name => {
    console.log("I recieved this name: " + name);
}

//Many parameters
const af3 = (name, age, gender) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Gender: ${gender}`);
}

//Return values
const af4 = (a, b) => {
    let result = a + b;

    return result;
}

//Single expresion
const af5 = (a, b) => a + b;

console.log("-----> af1()");
af1();
console.log("-----> af2()");
af2("Douglas");
console.log("-----> af3()");
af3("Pedro", 22, "Male");
console.log("-----> af4()");
console.log(af4(3 ,4));
console.log("-----> af5()");
console.log(af5(3 ,4));