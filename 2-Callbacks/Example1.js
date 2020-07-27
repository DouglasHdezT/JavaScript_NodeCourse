/**
 * Callbacks
 */

function runCallback(a, b, callback) {
	console.log(`A = ${a}`);
	console.log(`B = ${b}`);

	if (a > b) {
		console.log("A > B");
	} else { 
		console.log("A <= B");
	}
	
	callback(a + b);
}

console.log("--- Show time ---");
runCallback(5, 4, function (c) {
	console.log(`A + B = ${c}`);
	console.log(`sqrt(A + B) = ${Math.sqrt(c)}`);
});