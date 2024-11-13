function isPrime(num) {
    if ((num % 2 == 0 && num > 2) || num <= 1) return false;

    const s = Math.sqrt(num);
    for (let i = 3; i <= s; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}


function findPrimesInRange(start, end) {
    if (!Array.isArray(start) || start.length !== 2 || typeof start[0] !== 'number' || typeof start[1] !== 'number') {
        messageFormatter('Invalid input. Please provide a number or a valid range.(array of two numbers)')
        return;
    }

    let primes = [];
    for (let i = start[0]; i <= start[1]; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    messageFormatter(`Primes between ${start[0]} and ${start[1]}: [${primes.join(', ')}]`);
}

function messageFormatter(input) {
    console.log(input);
}

function checkPrimeNum(num) {
    if (isPrime(num)) {
        messageFormatter(`${num} is a prime number.`);
    } else {
        messageFormatter(`${num} is NOT a prime number.`);
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====
checkPrimeNum(2); // Expected Output: 2 is a prime number.
checkPrimeNum(1); // Expected Output: 1 is NOT a prime number.
checkPrimeNum(13); // Expected Output: 13 is a prime number.
checkPrimeNum(25); // Expected Output: 25 is NOT a prime number.
findPrimesInRange([10, 20]); // Expected Output: Primes between 10 and 20: [11, 13, 17, 19]
findPrimesInRange([30, 50]); // Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]
findPrimesInRange('test'); // Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).