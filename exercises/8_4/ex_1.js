const assert = require('assert');

const addOne = (arr) => {
    let asw = [];
    arr.forEach(e => { asw.push((parseInt(e) + 1)); })
    return asw;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);