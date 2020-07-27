/**
 * Concat, slice and splice
 */

let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

/**
 * Concat join two arrays, and return a new instace of Array with the result. Dont alter both originals arrays
 */

const concatArrays = () => {
    let array3 = array1.concat(array2);
    console.log(array3);
}

/**
 * Slice return a copy of part of an array in a new instace of Array. Dont alter original array.
 */

const sliceArrays = () => {
    //The begin position is included, and the end position is excluded
    let arraySliced = array1.slice(0, 2);
    console.log(arraySliced);
}

/**
 * Splice returns a part of an array, deleting it from the original array.
 */

const spliceArrays = () => {
    //The begin position is included, and the end position is excluded
    let arraySpliced = array1.splice(0, 2);
    console.log(`Subarray: ${arraySpliced}`);
    console.log(`New array: ${array1}`);
    
}

concatArrays();
sliceArrays();
spliceArrays();