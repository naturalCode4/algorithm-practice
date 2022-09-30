/* 

Using pseudocode, write a function that takes an array of numbers and finds all prime numbers from that array and returns them in a sorted array. Avoid using math libraries to determine whether the number is prime.

-Use double for loop. A prime number is an integer where the only factors are 1 and itself
-Create new empty array for prime numbers
-Iterate through the parameter array
-For each element, determine if the number is prime using the % (modulus/remainder) operator as such: Loop such that a variable (lets call i) increments from 2 (inclusive) to the element (exclusive), and if (element % i === 0) ever occurs during the loop, you do not have a prime number, so go onto next element without adding it to the new array. (Hence this is a double loop)
    -Special cases: Skip non-Whole Numbers immediately (the instructions does not specify that all numbers will be whole numbers). Also if number = 0 or 1, skip it immediately. 
-Add success cases of prime numbers to the new array. In Javascript use array.push(number)
-Run a sorting algorithm on the array to sort in ascending order. In Javascript, use primeNumArr.sort((a, b) => a - b)

Write a second function using pseudocode that takes an array of numbers and returns an array of arrays of prime factors for each number.

-A prime factor is both prime and the number is divisible (evenly, i.e. without remainder) by it.
-Create an empty array for arrays of prime factors
-Create a new array for each element's array of prime factors
-Iterate through the parameter array
-For each element
    -create a new array that will hold that element's prime factors
    -Special cases: Skip non-Whole Numbers immediately (the instructions does not specify that all numbers will be whole numbers). Also, if number = 0 or 1, skip it immediately. 
    -if the element is not a whole number or is 1, add the empty array to the array of arrays and skip onto the next element
    -create another loop where a variable (lets call i) increments from 2 (inclusive) to the element (exclusive)
    -if the (element % i === 0), i is a factor of the element, so go on to see that the number is prime
    -Loop through incrementing a variable (let's call j) from 2 (inclusive) to the element (exclusive). Test that the element % j is not 0 for all values of j. If it passes this, it is a prime factor, so add it to the array of the element's prime factors.
    -Add the array of an element's prime factors to the array of arrays
-(Post iteration through all elements) Return the array of arrays of prime factors

*/

// DECLARE an empty array
// FOR each element in the array
//     INITIALIZE a variable to true
//     IF element less than or equal to 1
//         SET the variable to false
//         CONTINUE to next element
//     FOR i = 2 to element (exclusive)
//         IF element divided by i has remainder 0
//             SET the variable to false
//             ENDFOR
//     IF variable is true
//         ADD element to array
// RETURN the array


const getPrimeNumbers = arr => {
    let primeArr = []
    arr.forEach((element, index) => {
        let isPrime = true
        if (element <= 1) {
            isPrime = false
            return
        }
        for (let i=2; i<element; i++) {
            if (element % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {primeArr.push(element)}
    })
    return primeArr
}


console.log(getPrimeNumbers([1,2,3,4,5,2,1,30,17,6,7,8,9,10]))

const getPrimeFactors = arr => {
    let primeFactorsArr = []
    arr.forEach((element, index) => {
        let elementPrimeFactArr = []
        for (let i=2; i<=element; i++) {
            let isFactor = false
            let isPrime = true
            if (element % i === 0) {
                isFactor = true
            }
            for (let j=2; j<i; j++) {
                console.log('hit1', 'i:', i, 'j:', j)
                if (i % j === 0) {
                    console.log('hit2')
                    isPrime = false
                    break
                }
            }
            if (isPrime && isFactor) {
                elementPrimeFactArr.push(i)
            }
        }
        primeFactorsArr.push(elementPrimeFactArr)
    })
    return primeFactorsArr
}

const getPrimeFactors2 = arr => {
    let primeFactorsArr = []
    arr.forEach((element, index) => {
        let elementPrimeFactArr = []
        for (let i=2; i<=element; i++) {
            let isFactor = false
            let isPrime = true
            if (element % i === 0) {
                isFactor = true
            }
            for (let j=2; j<i; j++) {
                console.log('hit1', 'i:', i, 'j:', j)
                if (i % j === 0) {
                    console.log('hit2')
                    isPrime = false
                    break
                }
            }
            if (isPrime && isFactor) {
                elementPrimeFactArr.push(i)
            }
        }
        primeFactorsArr.push(elementPrimeFactArr)
    })
    return primeFactorsArr
}

// console.log(getPrimeFactors([2, 10, 50, 5000]))
console.log(getPrimeFactors2([2, 10, 50, 5000]))

