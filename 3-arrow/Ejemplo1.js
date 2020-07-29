/**
 * Sintaxis
 */

function noArrow() {
	console.log("No arrow :c");
}

const arrow = (cb) => {
	console.log("Arrow :3");
	cb();
}

noArrow();
arrow(() => {
	console.log("Arrow cb :v");
 });