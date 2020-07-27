'use-strict'

/**
 * Await call
 */

const sqrAfterYSeconds = (x, y) => {
    return new Promise(resolve => {
      setTimeout(() => {
        let result = x * x;
        resolve(result);
      }, y);
    });
  }
  
  
async function delayedPow1(x) {
    let time = 0;  

    const interval = setInterval(() => console.log(`1: ${++time}`)
    , 1000);


    const a = await sqrAfterYSeconds(20, 2000);
    const b = await sqrAfterYSeconds(30, 5000);

    clearInterval(interval);
    return x + a + b;
}

async function delayedPow2(x) {
    let time = 0;  

    const interval = setInterval(() => console.log(`2: ${++time}`)
    , 1000);


    const a = sqrAfterYSeconds(20, 2000);
    const b = sqrAfterYSeconds(30, 5000);

    let result = x + await a + await b;

    clearInterval(interval);
    return result;
}

delayedPow2(10).then(v => {
    console.log(v); 
});

/* delayedPow2(10).then(v => {
    console.log(v); 
}); */