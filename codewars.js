console.log('Hello index.js is running')

/* In this kata you will create a function that takes a list of 
non-negative integers and strings and returns a 
new list with the strings filtered out. */

function filter_list(l) {
    let noStringList = []
    for (let i=0; i<l.length; i++) {
      if (typeof l[i] == 'number') {
        noStringList.push(l[i])
      }
    }
    return noStringList
}

console.log(filter_list([1,2,'a','b',5]))

/* tribonnaci sequence. Each number is sum of the previous 3.
Also, it takes an argument of what the first three are, and n many result should be */

// Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])

function tribonacci(signature,n){
    // if (n === 0) {
    //     return []
    // }
    let sequence = []
    for (let i=0; i<n && i<3; i++) {
        sequence.push(signature[i])
    }
    let x = 3
    while (x < n) {
        sequence.push(sequence[x-3] + sequence[x-2] + sequence[x-1])
        x+=1
    }
    return sequence
}

console.log(tribonacci([0,0,1],8))

/* You are going to be given a word. Your job is to return the middle 
character of the word. If the word's length is odd, return the middle character.
 If the word's length is even, return the middle 2 characters. */

function getMiddle(s) {
    while (s.length > 2) {
        s = s.slice(1, s.length - 1)
    }
    return s
}

console.log(getMiddle('helloorld'))

/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once. */

const solution = number => {
    let total = 0
    for (let i = 0; i<number; i++) {
        if (i % 3 === 0 || i % 5 ===0 ) {
            total += i
        }
    }
    return total
}

/* Write a function that takes in a string of one or more words, and returns the same string, but with all 
five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters 
and spaces. Spaces will be included only when more than one word is present.
Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test")
 => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

 function spinWords(string) {
     let spunString = ''
     let stringsArr = string.split(' ')
     for (let i=0; i<stringsArr.length; i++) {
        if (stringsArr[i].length >= 5) {
            stringsArr[i] = stringsArr[i].split('').reverse().join('')
        }
        spunString += stringsArr[i]
        if (i < stringsArr.length - 1) {
            spunString += ' '
        }
     }
     return spunString
 }

console.log(spinWords('Lets spin thiiiis array yo'))

//some algorithm shizz

function digPow(n,p) {
    let nString = String(n)
    let successivePowerSum = 0
    for (let i=0; i<nString.length; i++) {
        successivePowerSum += Number(nString[i]) ** (p + i)
    }
    return successivePowerSum / n === (Math.floor(successivePowerSum / n)) ? (successivePowerSum/n) : -1
}
 
// console.log(digPow(89, 1))
// console.log(digPow(92, 1))
// console.log(digPow(46288, 3))


/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values: 

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

// 255 => F F => 15*16 + 15 = 255
// 0 => 00 => 0+0=0
// D5 = 13*16 + 5 = 213

// console.log(150%16)
// function hexadecimalConverter(r,g,b) {

//     const letterObject = {
//         10: 'A',
//         11: 'B',
//         12: 'C',
//         13: 'D',
//         14: 'E',
//         15: 'F'
//     }

//     let hd = '#'

//     if (r > 255) r = 255
//     if (g > 255) g = 255
//     if (b > 255) b = 255
//     if (r < 0) r = 0
//     if (g < 0) g = 0
//     if (b < 0) b = 0

//     const rVal = Math.floor(r / 16)
//     const gVal = Math.floor(g / 16)
//     const bVal = Math.floor(b / 16)

//     let secondRValue = r % 16
//     let secondGValue = g % 16
//     let secondBValue = b % 16

//     rVal >= 10 ? hd += letterObject[rVal] : hd += rVal
//     secondRValue >=10 ? hd += letterObject[secondRValue] : hd += secondRValue

//     gVal >= 10 ? hd += letterObject[gVal] : hd += gVal
//     secondGValue >=10 ? hd += letterObject[secondGValue] : hd += secondGValue

//     bVal >= 10 ? hd += letterObject[bVal] : hd += bVal
//     secondBValue >=10 ? hd += letterObject[secondBValue] : hd += secondBValue

//     // `#${rString}${gString}${bString}`

//     return hd
// }

function hexadecimalConverter(...args) {

    console.log(args)

    const letterObject = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    }

    let hd = '#'

    for (let i=0; i<args.length; i++) {

        if (args[i] > 255) args[i] = 255
        if (args[i] < 0) args[i] = 0

        const firstIValue = Math.floor(args[i] / 16)
        let secondIValue = args[i] % 16
        
        firstIValue >= 10 ? hd += letterObject[firstIValue] : hd += firstIValue
        secondIValue >=10 ? hd += letterObject[secondIValue] : hd += secondIValue

    }
    return hd
}

console.log(hexadecimalConverter(255,0,132))

//sorting tshirt sizes

// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls
// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.
// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

const tshirtSorter = tshirts => tshirts.split('').sort().reverse().join('')

console.log(tshirtSorter('lms'))
// // sml

console.log(tshirtSorter('smllms'))
// // ssmmll

//what if there were a lot of sizes, and the order didnt necessarily go in reverse order?

//in narcissistic values, the sum of each digit raised to the num of digits = the number
function narcissistic(value) {
    value = String(value)
    const numDigits = value.length
    let narcSum = 0
    for (let i=0; i<numDigits; i++) {
        narcSum += value[i]**numDigits
    }
    return narcSum === +value
}

console.log(narcissistic(8))
console.log(narcissistic(20))
console.log(narcissistic(153))
console.log(narcissistic(1652))
console.log(narcissistic(1))




//testing on these lines 
//testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines
// testing on these lines