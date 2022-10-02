
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Challenge 1. Using pseudocode, write a function that takes an array of numbers and finds all prime numbers from that array and returns them in a sorted array. Avoid using math libraries to determine whether the number is prime. //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
FUNCTION takes array as argument
    DECLARE an empty array
    FOR each element in the array
        IF element is less than or equal to 1
            CONTINUE to next element
        ENDIF
        INITIALIZE a variable to true // variable corresponds to whether the element IsPrime
        FOR i = 2 to element (exclusive)
            IF element is evenly divisable by i // i.e. some number between i and element is a factor, so IsPrime is false
                SET the variable to false
                EXIT the for loop
        ENDFOR
        IF variable is true
            ADD element to array
        ENDIF
    ENDFOR
    OUTPUT the array sorted increasingly
ENDFUNCTION
*/


const getPrimeNumbers = arr => {
    let primeArr = []
    arr.forEach((element) => {
        if (element <= 1) return
        let isPrime = true
        for (let i=2; i<element; i++) {
            if (element % i === 0) {
                let isPrime = false
                break
            }
        }
        if (isPrime) {primeArr.push(element)}
    })
    return primeArr.sort((a,b) => {return a - b})
}

console.log(getPrimeNumbers([-10,10,9,8,7,6,5,4,3,2,1,13,17,19,1000,7823])) // => [ 2, 3, 5, 7, 13, 17, 19, 7823]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Challenge 2. Write a second function using pseudocode that takes an array of numbers and returns an array of arrays of prime factors for each number. //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
FUNCTION takes an array as argument
    DECLARE an empty array for ArraysOfPrimeFactors
    DECLARE an array with AllPrimeNumbersBelow1000 // Improves efficiency by explicitly listing prime numbers (up until 1000) rather than looping through all numbers testing for primeness. The latter requires n^2 time complexity
    FOR each element in the argument array
        INITIALIZE an empty array for ElementsPrimeFactors
        IF the element is not an integer or is less than 2 // Thereby the element has no prime factors
            PUSH the empty array of ElementsPrimeFactors to the array of ArraysOfPrimeFactors
            CONTINUE to next element in argument array
        ENDIF
        INITIALIZE a counter, i, to correspond to the first position in an array (i.e. i=0 if 0 corresponds to the 1st position in an array in used programming language)
        WHILE element is less than 1000 OR element is not in the array of AllPrimeNumbersBelow1000 AND the element does not equal 1
            IF the element is evenly divisable by the value at position i in the array of AllPrimeNumbersBelow1000 // meaning that the value is a factor of the element
                PUSH that element to the array of ElementsPrimeFactors // because it is a prime factor
                DIVIDE element by the value at position i in the array of AllPrimeNumbersBelow1000 // pulling out the factor from the element
                SET i equal to 0 (or to be more precise set i equal to whatever corresponds to the first position in an array in the used programming language)
            ELSE INCREMENT i by +1
            ENDIF
            IF i is greater than the index of the last position in AllPrimeNumbersBelow1000
                FOR a counter, j, from 1000 to the element (inclusive)
                    FOR a counter, h, from 2 to j (inclusive)
                        IF the element is evenly divisible by j AND h the element is evenly divisable by j // e.g. is a factor and is prime
                            PUSH j to the array of ElementsPrimeFactors
                            DIVIDE the element by j
                            SET i equal to 0
                        ENDIF         
                    ENDFOR
                ENDFOR
            ENDIF
        ENDWHILE
        IF the element does not equal to 1
            PUSH the element to the array of ArraysOfPrimeFactors
        ENDIF
    ENDFOR
    OUTPUT the array of ArraysOfPrimeFactors as the result of the function
ENDFUNCTION
*/


const getPrimeFactors = arr => {
    let primeFactorsArr = []
    const primeNumsBelow1000 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
    arr.forEach((element) => {
        let elementPrimeFactArr = []
        if (!Number.isInteger(element) || element <= 1) { // ie have no prime factors
            primeFactorsArr.push(elementPrimeFactArr)
            return
        }
        let i=0
        while (element >= 1000 || !primeNumsBelow1000.includes(element) && element !== 1) {
            if (element % primeNumsBelow1000[i] === 0) {
                elementPrimeFactArr.push(primeNumsBelow1000[i])
                element /= primeNumsBelow1000[i]
                i=0
            } else {i++}
            if (i >= primeNumsBelow1000.length) {
                for (let j=1000; j<=element; j++) {
                    for (let h=2; h<=j; h++) { // determines that j is prime
                        if (element % j === 0 && h % j === 0) { // If  j is factor &&  j is prime
                            elementPrimeFactArr.push(j)
                            element /= j
                            i=0
                        }
                    }
                }
            }
        }
        if (element !== 1) {elementPrimeFactArr.push(element)}
        primeFactorsArr.push(elementPrimeFactArr)
    })
    return primeFactorsArr
}

// console.log(getPrimeFactors([2,4,20,3500,7823,-2,0,1])) // => [ [ 2 ], [ 2, 2 ], [ 2, 2, 5 ], [ 2, 2, 5, 5, 5, 7 ], [ 7823 ], [], [], [] ]

/////////////////////////////////////////////////////////////////
// Thank you for reading this and considering me for position. //
/////////////////////////////////////////////////////////////////