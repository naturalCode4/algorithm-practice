// // function bitPositions(n, p1, p2) {
// //     const binary = n.toString(2)
// //     if (binary[binary.length-p1] === binary[binary.length-p2]) {
// //         return true
// //     } else {
// //         return false
// //     }
// // }
 
// // console.log(bitPositions(2,1,2))

// let arr = new Array(3).fill(new Array(3).fill(0));

// const SetRow = (i,x) => {
//     const newRow = arr[i].map(val => val = x)
//     arr[i] = newRow
// }

// const SetCol = (j, x) => {
//     for (let h=0; h<arr.length; h++) {
//         arr[h][j] = x
//     }
// }

// const QueryRow = i => {
//     let total = 0
//     for (let h=0; h<arr.length; h++) {
//         total += arr[i][h]
//     }
//     console.log(total)
// }

// const QueryCol = j => {
//     let total = 0
//     for (let h=0; h<arr.length; h++) {
//         total+=arr[h][j]
//     }
//     console.log(total)
// }

// SetRow(2,5)
// console.log(arr)
// SetCol(1,2.6)
// console.log(arr)
// QueryCol(1)


const numbers = [1,2,3,4,5]
const {one, two, three, four, five} = numbers

console.log(numbers)