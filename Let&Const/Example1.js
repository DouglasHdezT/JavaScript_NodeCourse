'use-strict'
/**
 * Scope Rules
 */

let showVarScope = () => {
    console.log("-----Showing var scope-----")
    
    var number1 = 1997;

    if(true){
        var number1 = 2020;
        console.log("Inside if: " + number1); 
    }

    console.log("Outside if: " + number1);

    /**
     * They are the same variable
     */
}

let showLetScope = () => {
    console.log("-----Showing let scope-----")
    
    let number1 = 1997;

    if(true){
        let number1 = 2020;
        console.log("Inside if: " + number1); 
    }

    console.log("Outside if: " + number1);

    /**
     * They are diferent variables
     */
}


