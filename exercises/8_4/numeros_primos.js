
const cPrimos = (n) => {
    if ( n < 1) return [];
    if ( n === 1 ) return [1];
    if ( n === 2) return [1, 2];
    let asw = [1, 2];
    for (c = 3; c <= n; c++) {
        let ePrimo = true;
        if ( (c % 2) != 0) {
            for (let cont = 3; cont < c / 2 && ePrimo; cont += 2) {
                if (c % cont == 0) {
                    ePrimo = false;
                }
            }
            if (ePrimo === true) asw.push(c);
        }
    }
    return asw;
}

const assert = require('assert');

assert.strictEqual(typeof cPrimos, 'function');
assert.deepEqual( cPrimos(-13), []);
assert.deepEqual( cPrimos(0), []);
assert.deepEqual( cPrimos(1), [ 1 ]);
assert.deepEqual( cPrimos(2), [ 1, 2 ]);
assert.deepEqual( cPrimos(50), [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);