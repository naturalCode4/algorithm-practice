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