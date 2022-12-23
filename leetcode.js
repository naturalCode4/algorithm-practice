// // Given a string, find the length of the longest substring with unique characters.
// // 'hello world' => 6
// // 'abca' => 3
// // 'jjjjjjj' => 1

// function longestSubstring(string) {

//     if (string.length === 0) {
//         return 0
//     }

//     let longest = 0
//     let currentLength = 0
//     let currentSubstring = []

//     for (let i=0; i<string.length; i++) {
//         if (!currentSubstring.includes(string[i])) { 
//             currentLength++
//             if (currentLength > longest) {
//                 longest = currentLength
//             }
//         currentSubstring.push(string[i])
//         } else {
//             const replaceIndex = currentSubstring.indexOf(string[i])
//             currentSubstring = [...currentSubstring.slice(replaceIndex + 1), string[i]]
//             currentLength = currentSubstring.length

//         }
//         console.log('longest: ', longest, 'currentLength: ', currentLength, 'currentSubstring: ', currentSubstring)
//     }
//     return longest
// }

// // console.log(longestSubstring('jjjjj'))
// // console.log(longestSubstring('hello world'))
// // console.log(longestSubstring('cabc'))

// /* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order. */

// const twoSum = function(nums, target) {
//     for (let i=0; i<nums.length; i++) {
//         for (let j=0; j<nums.length; j++) {
//             if (i != j) {
//                 if (nums[i] + nums[j] === target) {
//                     return [i,j]
//                 }
//             }
//         }
//     }
//     return 'no two numbers added up to the target!'
// };

// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,2,4,5,1111], 1115))

// // Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// const missingNumber = function(nums) {
//     for (let i=0; i<=nums.length; i++) {
//         if (!nums.includes(i)) {
//             return i
//         }
//     }
// }

// console.log(missingNumber([0,1,2,4]))
// console.log(missingNumber([0,1,3]))
// console.log(missingNumber([0,2]))

// // Write a function to find the longest common prefix string amongst an array of strings.
// // If there is no common prefix, return an empty string

// const longestCommonPrefix = (strs) => {
//     let prefix = []
//     let stringIndex = 0
//     const smallestLengthString = 5
//     while (strs[0][stringIndex]) {
//         let letter = strs[0][stringIndex]
//         let matches = true
//         for (let i=0; i<strs.length; i++) {
//             if (strs[i][stringIndex] !== letter) {
//                 matches = false
//             }
//         }
//         console.log('stringIndex: ', stringIndex, matches)
//         if (matches) {
//             prefix.push(strs[0][stringIndex])
//         } else {
//             if (prefix === []) {
//                 console.log('boop')
//                 return ""
//             }
//             return prefix.join('')
//         }
//         stringIndex++
//     }
//     return prefix.join('')
// }

// console.log(longestCommonPrefix(["flower","flow","floight"]))
// console.log(longestCommonPrefix(["","fffffa","ffffffff"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))

// const longestCommonPrefix2 = function(strs) {
//     let prefix = ""
//     for (let i=0; i<strs.length; i++) {
//         let char = strs[0][i]
//         for (let j=1; j<strs.length; j++) {
//             if (strs[j][i] !== char) return prefix
//         }
//         prefix += char
//     }
//     return prefix
// }

// console.log(longestCommonPrefix2(["flower","flow","floight"]))
// console.log(longestCommonPrefix2(["fff","fffffa","ffffffff"]))
// console.log(longestCommonPrefix2(["dog","racecar","car"]))

// // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// function containsDuplicate (nums) {
//     while (nums.length > 1) {
//         let currentNum = nums.splice(0,1)[0]
//         if (nums.includes(currentNum)) return true
//     }
//     return false
// }

// console.log(containsDuplicate([1,2,3,4,5]))
// console.log(containsDuplicate([1,2,3,2,5]))

// // Given an m x n matrix, return all elements of the matrix in spiral order.
// // Example:
// // Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// // Output: [1,2,3,6,9,8,7,4,5]


// const spiralOrder = function(matrix) {
    
//     const m = matrix.length
//     const n = matrix[0].length
    
//     let [xa,xb,ya,yb]=[0,n-1,0,m-1]
//     let a = []    
        
//     // while (xa<n/2 && ya<m/2) {
//     while (a.length<m*n) {
//         for (let x=xa; x<=xb; x++) {
//             a.push(matrix[ya][x])
//             // console.log(a,1)
//         }
        
//         ya++
//         for (let y=ya; y<=yb; y++) {
//             a.push(matrix[y][xb])
//             // console.log(a,2)

//         }
        
//         xb--
//         if (a.length<m*n) {
            
//             for (let x=xb; x>=xa; x--) {
//                 a.push(matrix[yb][x])
//                 // console.log(a,3)
//                 // console.log(xa,xb,ya,yb)
//             }

//             yb--
//             for (let y=yb; y>=ya; y--) {
//                 a.push(matrix[y][xa])
//                 // console.log(a,4)
//             }

//             xa++
//         }
//     }
//     return a
// };

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

// /* pseudocode:

// xa is current left column
// xb is current right column
// ya is current top row
// yb is current bottom

// execute top row
// execute right column
// execute bottom row reverse order
// execute left column reverse order to second

// execute top (second) row (up until second to last)
// execute right column (from second until second to last)
// execute bottom (second to bottom) row reverse order (from second to second to last)
// execute (second to) left column reverse order to third item

// let h = Math.Max(a,b) */

// // Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// // The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
// // Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// // Output: true

// ////////////////////////

