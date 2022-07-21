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

console.log(longestSubstring('jjjjj'))
console.log(longestSubstring('hello world'))
console.log(longestSubstring('cabc'))

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

const twoSum = function(nums, target) {
    
};