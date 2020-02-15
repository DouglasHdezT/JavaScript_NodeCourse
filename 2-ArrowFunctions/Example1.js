'use-strict'

/**
 * Sintaxis
 */

function noArrowFunction(){
    console.log("This isn't an arrow function");
}

const arrowFunction = () => {
    console.log("This is an arrow function");
}

console.log("--------> noArrowFunction()");
noArrowFunction();
console.log("--------> arrowFunction()");
arrowFunction();