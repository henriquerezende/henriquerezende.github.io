
const romanToDec = (string) => {
    const symbols = string => {
        const symbols = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        }
        return symbols[string];
    }
    let array = [];
    let soma = 0;
    for (Letra of string) {
        array.push(symbols(Letra));
    }
    for ( i in array ) {
        if (array[parseInt(i) + 1] > array[i]) {
            soma -= array[i];
        } else {
            soma += array[i];
        }
    }
    return soma;
}

function decToRoman(number) {
    const symbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let result = '';
    while (number !== 0) {
        for (i in symbols) {
            if (number >= symbols[i]) {
                result = `${result}${i}`;
                number = number - symbols[i];
                break;
            }
        }
    }
    return result;
}

console.log(romanToDec("LXXXIV"));
console.log(decToRoman(84));
console.log(romanToDec(decToRoman(96)));
console.log(decToRoman(romanToDec("XCVI")));