/**
 * Importing from diferent resources
 */

import cpu from "./Data1"; 
import computerSpecs from "./Data1"; //Both are the same

import {add, sub} from "./Data2";
import {date} from "./Data2";

if(computerSpecs.cores == cpu.cores){
    console.log("They are the same");
}

console.log(add(3, 3));
console.log(sub(3, 3));

console.log(date.toString());