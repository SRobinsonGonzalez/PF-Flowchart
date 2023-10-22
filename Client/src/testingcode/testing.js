const counter = () => {
    let count = 0;
    return () => {
        return count++;
    }
}

let firstCount = counter()
console.log(firstCount)

// ------------------------------------------------

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// creo que era así jeje