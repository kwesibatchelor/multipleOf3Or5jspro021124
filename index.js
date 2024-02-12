function sumMultipleOf3Or5(limit) {
    let sum = 0;

    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

// Get the sum of multiples below 1000
const result = sumMultipleOf3Or5(1000);
console.log(result);