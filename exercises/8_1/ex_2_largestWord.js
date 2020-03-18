const largestWord = (string) => {
    let array = string.split(` `)
    let largest = array[0]
    array.forEach(element => {
        if (element.length > largest.length ) {
            largest = element;
        }
    });
    return largest;
}

console.log(largestWord('Olá mundo'))