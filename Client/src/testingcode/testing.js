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

const bubbleSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let numMax = array[j];
                array[j] = array[j + 1];
                array[j + 1] = numMax;
            }
        }
    }

    return array;
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

const newValue = 0;

newValue = 1;