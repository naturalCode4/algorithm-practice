// const getPrimeFactorsWrong = arr => {
//     let primeFactorsArr = []
//     arr.forEach((element, index) => {
//         let elementPrimeFactArr = []
//         for (let i=2; i<=element; i++) {
//             let isFactor = false
//             let isPrime = true
//             if (element % i === 0) {
//                 isFactor = true
//             }
//             for (let j=2; j<i; j++) {
//                 console.log('hit1', 'i:', i, 'j:', j)
//                 if (i % j === 0) {
//                     console.log('hit2')
//                     isPrime = false
//                     break
//                 }
//             }
//             if (isPrime && isFactor) {
//                 elementPrimeFactArr.push(i)
//             }
//         }
//         primeFactorsArr.push(elementPrimeFactArr)
//     })
//     return primeFactorsArr
// }

// -Use double for loop. A prime number is an integer where the only factors are 1 and itself
// -Create new empty array for prime numbers
// -Iterate through the parameter array
// -For each element, determine if the number is prime using the % (modulus/remainder) operator as such: Loop such that a variable (lets call i) increments from 2 (inclusive) to the element (exclusive), and if (element % i === 0) ever occurs during the loop, you do not have a prime number, so go onto next element without adding it to the new array. (Hence this is a double loop)
//     -Special cases: Skip non-Whole Numbers immediately (the instructions does not specify that all numbers will be whole numbers). Also if number = 0 or 1, skip it immediately. 
// -Add success cases of prime numbers to the new array. In Javascript use array.push(number)
// -Run a sorting algorithm on the array to sort in ascending order. In Javascript, use primeNumArr.sort((a, b) => a - b)


//////////
// Challenge 1. Using pseudocode, write a function that takes an array of numbers and finds all prime numbers from that array and returns them in a sorted array. Avoid using math libraries to determine whether the number is prime.
//////////

