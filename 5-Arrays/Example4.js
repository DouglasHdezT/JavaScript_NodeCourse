/**
 * Filter; it's used to filter array items that fullfill a condition. Returns a new instance of Array.
 */

let books = [
    "Cien años de soledad",
    "Rayuela",
    "El padrino",
    "Simbolo perdido",
    "El Tunel",
    "El retrato de Dorian Grey"
]

const filterEBooks = () => {
    let ebooks = books.filter(element =>{
        return element.charAt(0) == "E";
    });

    console.log(ebooks);
    
}

filterEBooks();