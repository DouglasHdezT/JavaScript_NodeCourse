/**
 * For each; it's used to go through an array; you can know every item with its position in every iteration
 */

let array = [1, 9, 8, 2, 7, 3, 6 ,4, 5];

const oddEven = () =>{

    array.forEach(element => {

        element % 2 == 0 ? console.log("Even"): console.log("Odd");

    });

}

const listAllElements = () => {

    array.forEach((element, index) => {
        
        console.log(`${index}: ${element}`);
    
    });

}

oddEven();
listAllElements();