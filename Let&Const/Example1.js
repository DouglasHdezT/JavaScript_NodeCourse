'use-strict'

/**
 * Scope Rules
 */

function showVarScope(){
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

function showLetScope(){
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

function showPractcalScope(){
    console.log("-----Showing a practical example-----");

    var a = 10;
    var b = 3

    console.log("Before if");
    console.log("a  = " + a);
    console.log("b  = " + b);

    if(a == 10){
        console.log("Inside if");

        let a = 6;
        var b = 10;

        console.log("a  = " + a);
        console.log("b  = " + b);
    }

    console.log("Outside if");
    console.log("a  = " + a);
    console.log("b  = " + b);
}