// // You are climbing a staircase. It takes n steps to reach the top.
// // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// // Explanation of memoization: If we simply wrote a fibonacci recursion statement without memoization, then the code would calculate the fibonacci value at n-1 and n-2 each and every time we are calculating n (which each in turn, have to calculate THEIR n-1 and n-2). That's ridicilously inefficient. Could take a minute to calculate a 2 digit number like 60. Instead, with memoization, we have an object where we store the values that we find. So we only have to calculate the values once, and then can reference them simply in an object. This cuts the runtime by, like, 1000x aka "a lot".
//     // non-memoized non-dynamic dont do this. Will take 5 minutes:
//         // const climbStairs = n => {
//         //     if (n<=2) return n
//         //     return (climbStairs(n-1) + climbStairs(n-2))
//         // }

// let memo = {
//     0: 0,
//     1: 1,
//     2: 2,
// }

// const climbStairs = function(n) {
//     // base case
//         // if (n===0) return 0
//         // if (n===1) return 1
//         // if (n===2) return 2
//     if (n<=2) return n

//     //build memo
//     if (!memo[n]) {
//         memo[n] = climbStairs(n-1) + climbStairs(n-2)
//     } 
//     // (not) recursive case
//     return memo[n]
// }


// console.log('newSetArray: ', new Array(3).fill(new Array(4).fill(0)))

// const climbStairs2 = function(n) {
//     const arr = new Array(n).fill(0)
//     arr[0]=0; arr[1]=1; arr[2]=2
//     for (let i=3; i<=n; i++) {
//         arr[i]=arr[i-1]+arr[i-2]
//     }
//     return arr[n]
// }

// console.log('climbStairs 100: ', climbStairs(100))
// console.log('climbStairs2 100: ', climbStairs2(100))

// // const climbStairs = n => n<=2 ? n : (climbStairs(n-1) + climbStairs(n-2))


// // steps = 0 => 0

// // steps = 1 => 1
// // 1

// // steps = 2 => 2
// // 1 1
// // 2

// // steps = 3 => 3
// // 1 1 1
// // 2 1
// // 1 2

// // steps = 4 => 5
// // 1 1 1 1
// // 2 1 1
// // 1 2 1
// // 1 1 2
// // 2 2

// // steps = 5 => 8
// // 1 1 1 1 1
// // 2 1 1 1
// // 1 2 1 1
// // 1 1 2 1
// // 1 1 1 2
// // 2 2 1
// // 2 1 2
// // 1 2 2

// // cm = cm[n-1] + cm[n-2]



// ///////////////////////

// const createTakenBoard = (board) => {
//     let takenBoard = board.map(innerArray => [...innerArray])
//     for (let i=0; i<takenBoard.length; i++) { // convert board to 0s
//         for (let j=0; j<takenBoard[i].length; j++) {
//             takenBoard[i][j] = 0
//         }
//     }
//     return takenBoard
// }

// const findFirstLetter = (board, firstLetter) => {
//     let instanceCoordinates = []
//     for (let i=0; i<board.length; i++) {
//         for (let j=0; j<board[i].length; j++) {
//             if (board[i][j] === firstLetter) {
//                 instanceCoordinates.push([i,j])
//             }
//         }
//     }
//     return instanceCoordinates
// }

// const recursiveDirections = (coordinates, word, board, takenBoard, instance) => {
    
//     if (word.length === 0) return true

//     // making takenArray all untaken again:
//     // takenBoard = new Array(board.length).fill(new Array(board[0].length).fill(0))

//     let i = coordinates[instance][0]
//     let j = coordinates[instance][1]
    
//     takenBoard[i][j] = 1
    
//     // if (board[i][j+1] && takenBoard[i][j+1] === 0) { // right
//     //     recursiveDirections([i, j+1], word.slice(1))
//     // }
//     // if (board[i][j-1] && takenBoard[i][j-1] === 0) { // left
//     //     recursiveDirections([i, j-1], word.slice(1))
//     // }
//     // if (board[i-1][j] && takenBoard[i-1][j] === 0) { // up
//     //     recursiveDirections([i-1, j], word.slice(1))
//     // }
//     // if (board[i+1][j] && takenBoard[i+1][j] === 0) { // down
//     //     recursiveDirections([i+1, j], word.slice(1))
//     // }

//     //after concluding that cannot make word from that letter, try other firstlettercoordinates
//     // instance++

//     return false
// }

// const exist = (board, word) => {
//     // let takenBoard = createTakenBoard([...board])
//     let takenBoard = new Array(board.length).fill(new Array(board[0].length).fill(0))
//     console.log('board: ', board)
//     console.log('takenBoard: ', takenBoard)
//     let firstLetterCoordinates = findFirstLetter(board, word[0])
//     console.log('firstLetterCoordinates: ', firstLetterCoordinates)
//     let instance = 0
//     recursiveDirections(firstLetterCoordinates, word, board, takenBoard, instance)
// }

// exist([['a', 'b', 'c'], ['d','e','d'], ['f', 'g', 'f']], 'abedf') // => true

// // // a.b.c
// // // d.e.d
// // // f.g.h

// // Given an integer array nums sorted in non-decreasing order,
// // return an array of the squares of each number sorted in non-decreasing order.

// const sortedSquare = nums => nums.map(num => num**2).sort((a,b) => a-b)

// //write sortedSquare with O(n) time complexity. The above has O(nlog(n))

// console.log(sortedSquare([-4,-1,0,3,10]))

// // Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// // The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// // You must write an algorithm that runs in O(n) time and without using the division operation.

// const productExceptSelf = nums => {
//     const answer = new Array(nums.length).fill(1)
//     for (let i=0; i<nums.length; i++) {
//         for (let j=0; j<nums.length; j++) {
//             if (j !== i) {
//                 answer[j]*=nums[i]
//             }
//         }
//     }
//     return answer
// }

// console.log(productExceptSelf([1,2,3,4]))

// // my current answer has O(n^2) complexity :/

// // Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
// // Return the answer in any order.
// // A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters

// const letterCombinations = digits => {
    
//     if (!digits.length) {
//         return [];
//     }

