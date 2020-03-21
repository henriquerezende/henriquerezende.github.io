const assert = require('assert');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

assert.equal(typeof (sum), 'function', 'Sum is not a function');
assert.equal(sum(4, 5), 9, `Expected result of sum(4, 5) to be '9' but found '${sum(4, 5)}'`);
assert.equal(sum(4, 5), 9, `Expected result of sum(0, 0) to be '0' but found '${sum(0, 0)}'`);

function myIndexOf(arr, item) {
    let searchedIndex = -1;
    for (let i = 0; i < arr.length; i += 1) {
        if (item === arr[i]) {
            searchedIndex = i;
        }
    }
    return searchedIndex;
}

assert.equal(typeof (myIndexOf), 'function', 'myIndexOf is not a function');
assert.equal(myIndexOf([1, 2, 3, 4], 3), 2, `Expected result of myIndexOf([1, 2, 3, 4], 3) to be '2' but found '${myIndexOf([1, 2, 3, 4], 3)}'`);
assert.equal(myIndexOf([1, 2, 3, 4], 5), -1, `Expected result of myIndexOf([1, 2, 3, 4], 5) to be '-1' but found '${myIndexOf([1, 2, 3, 4], 5)}'`);

function mySum(arr) {
    let result = 0;
    for (let item in arr) {
        result += arr[item];
    }
    return result;
}

assert.equal(typeof (mySum), 'function', 'mySum is not a function');
assert.equal(mySum([1, 2, 3, 4]), 10, `Expected result of mySum([1, 2, 3, 4]) to be '10' but found '${mySum([1, 2, 3, 4])}'`);
assert.equal(mySum([1, -2, -3, 4]), 0, `Expected result of mySum([1, -2, -3, 4]) to be '0' but found '${mySum([1, -2, -3, 4])}'`);

function myRemove(arr, item) {
    let arrTest = arr;
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    if (arrTest !== arr) {
        throw new Error('arr value was changed');
    }
    return newArr;
}

assert.equal(typeof (myRemove), 'function', 'myRemove is not a function');
assert.equal(myRemove([1, 2, 3, 4], 3), '1,2,4', `Expected result of myRemove([1, 2, 3, 4], 3) to be '1,2,4' but found '${myRemove([1, 2, 3, 4], 3)}'`);
assert.notEqual(myRemove([1, 2, 3, 4], 3), '1,2,3,4', `Expected result of myRemove([1, 2, 3, 4], 3) to be different of '1,2,3,4'`);
assert.equal(myRemove([1, 2, 3, 4], 5), '1,2,3,4', `Expected result of myRemove([1, 2, 3, 4], 3) to be '1,2,3,4' but found '${myRemove([1, 2, 3, 4], 5)}'`);

const thereIs = '';

assert.notEqual(thereIs, 'undefined', `'thereIs is not defined`)

function thereIs2() { }

assert.notEqual(thereIs2(), 'undefined', `'thereIs2 is not defined`)
assert.equal(typeof (thereIs2), 'function', 'thereIs2 is not a function');

function change(param) {
    return !param;
}

assert.equal(change(true), false, `Expected result of change(true) to be 'false' but found '${change(true)}'`)



const obj1 = {
    title: 'My Title',
    description: 'My Description',
};

const obj2 = {
    description: 'My Description',
    title: 'My Title',
};

const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
};

assert.deepEqual(obj1, obj2, `Expected 'obj1' to be equal to 'obj2'`)

function isAbove(num1, num2) {
    return num1 > num2;
}

assert.ok(isAbove(3, 2) == true, `Expected result of isAbove(3, 2) to be 'true' but result was '${isAbove(3, 2)}'`)