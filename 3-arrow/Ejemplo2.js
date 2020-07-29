/**
 * Variaciones
 */

const af1 = () => { 
	console.log("No parameters");
}

const af2 = name => { 
	console.log(`name = ${name}`);
}

const af3 = (name, age) => { 
	console.log(`name ${name}`);
	console.log(`age ${age}`);
}

/**
 * Retornar valores
 */

const af4 = (a, b) => { 
	const result = a + b;
	//Procesos
	return result;
}

const af5 = (a, b) => a + b; 

af1();
console.log("------");
af2("Douglas");
console.log("------");
af3("Douglas", 22);
console.log("------");
console.log(af4(3, 4));
console.log("------");
console.log(af5(3, 4));