//     const numberDigitMap = {
//         '2': ['a','b','c'],
//         '3': ['d','e','f'],
//         '4': ['g','h','i'],
//         '5': ['j','k','l'],
//         '6': ['m','n','o'],
//         '7': ['p','q','r','s'],
//         '8': ['t','u','v'],
//         '9': ['w','x','y','z']
//     }

//     digits = digits.toString()

//     let combinations = []

//     for (let i=0; i<digits.length - 1; i++) {
//         numberDigitMap[digits[i]].forEach(firstLetter => {
//             for (let j=1; j<=digits.length; j++) {
//                 combinations.push(firstLetter + numberDigitMap[digits[j]])
//             }
//         })
//     }

//     console.log(combinations)
// }

// letterCombinations(23)

// LONGEST COMMON PREFIX https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = function(strs) {

    if (strs.length === 1) {
        return strs[0]
    }
    if (strs.length === 0 || strs[0][0] != strs[1][0]) {
        return ""
    }

    let longestPrefix = ""
    let currentPrefix
    let i=0

    while (i<strs[0].length) {
        currentPrefix = strs[0][i]
        for (let j=0; j<strs.length; j++) {
            console.log('longestPrefix1: ', longestPrefix)
            if (strs[j][i] != currentPrefix) {
                return longestPrefix
            } 
        }
        longestPrefix += strs[0][i]
        i++
    }
    return longestPrefix
}

console.log(longestCommonPrefix(["dog", "cat"]))

// REMOVE  DUPLICATES FROM SORTED LIST

/*
  Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
*/

const deleteDuplicates = function(head) {
    let prev = head
    while (prev && prev.next) {
        if (prev.val === prev.next.val) {
            prev.next = prev.next.next
        } else {
            prev = prev.next
        }
    }
    return head
}

// Find smallest letter greater than target

const nextGreatestLetter = (letters, target) => {
    for (let i=0; i<=letters.length-1; i++) {
        const comparisonLetter = letters[i]
        if (comparisonLetter.charCodeAt(0) > target.charCodeAt(0)) {
            return comparisonLetter
        }
    }
    return letters[0]
}

// console.log(nextGreatestLetter(letters = ["c","f","j"], target = "a")) // => a
// console.log(nextGreatestLetter(letters = ["x","x","y","y"], target = "z")) // => x

// Product of Array Except Self, written in O(n) time complexity. Mine currently does not

const productExceptSelf = nums => {
    return nums.map((element, index) => {
        // console.log('hit1', 'element: ', element, 'index: ', index)
        return element = nums.reduce((a, b, i) => {
            // console.log('boopbeep', 'a: ', a, 'b: ', b, 'i: ', i)
            if (index !== i) {
                // console.log('hit2', 'a: ', a, 'b: ', b, 'i: ', i)
                return a * b
            } else {
                // console.log('hit3', 'a: ', a, 'b: ', b, 'i: ', i)
                return a
            }
        }, 1)
    })
}

// console.log(productExceptSelf([1,2,3,4,5]))
// console.log(productExceptSelf([4,3,2,1,2]))
// console.log(productExceptSelf([-1,1,0,-3,3]))

// Find the Duplicate Number, without modifying the array nums and using only constantt extra white space. I currently do not satisfy that time complexity criteria

const findDuplicate = nums => {
    let duplicate
    nums.every((num, ind) => {
        let nums2 = [...nums]
        nums2.splice(ind, 1)
        console.log('nums', nums2)
        if (nums2.includes(num)) {
            duplicate = num
            return false
        }
        return true
    })
    return duplicate
}

// console.log(findDuplicate([3,1,5,4,1,2]))
// console.log(findDuplicate([1,3,4,2,2]))

const isPalindrome = str => {
    let reversedStr = str.split('')
    reversedStr = reversedStr.reverse()
    reversedStr = reversedStr.join('')
    if (str !== reversedStr) {
        return false
    }
    return true
}

// const palindromePairs = words => {
//     let output = []
//     for (let i=0; i<words.length; i++) {
//         for (let j=0; j<words.length; j++) {
//             if (i !== j) {
//                 const combo = words[i] + words[j]
//                 if (isPalindrome(combo)) {
//                     output.push([i,j])
//                 }
//             }
//         }
//     }
//     return output
// }

// console.log(isPalindrome('racecar')) // => true
// console.log(isPalindrome('dropkick')) // => false
// console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]))

/* PSEUDOCODE
First put every string into hashmap. "Pre-processing" in input words
Declare empty output array
Iterate through the words array, 
    condition: possible strings' length are <= word length // Adin says this is false
    and create list of possible strings that make it a palindrome when combined (prepended or appended)
    check if any of possible strings are in hashmap
        if so, add to output array

HASHMAP
map = {
    "abcd": 0,
    "dcba": 1,
    "lls": 2,
    "s": 3,
    "sssll": 4
}

declare currentWord = "abcd"

how to find palindrome completions
    same backwards
    same backwards - 1st letter
    same backwards + 1 letter
currentWordPalindromes = ['cba', 'dcba', 'edcba']

// let list = [sssll, xllsss] => sssllxllsss

// sssll => 'llsss', lsss, sss, ss, s, "", 'llsss', llss, lls, ls, 'l', "" // make set
// xllsss => sssllx, ssllx, sllx, llx, lx, x, "", sssllx, sssll, sssl, sss, ss, s, ""

time complexity: O(n + nm) => O(nm) where n is length of words array and m is average word length. Does simplify to nm
O(17n) => O(n)

*/
const createHashMap = arr => {
    let hashMap = {}
    arr.forEach((str, index) => {
        hashMap[str] = index
    })
    return hashMap
}

