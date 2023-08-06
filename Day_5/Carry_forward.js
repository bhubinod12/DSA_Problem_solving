// console.log('Hello');

// Q1: Given a string of lowercase alphalet. Return count of (i,j) such that 
// let str = 'abegag'
// i < j
// str[i] -> 'a'
// str[j] -> 'g'

// (i,j) such that (i < j)
// a, b, e, g, a, g
// (0,3)
// (0,5)
// (4,5)

// let str = 'abegag';
// Method 1: brute force
// function pairCount(str) {
//     let len = str.length;
//     let count = 0;
//     for (let i = 0; i < len; i++) {
//         if (str[i] == 'a') {
//             for (let j = i+1; j < len; j++) {
//                 if (str[j] == 'g') {
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }
// pairCount(str);
// ans = 0
// a, c, b, a, g, k, a, g, g
// 1  1  1  2  2  2  3  3  3
// 0  0  0  0  2  2  2  5  8
// i < j


// a, c, b, a, g, k, a, g, g

// function pairCount(str) {
//     let len = str.length;
//     let count_a = 0;
//     let ans = 0;
//     for (let i = 0; i < len; i++) {
//         if (str[i] == 'a') {
//             count_a++;
//         }
//         else if (str[i] == 'g') {
//             ans = ans+count_a;
//         }
//     }
//     return ans;
// }

// Q2:
// let arr = [1,2,3,1,3,4,6,4,6,3] -> [3,6]

// subarray
// [1]
// [1,3]
// [1,2,3]
// Min = 1, max = 6;
// [2,2,6,4,5,1,5,2,6,4,1] -> [8,10]

//  0 1 2 3 4 5 6 7 8 9 10

//  5 - 2 +1 = 4
//  (s , e) => e-s+1;

let arr = [1,6,2,3,1,3,4,6,4,6,3];
// min = 1
// max = 6
// [1,6] 
// ans = 2;
// let lastMinIndex = -1; 0
// let lastMaxIndex = -1;

// [1,2,3,0, 6, 4,10];

// function minLenSubArray(arr) {
//     let N = arr.length;
//     let max = Number.MIN_VALUE;
//     let min = Number.MAX_VALUE;
//     let lastMinIndex = -1;
//     let lastMaxIndex = -1;
//     for (let i = 0; i < N; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     // 
//     let ans = N;
//     for (let i = 0; i < N; i++) {
//         if (arr[i] == min) {
//             lastMinIndex = i;
//             if (lastMaxIndex >= 0) {
//                 if (ans > i-lastMaxIndex+1) {
//                     ans = i-lastMaxIndex+1
//                 }
//                 // ans = Math.min(ans,i-lastMaxIndex+1);
//             }
//         } if (arr[i] == max) {
//             lastMaxIndex = i;
//             if (lastMinIndex >= 0) {
//                 if (ans > i-lastMinIndex+1) {
//                     ans = i-lastMinIndex+1;
//                 }
//                 // ans = Math.min(ans, i-lastMinIndex+1)
//             }
//         }
//     }
//     return ans;
// }
// console.log(minLenSubArray(arr));
















