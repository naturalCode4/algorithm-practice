// Given a string, find the length of the longest substring with unique characters.
// 'hello world' => 6
// 'abca' => 3
// 'jjjjjjj' => 1

function longestSubstring(string) {

    if (string.length === 0) {
        return 0
    }

    let longest = 0
    let currentLength = 0
    let currentSubstring = []

    for (let i=0; i<string.length; i++) {
        if (!currentSubstring.includes(string[i])) { 
            currentLength++
            if (currentLength > longest) {
                longest = currentLength
            }
        currentSubstring.push(string[i])
        } else {
            const replaceIndex = currentSubstring.indexOf(string[i])
            currentSubstring = [...currentSubstring.slice(replaceIndex + 1), string[i]]
            currentLength = currentSubstring.length

        }
        console.log('longest: ', longest, 'currentLength: ', currentLength, 'currentSubstring: ', currentSubstring)
    }
    return longest
}

// console.log(longestSubstring('jjjjj'))
// console.log(longestSubstring('hello world'))
// console.log(longestSubstring('cabc'))

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

const twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<nums.length; j++) {
            if (i != j) {
                if (nums[i] + nums[j] === target) {
                    return [i,j]
                }
            }
        }
    }
    return 'no two numbers added up to the target!'
};

console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,2,4,5,1111], 1115))

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missingNumber = function(nums) {
    for (let i=0; i<=nums.length; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
}

console.log(missingNumber([0,1,2,4]))
console.log(missingNumber([0,1,3]))
console.log(missingNumber([0,2]))

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string

const longestCommonPrefix = (strs) => {
    let prefix = []
    let stringIndex = 0
    const smallestLengthString = 5
    while (strs[0][stringIndex]) {
        let letter = strs[0][stringIndex]
        let matches = true
        for (let i=0; i<strs.length; i++) {
            if (strs[i][stringIndex] !== letter) {
                matches = false
            }
        }
        console.log('stringIndex: ', stringIndex, matches)
        if (matches) {
            prefix.push(strs[0][stringIndex])
        } else {
            if (prefix === []) {
                console.log('boop')
                return ""
            }
            return prefix.join('')
        }
        stringIndex++
    }
    return prefix.join('')
}

console.log(longestCommonPrefix(["flower","flow","floight"]))
console.log(longestCommonPrefix(["","fffffa","ffffffff"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))

const longestCommonPrefix2 = function(strs) {
    let prefix = ""
    for (let i=0; i<strs.length; i++) {
        let char = strs[0][i]
        for (let j=1; j<strs.length; j++) {
            if (strs[j][i] !== char) return prefix
        }
        prefix += char
    }
    return prefix
}

console.log(longestCommonPrefix2(["flower","flow","floight"]))
console.log(longestCommonPrefix2(["fff","fffffa","ffffffff"]))
console.log(longestCommonPrefix2(["dog","racecar","car"]))

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate (nums) {
    while (nums.length > 1) {
        let currentNum = nums.splice(0,1)[0]
        if (nums.includes(currentNum)) return true
    }
    return false
}

console.log(containsDuplicate([1,2,3,4,5]))
console.log(containsDuplicate([1,2,3,2,5]))

// Given an m x n matrix, return all elements of the matrix in spiral order.
// Example:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]


const spiralOrder = function(matrix) {
    
    const m = matrix.length
    const n = matrix[0].length
    
    let [xa,xb,ya,yb]=[0,n-1,0,m-1]
    let a = []    
        
    // while (xa<n/2 && ya<m/2) {
    while (a.length<m*n) {
        for (let x=xa; x<=xb; x++) {
            a.push(matrix[ya][x])
            console.log(a,1)
        }
        
        ya++
        for (let y=ya; y<=yb; y++) {
            a.push(matrix[y][xb])
            console.log(a,2)

        }
        
        xb--
        if (a.length<m*n) {
            
            for (let x=xb; x>=xa; x--) {
                a.push(matrix[yb][x])
                console.log(a,3)
                console.log(xa,xb,ya,yb)
            }

            yb--
            for (let y=yb; y>=ya; y--) {
                a.push(matrix[y][xa])
                console.log(a,4)
            }

            xa++
        }
    }
    return a
};


// pseudocode:

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

// let h = Math.Max(a,b)