const liamIsStupidAlgorithm = words => {

    let output = []
    let hashMap = createHashMap(words)
    console.log('hashMap', hashMap)

    for (let i=0; i<words.length; i++) {

        const currentWord = words[i]
        let currentWordPossy = new Set([])
        let currentWordReversed = words[i].split('').reverse() // reverse word and make array for mutability

        for (let j=0; j<=currentWord.length; j++) { // add to possibility array removing from front of reversed string
            currentWordPossy.add(currentWordReversed.join(''))
            currentWordReversed.shift()
        }

        currentWordReversed = words[i].split('').reverse() // reset word

        for (let h=0; h<=currentWord.length; h++) { // add to possibility array removing from back of reversed string
            currentWordPossy.add(currentWordReversed.join(''))
            currentWordReversed.pop()
        }

        if (currentWord.length === 1) { // instead of this being here, wrap the rest of the code as a conditional of this not being the case
            currentWordPossy = new Set([''])
        }

        if (currentWord.length === 1) {
            output.push
        }

        console.log('currentWordPossy', currentWordPossy) // sssll => ['llsss', 'lsss', 'sss', 'ss', 's', '', 'llss', 'lls', 'll','l']
        for (let k=0; k<currentWordPossy.size; k++) {
            let str = [...currentWordPossy][k]
                console.log('hit1', i, str, hashMap[str])
            if (hashMap[str] != undefined && isPalindrome(currentWord + str)) {
                console.log('hit2', i, hashMap[str])
                output.push([i, hashMap[str]]) 
            }
        }
    }
    console.log('output2: ', output)
    return output
}
//issue with possibilities array including self if a one letter value. need to catch
liamIsStupidAlgorithm(["abcd","dcba","lls","s","sssll", ""])

const binarySearch = (list, target) => {
    let middleIndex = Math.floor(list.length / 2)
    console.log('middleIndex: ', middleIndex)
    if (list[middleIndex] === target) {
        return middleIndex
    }
    if (list.length <= 3) {const getTwoIntegersThatSumToTarget = (nums, target) => {
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    let secondInteger = target - nums[i]
    if (hashMap[secondInteger] !== undefined && hashMap[secondInteger] !== i) {
      return [i, hashMap[secondInteger]]
    }
  }
  return -1
}

console.log(getTwoIntegersThatSumToTarget([1, 2, 3, 4, -100], -96))
        return Math.floor(list.length / 2)
    } else if (target < list[middleIndex] && list.length > 1) {
        binarySearch(list.splice(0, middleIndex), target)
    } else if (target > list[middleIndex] && list.length > 1) {
        binarySearch(list.splice(middleIndex), target)
    }
}

console.log('binarySearch: ', binarySearch([1,3,5,6,7,9,12,15], 9))

// const searchInsert = (nums, target) => {
//     binarySearch(nums, target)
//     // if (nums.includes(target)) {
//     //     return nums.indexOf(target)
//     } else {
//         for (let i=0; i<nums.length; i++) {
//             if (target < nums[i]) {
//                 return i
//             }
//         }
//     } 
//     return nums.length
// }

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*/

// potentially no solution. If there are two elements that add to the target, there will be exactly one pair. If no solution, return -1

const getTwoIntegersThatSumToTarget = (nums, target) => {
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
      hashMap[nums[i]] = i
    }
    for (let i = 0; i < nums.length; i++) {
      let secondInteger = target - nums[i]
      if (hashMap[secondInteger] !== undefined && hashMap[secondInteger] !== i) {
        return [i, hashMap[secondInteger]]
      }
    }
    return -1
  }
  
  console.log(getTwoIntegersThatSumToTarget([1, 2, 3, 4, -100], -96))

  // get majority element

const majorityElement = function(nums) {
    const sortedNums = nums.sort(function(a,b) {return a-b})
    let currentFrequency = 0
    let highestFrequency = 0
    let currentNum = sortedNums[0]
    let highestFrequencyNum = sortedNums[0]
    sortedNums.forEach((num, ind) => {
        if (num == currentNum) {
            currentFrequency++
            if (currentFrequency > highestFrequency) {
                highestFrequencyNum = num
                highestFrequency = currentFrequency
            }
        } else {
            currentNum = num
            currentFrequency = 1
        }
    })
    return highestFrequencyNum
}

console.log(majorityElement([2,1,2,1,2,1,2,1,1,2,3,3,3,3]))

let aList = [1,4,5,3,3,-5,-100,200]
aList.sort((a,b) => a - b)
console.log(aList)

// Return lowest non-included natural number (Int > 0)

console.log('begin')

function solution(A) {
    const n = A.length
    let hashMap = {}
    for (let i=0; i<n; i++) {
        if (hashMap[A[i]] == undefined) {
            hashMap[A[i]] = i
        }
    }
    for (let j=1; j<n+2; j++) {
        if (hashMap[j] == undefined) {
            return j
        }
    }
    return 'end'
}

console.log(solution([1,3,6,4,1,2]))
console.log(solution([1,2,3]))
console.log(solution([-1,-3]))

function solution2(A, K) {
    var n = A.length;
    for (var i = 0; i < n ; i++) {
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] > 1 || A[n - 1] < K)
        return false;
    else
        return true;
}

console.log(solution2([1,2,3], 3))
console.log(solution2([1,2,3,4], 3))
console.log(solution2([1,1,3], 3))

function solution3(A, B) {

    A = A.split(':')
    A = [parseInt(A[0]), parseInt(A[1])]
    B = B.split(':')
    B = [parseInt(B[0]), parseInt(B[1])]
    
    console.log('A:', A, 'B:', B)

    let roundedA = A
    let roundedB = B

    // Transform A (Round Up)
    if (A[1] >= 1 && A[1] <= 15) {
        roundedA[1] = 15
    }
    if (A[1] >= 16 && A[1] <= 30) {
        roundedA[1] = 30
    }
    if (A[1] >= 31 && A[1] <= 45) {
        roundedA[1] = 45
    }
    if (A[1] >= 46 && A[1] <= 60) {
        roundedA[1] = 0
        roundedA[0] += 1
    }

    // Transform B (Round Down)
    if (B[1] >= 0 && B[1] <= 14) {
        roundedB[1] = 0
    }
    if (B[1] >= 15 && B[1] <= 29) {
        roundedB[1] = 15
    }
    if (B[1] >= 30 && B[1] <= 44) {
        roundedB[1] = 30
    }
    if (B[1] >= 45 && B[1] <= 59) {
        roundedB[1] = 45
    }

    console.log('A:', roundedA, 'B:', roundedB)

    let totalGames = 0

    totalGames += 4*(roundedB[0] - roundedA[0])
    totalGames += (roundedB[1] - roundedA[1])/15

    return totalGames
}

