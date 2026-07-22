const numbers = [12, 4, 6, 18, 56];

function sumOfArray(array) {
    console.log(array);

    let sum = 0;

    for (const number of array) {
        console.log(number);
        sum = sum + number;
    }

    return sum;
}

const sum = sumOfArray(numbers);

console.log('Sum of array:', sum);