/**
 * Reduce; It reduce the complete array into a single result; it use every element in a formula and the result is joined with an acumulator.
 * Returns the acumulator
 */

let books = [
    "Cien años de soledad",
    "Rayuela",
    "El padrino",
    "Simbolo perdido",
    "El Tunel",
    "El retrato de Dorian Grey"
]

let numbers = [1, 2, 3, 4, 5];

let addAllNumbers = () => {
    let acumulator = numbers.reduce ((curResult, element) => {
        return curResult + element;
    },0)

    console.log(acumulator);
}

let subAllNumbers = () => {
    let acumulator = numbers.reduce ((curResult, element) => {
        return curResult - element;
    });

    console.log(acumulator);
}

let showBookshelf = () => {
    let myBookshelf = books.reduce((result, book) =>{
        return result + `${book}, `;
    }, "My Bookshelf is: ");

    myBookshelf = myBookshelf.slice(0, -1);
    console.log(myBookshelf);
    
}

addAllNumbers(); 
subAllNumbers();
showBookshelf();