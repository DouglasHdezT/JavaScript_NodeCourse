/**
 * Rest operator; It's used to declare that a functions is capable to receive n items of parameters, when we don't know 
 * the exact value of n. This parameters are casted to an instance of Array
 */

const sortNumbersAndList = (...numbers) => {
    numbers.sort();
    numbers.forEach((element, index) =>{
        console.log(`${index}: ${element}`);
    })
}

sortNumbersAndList(1, 3, 5, 6, 7, 2, 4);

let array = {name: ""};

for(let i = 0; i<5; i++){
    array = {name: "", ...array}
}

console.log(array);
