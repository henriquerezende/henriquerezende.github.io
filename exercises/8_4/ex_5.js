const greetPeople = (people) => people.map( e => `Hello ${e}`)

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const assert = require('assert');

assert.strictEqual(typeof greetPeople, 'function');
assert.deepEqual(greetPeople(parameter), result);