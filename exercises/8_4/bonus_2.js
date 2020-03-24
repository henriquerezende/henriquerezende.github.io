const assert = require('assert');

const removeMiddle = (arr) => {
    if ( arr.length % 2 !== 0) {
        let asw = arr[Math.trunc(arr.length/2)];
        arr.splice (Math.trunc(arr.length/2) , 1)
        return [asw];
    }
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
