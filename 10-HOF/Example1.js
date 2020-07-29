const myPow = num => { 
	return exp => {
		return Math.pow(num, exp);
	}
}

console.log(`2^2: ${myPow(2)(2)}`);
console.log(`6^2: ${myPow(6)(2)}`);
console.log(`3^4: ${myPow(3)(4)}`);
console.log(`5^8: ${myPow(5)(8)}`);