console.log(solution3('20:01', '22:00'))

// return true if string s and string t are anagrams, false if not

const isAnagram = function(s, t) {
    
    let split_T = t.split('')
    
    for (let i=0; i<s.length; i++) {
        if (split_T.includes(s[i])) {
            split_T.splice(split_T.indexOf(s[i]), 1)
        } else {
            return false // we immediately know that they are not anagrams i t does not include each and every letter of s
        }
    }
    
    if (split_T.length === 0) {
        return true
    } else {
        return false
    }
    
    return 'something went wrong'
};

const isAnagram2 = function(s, t) { // !nope! edge case where same length and letters are same, but different quantity of each letter. Example: [["ddddddddddg","dgggggggggg"]]
    if (s.length !== t.length) {
        return false
    }
    for (let i=0; i<s.length; i++) {
        if (!t.includes(s[i])) {
            return false
        }
    }
    for (let i=0; i<t.length; i++) { // we also need to look the other way, or else an edge case of for example, isAnagram('aaaaaa', 'abcdef') would return true!
        if (!s.includes(t[i])) {
            return false
        }
    }
    return true
}

console.log(isAnagram('hello', 'world'))
console.log(isAnagram('anagram', 'mraaang'))
console.log(isAnagram('aaaaaa', 'abcdef')) // ERROR!!! RETURNS TRUE

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// example...
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = function(strs) {
        
    let solution = [[strs[0]]]
    
    for (let i=1; i<strs.length; i++) {
        console.log('hit0')
        for (let j=0; j<solution.length; j++) {
            
            console.log('hit1')
            console.log('solution: ', solution)
            console.log('solution[j]: ', solution[j])
            console.log('j: ', j)
            console.log('i: ', i)
            
            if (isAnagram(strs[i], solution[j][0])) {
                console.log('hit2')
                solution[j].push(strs[i])
                break
            } else if (j === solution.length - 1) {
                console.log('hit3')
                solution.push([strs[i]]) // if anagram does not exist ==> push new array with new anagram into solutions array
                break
            }
        }
    }
    console.log('hit4')
    return solution
    
};

// VALID SUDOKU
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

const isValidSudoku = function(board) {

    for (let i=0; i<9; i++) {
        if (!isValid(board[i]) || !isValid(formatColumn(board, i)) || !isValid(formatBox(board, i))) {
            return false
        }
    }

    return true
};

const formatColumn = function(board, columnIndex) {
    let array = []
    for (let i=0; i<9; i++) {
        array.push(board[i][columnIndex])
    }
    return array
}

const formatBox = function(board, boxNumber) {
    let array = []
    
    switch (boxNumber) {
        case 0:
            array = [board[0].slice(0,3), board[1].slice(0,3), board[2].slice(0,3)]
            break;
        case 1:
            array = [board[0].slice(3,6), board[1].slice(3,6), board[2].slice(3,6)]
            break;
        case 2:
            array = [board[0].slice(6), board[1].slice(6), board[2].slice(6)]
          break;
        case 3:
            array = [board[3].slice(0,3), board[4].slice(0,3), board[5].slice(0,3)]
            break;
        case 4:
            array = [board[3].slice(3,6), board[4].slice(3,6), board[5].slice(3,6)]
            break;
        case 5:
            array = [board[3].slice(6), board[4].slice(6), board[5].slice(6)]
          break;
        case 6:
            array = [board[6].slice(0,3), board[7].slice(0,3), board[8].slice(0,3)]
            break;
        case 7:
            array = [board[6].slice(3,6), board[7].slice(3,6), board[8].slice(3,6)]
            break;
        case 8:
            array = [board[6].slice(6), board[7].slice(6), board[8].slice(6)]
            break;
        default:
    }

    array = [...array[0], ...array[1], ...array[2]]

    return array
}

const isValid = function(array) {
    let i=array.length-1
    while (i > 0) {
        let copyArray = [...array]
        copyArray.splice(i,1)
        if (copyArray.includes(array[i]) && array[i] !== '.') {
            return false
        }
        i--
    }
    return true
}

