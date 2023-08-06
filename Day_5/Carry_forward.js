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

// Q2: Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array
// and at least one occurrence of the minimum value of the array.
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

// let arr = [1,6,2,3,1,3,4,6,4,6,3];
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
//         } 
//            if (arr[i] == max) {
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
// Q3: Given an integer array A containing N distinct integers, you have to find all the leaders in array A. 
// An element is a leader if it is strictly greater than all the elements to its left side.

 let A = [2,5,3,4,17,16];
//  2 -> leader
//  5 -> leader
//  3 -> no
//  17 -> leader
//  A[i] > (0, i-1)
// ==
// 2 5 3 4 17 16

// max 2  5 17
// ans 1  2 3
// ans = 3


// Questions:
// 4) Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Return the maximum possible profit.

// 5) You are given a string S, and you have to find all the amazing substrings of S.
// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).
// str = 'ABEC'
// ans -> 6

// 6) A wire connects N light bulbs.
// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.
// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.
// You can press the same switch multiple times.
// Note: 0 represents the bulb is off and 1 represents the bulb is on.

// 7) You are given an integer array A of size N.
// You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
// Find and return the maximum possible sum of the B elements that were removed after the B operations.
// NOTE: Suppose B = 3, and array A contains 10 elements, then you can:
// Remove 3 elements from front and 0 elements from the back, OR
// Remove 2 elements from front and 1 element from the back, OR
// Remove 1 element from front and 2 elements from the back, OR
// Remove 0 elements from front and 3 elements from the back.


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/

// 

















