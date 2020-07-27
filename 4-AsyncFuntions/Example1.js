/**
 * Asyncronus call
 */

const asyncCall = async () => {
    let value = 5;
    
    setTimeout(() => {
        value += value;
        console.log(`Result: ${value}`);
    }, 2000);
}

console.log("Calling function");
asyncCall();
console.log("Message after calling");

