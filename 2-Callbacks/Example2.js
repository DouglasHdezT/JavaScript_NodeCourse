/**
 * Asynchronous flow control
 */

function getAllRowsWCallback(millis, onDone) { 
	const resultSet = [1, 3, 6, 5, 7];

	//SetTimeout represents any DB process or Async process	
	setTimeout(function () {
		console.log(`I finished after ${millis} milliseconds`);
		onDone(resultSet);
	}, millis);
}

console.log("--- Running ---");
getAllRowsWCallback(1000, function (allRows) { 
	console.log("Result array:");
	console.log(allRows);
});
console.log("Other things to do");