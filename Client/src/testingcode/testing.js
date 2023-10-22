const counter = () => {
    let count = 0;
    return () => {
        return count++;
    }
}

let firstCount = counter()
console.log(firstCount);