console.log('isValidSudoku', isValidSudoku([
 ["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])) // ==> true


// twosum using two pointers -- no extra space
const twoSum = function(numbers, target) {
    
    let left = 0
    let right = numbers.length - 1
    
    while (left < right) {
        
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
            
        } else if (numbers[left] + numbers[right] > target) {
            right--
            
        } else if (numbers[left] + numbers[right] < target) {
            left++
        }
        
    }
    
    return 'something went wrong'
};

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

//below code has O(n^2) time complexity. Optimized two-pointer method code is below this one

const maxAreaNonOptimized = function(height) {

    let max = 0

    if (height.length < 2) {
        return max
    }

    if (height.length === 2) {
        return Math.min(height[0], height[1])
    }

    for (let i=0; i<height.length; i++) {
        for (let j=1; j<height.length; j++) {
            const capacity = (j-i)*Math.min(height[i], height[j])
            max = Math.max(max, capacity)
        }
    }

    return max
}

const maxArea = function(height) {

    if (height.length < 2) {
        return 0
    }

    if (height.length === 2) {
        return Math.min(height[0], height[1])
    }
    
    let left = 0
    let right = height.length-1
    let maxArea = 0
    
    while (left < right) {
        
        let area = (right - left)*Math.min(height[left], height[right])
        
        if (area > maxArea) maxArea = area
        //whichever one is smaller, you move. Because there is no way for the taller one to move and make the capacity bigger
        if (height[left] < height[right]) { 
            left++
        } else {right--}
        
    }
    
    return maxArea
}

/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */

const maxProfit = function(prices) {
    
    let minPrice = prices[0]
    let maxProfit = 0
    
    for (let i=0; i<prices.length; i++) {
        
        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        
    }
    
    return maxProfit
}

// work in progress of Minimum Window Substring

var minWindow = function(s, t) {
    
    //cover edge cases of t.length is 0 or greater than s.length
    if (t.length===0 || t.length>s.length) {
        return ""
    }
    
    //declare left at 0 and right at t.length-1
    let left = 0
    let right = t.length-1
    
    //declare empty substring 
    let substring = ""
    
    // declare map that contains values from left to right
    let map = {}
    let stringSlice = s.slice(left, right+1)
    for (let i=0; i<stringSlice.length; i++) {
        if (map.hasOwnProperty(stringSlice[i])) {
            map[stringSlice[i]]++
        } else {
            map[stringSlice[i]] = 1
        }
    }
            
    //iteration right
    while (right < s.length) {
        
        console.log('right while loop:', 'right:', right, 'substring:', substring)
        //check if map has all values (including duplicates)
        let substringHasAllLetters = true
        for (let i=0; i<t.length; i++) {
            if (!map.hasOwnProperty(t[i])) { //doesnt incorporate duplicates yet
                substringHasAllLetters = false
                break
            } 
        }
        if (substringHasAllLetters) {
            substring = s.slice(left, right+1)
            break
        }
        
        //shift right to the right
        right++
        
        //add value to map
        if (map[s[right]] >= 1) {
            map[s[right]]++
        } else {
            map[s[right]] = 1
        }
        
    }
    
    //if not found when right hits end, return empty string
    if (!substring) {
        return substring
    }
    
    //iteration left
    while (left<=right) {
    
        //track previous substring
        substring = s.slice(left, right+1)
        
         //remove old value from map
        if (map[left] >= 1) {
            map[left]--
        } else {
            delete map[left]
        }
            
        //shift left to the right
        left++
        
        //check that map still has all values
        // if yes, continue
        // if not, return previous substring as solution
        let substringHasAllLetters = true
        for (let i=0; i<t.length; i++) {
            if (!map.hasOwnProperty(t[i])) { //doesnt incorporate duplicates yet
                substringHasAllLetters = false
                return substring
            } 
        }
        
    }
};



// sliding window METHOD...
// start: left at 0, right at t.length-1
// tracking values between left and right in a map. adding and removing from map with each shift
// move right over until string contains all values in substring.
// once valid, move left over to narrow string to smallest


// Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = function(s) {
    
    
    if (s.length === 0) {return 0}
    if (s.length === 1) {return 1}
    
    let left = 0
    let right = 0
    let maxLength = -Infinity
    let setMap = new Set()
    
    while (right < s.length) {
        
        if (!setMap.has(s[right])) {
            setMap.add(s[right])
            maxLength = Math.max(setMap.size, maxLength)
            right++
        } else {
            setMap.delete(s[left])
            left++
        }
    }
    
    return maxLength

}

/* 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.
*/

const checkInclusion = function(s1, s2) {
    
    const s1Length = s1.length
    const s2Length = s2.length

    if (s1Length > s2Length) return false
    
    let left = 0
    let right = s1Length - 1

    let hash = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0}

    let targetHash = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0}

    for (let i=0; i<s1Length; i++) {
        targetHash[s1[i]]++
    }

    for (let i=0; i<s1Length; i++) {
        hash[s2[i]]++
    }

    while (right < s2Length) {
        
        // console.log('s1', s1, 's2', s2)
        // console.log('hash', hash, 'targetHash', targetHash)

        if (JSON.stringify(hash) === JSON.stringify(targetHash)) {
            // console.log('HASHES ARE SAME')
            return true
        } else {
            if (hash[s2[left]] > 1) {
                hash[s2[left]]-- 
            } else {
                hash[s2[left]] = 0
            }
            left++
            right++
            if (hash[s2[right]] > 0) {
                hash[s2[right]]++ 
            } else {
                hash[s2[right]] = 1
            }

        }
    }

    return false

};

// Valid Parenthesis

const isValidParentheses = function(s) {
    let stack = []
    const charMap = {')': '(', ']': '[', '}': '{'}
    for (let i=0; i<s.length; i++) {
        console.log('stack:', stack, 's[i]:', s[i],  'charMap[s[i]]:', charMap[s[i]])
        if (charMap[s[i]] && stack.length === 0) {
            console.log('hit1')
            return false
        }
        if (stack.length > 0 && stack[stack.length - 1] == charMap[s[i]]) { // closing char
            console.log('hit2')
            stack.pop()
        } else {
            console.log('hit3')
            stack.push(s[i]) // opening char
        }
    }


    if (stack.length === 0) {return true} else {return false}
};

// evaluate reverse polish notation
// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

var evalRPN = function(tokens) {

    let stack = []
    const operations = {'+': '+', '-': '-', '*': '*', '/': '/'}

    tokens.forEach(token => {
        console.log('token:', token, 'stack', stack)
        if (!operations[token]) {
            stack.push(+token)
        } else {
            evaluate(token, stack)
        }
    })

    return stack[0]

};

const evaluate = (o, stack) => {
    switch (o) {
    case '+':
        console.log('+')
        stack.push(stack.pop() + stack.pop())
        break
    case '-':
        console.log('-')
        a = stack.pop()
        b = stack.pop()
        stack.push(b - a)
        break
    case '*':
        console.log('*')
        stack.push(stack.pop() * stack.pop());
        break
    case '/':
        console.log('/')
        a = stack.pop()
        b = stack.pop()
        stack.push(Math.trunc(b / a))
        break
    }
}

