/**
 * Importing resources from the same file
 * with defult value
 */

import cpu from "./Data3";
import {add, sub} from "./Data3";
import {date} from "./Data3";

console.log(cpu);

console.log(add(3, 3));
console.log(sub(3, 3));

console.log(date.toString());