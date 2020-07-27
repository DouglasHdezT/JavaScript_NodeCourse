/**
 * Push, pop, unshift, shift
 */

let array1 = [9, 5, 6, 3];
let array2 = [1, 2, 3, 4, 5];

/**
 * Push and pop, adds and remove items at the end of the array respectively
 */

const manageArrayAtTheEnd = () => {
    console.log("Manage Array at end ");
    
    console.log("Pushing one element");
    
    array1.push(3);
    console.log(array1);
    
    console.log("Pushing several elements");

    array1.push(2,4,3,5,2);
    console.log(array1);

    console.log("Poping one element");

    console.log(array1.pop());
    console.log(array1);
}

/**
 * Shift and unshift adds and remove items at the begin of the array respectively
 */

const manageArrayAtTheBegin = () => {
    console.log("manage Array at the begin");
    
    console.log("Unshift one element");
    
    array2.unshift(4)
    console.log(array2);
    
    console.log("Unshifting several elements");

    array2.unshift(6,4,3,5,2);
    console.log(array2);

    console.log("shift one element");

    console.log(array2.shift());
    console.log(array2);
}

manageArrayAtTheEnd();
manageArrayAtTheBegin();