/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
*/

var dailyTemperatures = function(temperatures) {
    
    //use Stack
    //notice that stack is always in non-increasing order

    //declare answers array as array of 0s equal to the length ot temperatures array
    //declare stack

    //iteration/loop from left to right until we have reached the end of the temperatures array
        // compare current num to see if greater than top of the stack
            // if yes, update  the answerArray[i] with differences of indecies
            // if yes, also compare to the new top of the stack. ==> continue until not greater than top of the stack
        // add current num to the stack

    // return answer

    const tempLength = temperatures.length
    let stack = []
    let answer = Array(tempLength).fill(0)

    for (let i=0; i<temperatures.length; i++) {
        let currentTemp = temperatures[i]
        while (stack.length && currentTemp > stack[stack.length-1][0]) {
            answer[stack[stack.length-1][1]] = i - stack[stack.length-1][1]
            stack.pop()
        }
        stack.push([currentTemp, i])
    }   
    return answer
};

//Happy Number
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function(n) {

    let seenValues = new Set()

    const endSearch = () => {
        return n === 1 || seenValues.has(n)
    }
    
    while (!endSearch()) {
        seenValues.add(n)
        n = getNextNumber(n)
        console.log('n', n, 'seenValues', seenValues)
    }

    return n === 1

}

var getNextNumber = function(n) {
    
    let sum = 0
    while (n > 0) {
        const rightDigit = n % 10
        sum += rightDigit**2
        n = Math.floor(n/10)
    }

    return sum
}

// Car Fleet -- Leetcode number 853. Stack problem

const carFleet = function(target, position, speed) {
    const refactor = refactorArrays(target, position, speed)
    let stack = []
    refactor.forEach(el => {
        stack.push(el)
        while (stack[stack.length-1] <= stack[stack.length-2] && stack[0]) {
            stack.pop()
        }
    })
    return stack.length
};

const refactorArrays = (target, position, speed) => {
  let jointArray = []
  for (let i=0; i<position.length; i++) {
    const car = [position[i], speed[i]]
    jointArray.push(car)
  }
  jointArray.sort((a,b)=>b[0]-a[0])
  return jointArray.map(car => (target - car[0])/car[1])
}

// convert prefix to infix mathematic notation

// Input :  Prefix :  *+AB-CD
// Output : Infix : ((A+B)*(C-D))

// Input :  Prefix :  *-A/BC-/AKL
// Output : Infix : ((A-(B/C))*((A/K)-L))

// start from end
// push operands onto queue
// if operator, put between two letters you popped off of the queue, in order

const convertPrevixtoInfixNotation = function(prefix) {
    let stack = []
    prefix = prefix.split('')
    let prev
    for (let i=prefix.length-1; i>=0; i--) {
        if (prefix[i].charCodeAt(0) >= 48) { // is not an operator (i.e. +, -, *, /)
            stack.push(prefix[i])
        } else {
            stack.push(`(${stack.pop()}${prefix[i]}${stack.pop()})`)
        }
    }
    return stack.join('')
}

console.log(convertPrevixtoInfixNotation('*+AB-CD')) // ==> ((A+B)*(C-D))
console.log(convertPrevixtoInfixNotation('*-A/BC-/AKL'))

// Next Greatest Element <== https://www.geeksforgeeks.org/next-greater-element/

// The Next greater Element for an element x is the first greater element on the right side of x in the array. Elements for which no greater element exist, consider the next greater element as -1. 

const nextGreatestElement = nums => {
    let stack = []
    let answer = nums.map(num => {
        return {number: num, nextGreatest: -1}
    })
    nums.forEach((num, ind) => {
        while (stack[0] && num > stack[stack.length - 1].number) {
            console.log('stack', stack, (stack.length - 1).index)
            console.log(stack[stack.length - 1])
            answer[stack[stack.length - 1].index] = {number: stack.pop().number, nextGreatest: num} // ==> time complexity O(n)
        }
        stack.push({number: num, index: ind})
    })
    return answer
}

console.log(nextGreatestElement([ 13 , 7, 6 , 12 ]))

// Binary Search using recursion

const search = (nums, target, start = 0, end = nums.length-1) => {

    if (start > end) {
        return -1
    }

    let mid = Math.floor((start + end) / 2)

    console.log(nums, target, start, end, mid)

    if (nums[mid] === target) {
        console.log('nums[mid] === target')
        return mid
    }

    if (nums[mid] > target) {
        console.log('nums[mid] > target')
        return search(nums, target, start, mid-1)
    }

    if (nums[mid] < target) {
        console.log('nums[mid] < target')
        return search(nums, target, mid+1, end)
    }
}

// Binary search using while loop

// Search a 2D Matrix (binary search)
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = function(matrix, target) {
    
    let list = []
    matrix.forEach(array => {
        list = [...list, ...array]
    })

    console.log(list)

    let leftIndex = 0
    let rightIndex = list.length - 1

    while (leftIndex <= rightIndex) {

        let midIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (list[midIndex] === target) {
            return true
        }
        if (list[midIndex] < target) {
            leftIndex = midIndex + 1
        }
        if (list[midIndex] > target) {
            rightIndex = midIndex - 1
        }
    }

    return false
};

// Koko eating bananas
// O(n) time complexity (Binary search)
// leetcode url: https://leetcode.com/problems/koko-eating-bananas/description/

var minEatingSpeed = function(piles, h) {
    
    var isValidSpeed = function(k)  {
            
        let x = 0
        for (let i=0; i<piles.length; i++) {
            x += Math.ceil(piles[i]/k)
        }

        if (x <= h) {
            return true
        } else return false
    }

    let startSpeed = 1
    let endSpeed = Math.max(...piles)

    let lowestValid = endSpeed

    while (startSpeed <= endSpeed) {

        let midSpeed = Math.floor((startSpeed + endSpeed) / 2)

        if (isValidSpeed(midSpeed)) {
            if (midSpeed < lowestValid) lowestValid = midSpeed
            endSpeed = midSpeed - 1
        } else {
            startSpeed = midSpeed + 1
        }
    }

    return lowestValid

};

