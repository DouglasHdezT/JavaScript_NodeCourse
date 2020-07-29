/**
 * Scope
 */

function showVarScope() { 
	var number1 = 1997;

	if (true) {
		var number1 = 2020;
		console.log("Inside If: " + number1);
	}

	console.log("Outside If: " + number1);
}

function showLetScope() { 
	let number1 = 1997;

	if (true) {
		let number1 = 2020;
		console.log("Inside If: " + number1);
	}

	console.log("Outside If: " + number1);
}

console.log("Calling Var Scope");
showVarScope();

console.log("Calling Let Scope");
showLetScope();