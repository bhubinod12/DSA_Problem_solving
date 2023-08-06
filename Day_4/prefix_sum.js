// prefix sum
// Q1: Find the preFix sum of the array.

/* function preFixSum(A) {
    let N = A.length;
    let PS = [];
    PS[0] = A[0];
    for (let i = 1; i < N; i++) {
        PS[i] = PS[i-1] + A[i];
    }
    return PS;
}
let arr = [1,2,3,4,5];
console.log(preFixSum(arr));*/

// Q2: You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.
// Return an integer array of length M where ith element is the answer for ith query in B.?
// input ex
// A = [1, 2, 3, 4, 5]
// B = [[0, 3], [1, 2]]
// Output 1:
// [10, 5]

// function QuerySum(A, B) {
//     let N = A.length;
//     let ansArr = [];
//     let len = B.length;
//     let PS = [];
//     PS[0] = A[0];
//     for (let i = 1; i < N; i++) {
//         PS[i] = PS[i-1]+A[i];
//     }
//     j = 0;
//     while (j < len) {
//         let s = B[j][0];
//         let e = B[j][1];
//         let sum = 0;
//         if (s == 0) {
//             sum = PS[e];
//         } else {
//             sum = PS[e] - PS[s-1];
//         }
//         j++;
//         ansArr.push(sum);
//     }
//     return ansArr;
// }
// let A = [1,2,3,4,5]
// B = [[0,2], [2,4]]
// console.log(QuerySum(A, B));


// Q3: Given an array. Return true if there exists an equilibrium index in the array:
// Input 1:
// A = [-7, 1, 5, 2, -4, 3, 0]
// Brute force
// function Equilibrium (A) {
//     let N = A.length;
//     for (let i = 0; i < N; i++) {
//         let leftS = 0;
//         let rgtS = 0;
//         for (let j = 0; j < i; j++) {
//             leftS+= A[j];
//         }
//         for (let k = i+1; k < N; k++) {
//             rgtS+= A[k];
//         }
//         if (leftS == rgtS) {
//             return true;
//         }
        
//     }
//     return false;
// }
// A = [1,2,3,4,8,10]
// console.log(A);
//
// Optimized way using prefix sum:
/* function Equilibrium (A) {
    let N = A.length;
    for (let i = 0; i < N; i++) {
        let leftS = 0;
        let rgtS = 0;
        leftS = PS[i-1];
        rgtS = PS[N-1] - PS[i];
        if (leftS == rgtS) {
            return true;
        }
        
    }
    return false;
} */
// Q4: You are given an array A of length N and Q queries given by the 2D array B of size Q×2.
// Each query consists of two integers B[i][0] and B[i][1].
// For every query, your task is to find the count of even numbers in the range from A[B[i][0]] to A[B[i][1]].
//input:
// A = -3, 6, 2, 4, 5, 2, 8, -9, 3, 1

// Q5: You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
// For every query, the task is to calculate the sum of all even indices in the range A[B[i][0]…B[i][1]].
// input:
// A = [1, 2, 3, 4, 5]
// B = [   [0,2] 
//         [1,4]   ]








