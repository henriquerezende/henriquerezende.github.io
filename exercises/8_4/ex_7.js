const greaterThanTen = (array) => array.filter(e => e > 10);

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const assert = require('assert');

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepEqual(greaterThanTen(parameter), result);