// DYNAMIC PROGRAMMING PRACTICE

// Given 3 numbers {1, 3, 5}, The task is to tell the total number of ways we can 
// form a number N using the sum of the given three numbers. 
// (allowing repetitions and different arrangements).

/*
The total number of ways to form 6 is: 8
1+1+1+1+1+1
1+1+1+3
1+1+3+1
1+3+1+1
3+1+1+1
3+3
1+5
5+1
*/

const combos = num => {

    if (num < 0) {
        return 0
    }
    if (num === 0) {
        return 1
    }

    return combos(num - 1) + combos(num - 3) + combos(num - 5)

    // if (num <= 2) {
    //     return 1
    // }
    // if (num === 3) {
    //     return 2
    // }
    // if (num === 4) {
    //     return 3
    // }
    // if (num === 5) {
    //     return 5
    // }

}

// LINKED LISTS

// Given a linked list, print every element in order

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
    
var printAllListElements = function(head, n) {

    let prev = new ListNode(0, head)
    let curr = head

    while (prev.next !== null) {
        console.log(curr.val)
        prev = curr
        curr = curr.next
    }
};

// printAllListElements({
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: null
//                 }
//             }
//         }
//     }
// })

const addElementToLinkedList = function(head, n) {

    let node = head
    console.log(node.next)

    //traverse to last element
    while (node.next?.val) {
        node = node.next
    }

    node.next = new ListNode(6, null)

    return head
}

console.log(addElementToLinkedList(
    new ListNode(1,
        new ListNode(2,
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5, null)

    ))))
))

var reverseList = function(head) {
    
    let [ prev, curr, next] = [ null, head, null]

    while (curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};

// linkedlist -- https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers = function(l1, l2) {

    let output1 = []
    let output2 = []

    let total = 0
    let formattedArray = [[l1, output1], [l2, output2]]

    formattedArray.forEach(el => {
        let curr = el[0]
        while (curr !== null) {
            el[1].unshift(curr.val) // O(2n^2) complexity
            curr = curr.next
        }
        el[1] = +el[1].join("")
        total += el[1]
    })

    // 807 => [7, 0, 8]
    const listValues = (String(total).split("")).reverse().map(string => Number(string))

    let l3 = new ListNode(listValues[0])
    let curr = l3
    for (let i=1; i<listValues.length; i++) {
        curr.next = new ListNode(listValues[i])
        curr = curr.next
        console.log(l3, l3.next)
    }
    curr.next = null // optional

    return l3
};

// Merge two LinkedLists in ascending order https://leetcode.com/problems/merge-two-sorted-lists/description/

var mergeTwoLists = function(list1, list2) {

    console.log('list1: ', list1)
    console.log('list2: ', list2)

    let [curr1, curr2] = [list1, list2]

    if (!curr1 && !curr2) return null

    let hasSmallerFirstValue

    console.log(curr1, curr1?.val)

    if (curr1?.val <= curr2?.val || curr2 === null) {
        console.log('hitA')
        hasSmallerFirstValue = curr1
        curr1 = curr1?.next
    } else {
        console.log('hitB')
        hasSmallerFirstValue = curr2
        curr2 = curr2?.next
    }

    console.log('hasSmallerFirstValue', hasSmallerFirstValue)
    let list3 = new ListNode(hasSmallerFirstValue?.val, null)
    let curr3 = list3

    console.log('curr1', curr1, 'curr1.val', curr1?.val)
    while (curr1 || curr2) {
        if (curr1?.val <= curr2?.val || curr2 === null) {
            console.log('hit1')
            curr3.next = new ListNode(curr1.val, null)
            curr1 = curr1.next
        } else if (curr1?.val > curr2?.val || curr1 === null) {
            console.log('hit2')
            curr3.next = new ListNode(curr2.val, null)
            curr2 = curr2.next
        }
        curr3 = curr3?.next
        console.log('list3', list3, ', curr3', curr3)
    }

    return list3
}

// LinkedList alternating reordering: https://leetcode.com/problems/reorder-list/

var reorderList = function(head) {

    let duplicateHead = JSON.parse(JSON.stringify(head))
    // other ways to create deep copy of object:
        // let duplicateHead = {...head}
        // let duplicateHead = Object.assign({}, head)

    let result = getReverseListAndLength(duplicateHead)
    let reversedList = result[0]
    let listLength = result[1]

    console.log('head', head)
    console.log('reversedList', reversedList)

    const answer = mergeTwoLists(head, reversedList, listLength)
    console.log('answer', answer)
    return answer
};

var getReverseListAndLength = function(head) {

    let [prev, curr, temp] = [null, head, null]

    let count = 0

    while (curr !== null) {
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp

        count++
    }

    return [prev, count]
}

var mergeTwoLists = function(l1, l2, listLength) {

    console.log('l1', l1.next)

    let l3 = new ListNode(l1.val)

    let pointer1 = l1.next
    let pointer2 = l2
    let pointer3 = l3

    console.log('pointers 1,2,3', pointer1, pointer2, pointer3)

    let count = 1
    let alternator = false

    while (count < listLength) {
        if (alternator) { // add from l1
            pointer3.next = new ListNode(pointer1?.val)
            pointer3 = pointer3.next
            pointer1 = pointer1?.next
            alternator = false
        } else { // add from l2
            pointer3.next = new ListNode(pointer2?.val)
            pointer3 = pointer3.next
            pointer2 = pointer2?.next
            alternator = true
        }
        count++
    }

    return l3

    // declarations
        // counter
        // l3 -- as new instance of node class
        // pointers
    // we need the length of the list
    // while loop where we take turns adding to l3 from l1 and l2 -- until counter has reached length
}
