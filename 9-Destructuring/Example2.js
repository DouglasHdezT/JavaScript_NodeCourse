const powNum = num => { 
	const resultArray = [];

	resultArray[0] = num * num;
	resultArray[1] = value => { 
		return Math.pow(num, value);
	}

	return resultArray;
}

const [numSquared, powFun] = powNum(2);
console.log(`2^2: ${numSquared}`);
console.log(`2^3: ${powFun(3)}`);
console.log(`2^4: ${powFun(4)}`);
console.log(`2^5: ${powFun(5)}`);
console.log(`2^6: ${powFun(6)}`);
