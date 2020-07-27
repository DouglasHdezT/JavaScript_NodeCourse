/**
 * Mixing up types
 */

const cpu = {
    cores: 6,
    baseSpeed: 2.33,
}

const date = new Date();

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

//export default cpu;
//export {date, add, sub};

export {
    cpu as default,
    date,
    add,
    sub
}