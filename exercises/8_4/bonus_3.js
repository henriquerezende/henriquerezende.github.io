const getLargestNumber = (array) => {
    let results = [];
    array.sort(function (x, y) {
        return x < y;
    });
    results = array[0];
    return results;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const assert = require('assert');

assert.strictEqual(typeof getLargestNumber, 'function');
assert.deepEqual(getLargestNumber(parameter), result);