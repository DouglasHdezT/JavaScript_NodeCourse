function showConstUsage() { 
	const a = 4;
	let b = 3;

	console.log("a = " + a);
	console.log("b = " + b);

	//Codigo, procesos 
	b += 5;
	a += 5;

	console.log("a = " + a);
	console.log("b = " + b);
}

showConstUsage();