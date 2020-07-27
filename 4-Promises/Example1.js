/** 
 * Promises
*/

const isMommyHappy = (daddyReturn = false) => { 
	return new Promise((resolve, reject) => {
		if (daddyReturn) {
			resolve({
				isHappy: true,
				reason: "Papá regresó con los cigarros"
			});
		} else {
			reject(new Error("Nunca regresó :c"));
		}
	});
}

isMommyHappy(true)
	.then(state => { 
		console.log(state);
	})
	.catch(err => { 
		console.log(err.message)
	});

isMommyHappy(false)
	.then(state => { 
		console.log(state);
	})
	.catch(err => { 
		console.log(err.message)
	});

isMommyHappy()
	.then(state => { 
		console.log(state);
	})
	.catch(err => { 
		console.log(err.message)
	});