/**
 * Window object
 */

//Globally declare
var variable1 = "Hello World!";
let variable2 = "¡Hola mundo!";

function showVariables(){
    console.log("-----Trying to show both variables-----");

    console.log(window.variable1);
    console.log(window.variable2);
}

showVariables();