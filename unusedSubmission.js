const getPrimeFactorsWrong = arr => {
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

-Use double for loop. A prime number is an integer where the only factors are 1 and itself
-Create new empty array for prime numbers
-Iterate through the parameter array
-For each element, determine if the number is prime using the % (modulus/remainder) operator as such: Loop such that a variable (lets call i) increments from 2 (inclusive) to the element (exclusive), and if (element % i === 0) ever occurs during the loop, you do not have a prime number, so go onto next element without adding it to the new array. (Hence this is a double loop)
    -Special cases: Skip non-Whole Numbers immediately (the instructions does not specify that all numbers will be whole numbers). Also if number = 0 or 1, skip it immediately. 
-Add success cases of prime numbers to the new array. In Javascript use array.push(number)
-Run a sorting algorithm on the array to sort in ascending order. In Javascript, use primeNumArr.sort((a, b) => a - b)