/* PSEUDOCODE
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

function sortedPrimes(input_array) {
    var result = []
    input_array.forEach((element) => {
      if (element <= 1) return
      let isPrime = true
      for (let i = 2; i < element; i++) {
        if (element % i === 0) {
          let isPrime = false
          break
        }
      }
      if (isPrime) { result.push(element) }
    })
    result.sort((a, b) => { return a - b })
    return result
  }
  
  console.log(sortedPrimes([-10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 13, 17, 19, 1000, 7823])) // => [ 2, 3, 5, 7, 13, 17, 19, 7823]
  
  //////////
  // Challenge 2. Write a second function using pseudocode that takes an array of numbers and returns an array of arrays of prime factors for each number.
  //////////
  
  /* PSEUDOCODE
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
  
  function primeFactors(input_array) {
    let result = []
    const primeNumsBelow1000 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
    input_array.forEach((element) => {
      let elementPrimeFactArr = []
      if (!Number.isInteger(element) || element <= 1) { // ie have no prime factors
        result.push(elementPrimeFactArr)
        return
      }
      let i = 0
      while (element >= 1000 || !primeNumsBelow1000.includes(element) && element !== 1) {
        if (element % primeNumsBelow1000[i] === 0) {
          elementPrimeFactArr.push(primeNumsBelow1000[i])
          element /= primeNumsBelow1000[i]
          i = 0
        } else { i++ }
        if (i >= primeNumsBelow1000.length) {
          for (let j = 1000; j <= element; j++) {
            for (let h = 2; h <= j; h++) { // determines that j is prime
              if (element % j === 0 && h % j === 0) { // If  j is factor &&  j is prime
                elementPrimeFactArr.push(j)
                element /= j
                i = 0
              }
            }
          }
        }
      }
      if (element !== 1) { elementPrimeFactArr.push(element) }
      result.push(elementPrimeFactArr)
    })
    return result
    // array of arrays
    //if a prime factor goes into a number more than once, it is only included once
    // [6, 8, 9] -> [[2, 3], [2], [3]]
  }
  
  // console.log(primeFactors([2,4,20,3500,7823,-2,0,1])) // => [ [ 2 ], [ 2, 2 ], [ 2, 2, 5 ], [ 2, 2, 5, 5, 5, 7 ], [ 7823 ], [], [], [] ]
  
  function main() {
    var input = [];
    var result = sortedPrimes(input);
    console.log(result);
  
    var result2 = primeFactors(input);
    console.log(result2);
  }
  
  /////////////////////////////////////////////////////////////////
  // Thank you for reading this and considering me for position! I am very excited about the prospect of working for CareSense as the Junior Survey Application Developer! Warm regards, Adin
  /////////////////////////////////////////////////////////////////

  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="script.js"></script>
</head>

<body onload="main()">
  <h1>Junior Survey Application Developer Assessment</h1>

  <h2>Personality and Work Style</h2>

  In one or two sentences, answer each of the following questions. The questions are subjective in nature and there is
  no “correct” answer:

  <ol>
    <li>Would you feel more comfortable with a dynamic team of peers or with strong leadership and clear direction?
      <b> Ideally I am seeking a work environment with a balance of leadership and clear direction from experts and team
        members with more experience. A balance would provide me with opportunity to creatively problem solve, learn a
        great deal, and collaboratively with
        a team of likewise extraordinary peers. I am open to the balance swinging either way. </b>
    </li>

    <li>What is the most important part of a function: the name, the efficiency, the tests, or the comments?<b> Every
        part is important, but the most essential piece is the actual operation/result of the function. Therefore, tests
        would demonstrate that the function does precisely what we program it to do. The name helps all team-members
        easily and quickly understand what a function does, and comments add additional explanations that could be
        especially important when working on team where everyone needs to understand each other’s code. Efficiency is
        important for writing efficient code, but naturally this is secondary to the code doing what we want it to do in
        the first place.</b></li>
  </ol>


  Rank the following terms from 1 to 7 where 1 is the term that best describes you and 7 is the term that least
  describes you. Explain your top two choices.
  <ol type="A">
    <li>Technician</li>
    <li>Scholar</li>
    <li>Enthusiast</li>
    <li>Problem-Solver</li>
    <li>Philosopher</li>
    <li>Creative</li>
    <li>People Person</li>
  </ol>

  <p><b>My Answers</b></p>
  <ol type="1">
    <li>Problem-Solver <b>I have a life-long love for solving puzzles, bringing the inquisitive and creative mind to
        solving around an equation, a code, a data structure, an algorithm, a riddle. My favorite part of being a
        software engineer is seeing myself actualize steady, fluid progress.
      </b></li>
    <li>Technician <b>As a professional, I bring my technical skills and experience to the forefront to create
        solutions, to advance my skillset and knowledge, and to be a useful asset to my team
      </b></li>
    <li>Creative</li>
    <li>Scholar</li>
    <li>People Person</li>
    <li>Enthusiast</li>
    <li>Philosopher</li>
  </ol>

  Rank these scenarios from 1 to 5, 1 being the most desirable, based on where you see yourself in five years:
  <ol type="A">
    <li>Solving challenging software problems</li>
    <li>Mentoring and training new hires</li>
    <li>Leading a team of peers and prioritizing projects</li>
    <li>Working closely with clients to understand goals, set expectations, and facilitate solutions</li>
    <li>Analyzing the high level needs of clients and identifying unmet needs</li>
  </ol>

  <ol type="1">
    <li>Solving challenging software problems</li>
    <li>Working closely with clients to understand goals, set expectations, and facilitate solutions</li>
    <li>Mentoring and training new hires</li>
    <li>Analyzing the high level needs of clients and identifying unmet needs</li>
    <li>Leading a team of peers and prioritizing projects
    </li>
  </ol>

  <h2>Technical Challenge/Critical Thinking</h2>

  Please complete any 2 of the following 3 questions.

  Use script.js to write the functions.

  <ol>
    <li>Write a function that takes an array of numbers and finds all prime numbers from that array and returns them in
      a sorted array. Avoid using math libraries to determine whether the number is prime.</li>

    <li>Write a function that takes an array of numbers and returns an array of arrays of prime factors for each number.
    </li>

    <script src="script.js"></script>

    <li><strike>

        You are tasked with maximizing the efficiency of an elevator system. The behavior of the elevator is fixed when
        it
        has passengers or is picking up passengers.

        <ul>
          <li>When it has passengers, it goes in a single direction, picking people up and dropping them off until it
            gets
            to the last stop in that direction.</li>

          <li>When someone pushes the call button, it begins moving in the direction indicated by the button pressed and
            behaves the same as it would with a passenger on it.</li>
        </ul>

        Explain how you would set up this elevator system. What should the elevator do when there are no current or
        potential passengers? How can it minimize the distance it needs to travel to pick up the next passenger, not
        knowing where that passenger will be? What if you have 1 elevator for 10 floors? What if you have 3 elevators
        for
        10 floors? What if you have 10 elevators for 10 floors? Your explanation should be high level, no need for
        actual
        code, just a basic description of behavior. (Part of the challenge is balancing detail with time management!)

      </strike></li>
  </ol>

</body>

</html>