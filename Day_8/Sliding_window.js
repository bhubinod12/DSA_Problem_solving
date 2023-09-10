// Q1) Given an array & a no K. find sum of all subarray of length k.
// let A = [-3,4,-2,5,3,-2,8,2,-1,4];
// let k = 5;
// -3,4,-2,5,3 -> 7
// 4,-2,5,3,-2 -> 8
// -2,5,3,-2,8 -> 12
// 5,3,-2,8,2 -> 16
// 3,-2,8,2,-1 -> 10
// -2,8,2,-1,4 -> 11

// Method 1:
// function subArraySum (A) {
//     let N = A.length;
//     let s = 0;
//     let e = k-1;
//     let sum;
//     while(e < N) {
//         sum = 0;
//         for (let i = s; i <= e; i++) {
//             sum+= A[i];
//         }
//         console.log(sum);
//         s++;
//         e++;
//     }
// }
// subArraySum(A);
// Method 2:
// Using prefix sum we can solve this in O(N);

// Method 3:Sliding window technique
// let A = [-3,4,-2,5,3,-2,8,2,-1,4];
// let k = 5;

// -3,4,-2,5,3
//    4,-2,5,3,-2
//      -2,5,3,-2,8
//         5,3,-2,8,2
//           3,-2,8,2,-1
//             -2,8,2,-1,4

// function subArraySum (A) {
//     let N = A.length;
//     let sum = 0, s, e;
//     for (let i = 0; i < k; i++) {
//         sum+= A[i];
//     }
//     console.log(sum);
//     s = 1;
//     e = k;
//     while(e < N) {
//         sum = sum - A[s-1] + A[e];
//         console.log(sum);
//         s++;
//         e++;
//     }
// }
// subArraySum(A);

// Q2 Given an array & a no K. find max sum of all subarray of length k.
// Q3 Given an array & a no K. find min sum of all subarray of length k.
// Q4 Given an array & a no K. find average of every window of length k.

// ==
// Q5 Given an array of size N & a number B. Return the minimum number of swaps 
// required to bring all elements together- less than or equal to B.

// let A = [1, 12, 10, 3, 14, 10, 5]; B = 8; -> 2 swap
// let A = [5,17,100,11]; B=20; -> 1 swap;

// let A = [7,12, 19, 11, 6, 5,9,14]; B = 8;

//  7 6 5 -> size -> 3
// let A = [7,12, 19, 11, 6, 9,14,5]; B = 8;
// 7,12, 19
// let swap = 2;
// swap = 3
// swap = 2
// swap = 0

// Q6 Given a matrix(N*M). print it in spiral form.

// 1  2  3  4   5
// 6  7  8  9  10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

// 1 2 3 4 5 10 15 20 25 24 23 22 21 16 11 6 7 8 9 14 19 18 17 12 13

// row = 0
// col = 0;
// while (N) {
//     for (let k = 1; k < N; k++) {
//         console.log(A[row][col]);
//         col++;
//     }
//     for (let k = 1; k < N; k++) {
//         console.log(A[row][col]);
//         row++;
//     }
//     for (let k = 1; k < N; k++) {
//         console.log(A[row][col]);
//         col--;
//     }
//     for (let k = 1; k < N; k++) {
//         console.log(A[row][col]);
//         row--;
//     }
//     row++;
//     col++;
// }









































