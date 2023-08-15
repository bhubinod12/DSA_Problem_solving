// SubArray
// A = [3, 4, 5,6,-2,8,10]
// [3,4] -> subarray
// [3,5,-2]-> Not a subArray
// [3]-> subarray
// []

// A = [4,2,10,3,12,-2,15]

// s    e
// 0    0     --> [4]
// 0    1     -->[4,2]
// 0    2     -->[4,2,10]
// 0    3     -->[4,2,10, 3]
// .
// .
// .
// 0    6     --> [4,2,,12,-2,1510, 3]

// # No of subarray:

// start from 0 index -----> N.
// start from 1 index -----> N-1
// start from 2 index -----> N-2
// start from 3 index -----> N-3
// // .
// // .
// // .
// start from N-1 index -----> 1
// ======
// Total subarray =>
// 1+2+3+4+...N-3+N-2+N-1+N = N*(N+1)/2
// [1,2,3] -> 6 subarray.


// Q1: Print all the vallue of a subarray starting at s and ending at e.

// function PrintSubArrayValue(A, s, e) {
//     while(s <= e) {
//         console.log(A[s]);
//         s++;
//     }
// }
// A = [4,2,10,3,12,-2,15]
// console.log(PrintSubArrayValue(A, 0,3));

// Q2: Return the sum of given subarray.

// function PrintSubArrayValue(A, s, e) {
//     let sum = 0;
//     while(s <= e) {
//         sum+= A[s];
//         s++;
//     }
//     return sum;
// }
// A = [4,2,10,3,12,-2,15]
// console.log(PrintSubArrayValue(A, 0,3));

// Q3 Print all subarray of a given array of size N;

// [1,2,3,4]
// 1,2,3,4
//   2,3,4
//     3,4
//       4

// function PrintSubArrayValue(A, s, e) {
//     while(s <= e) {
//         console.log(A[s]);
//         s++;
//     }
// }

// [1,2,3,4]
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// 2
// 2 3
// 2 3 4

// 3
// 3 4

// 4

// function PrintAllSubArray(A) {
//     let N = A.length;
//     for (let i = 0; i < N; i++) {
//         for (let j = i; j < N; j++) {
//             PrintSubArrayValue(A, i, j);
//             console.log('==============');
//         }
//     }
// }
// let arr = [1,2,3,4]
// PrintAllSubArray(arr);
// TC: O(N^3)

// Q4: Print the sum of every single subsarray of the given Array.
// let arr = [3,2,-1,4];

// s     e      subarray              sum
// 0     0         3                   3
// 0     1         3 2                 5
// 0     2         3 2 -1              4
// 0     3         3 2 -1 4            8
// 1
            
// function PrintSubArraySum(A, s, e) {
//     let sum = 0
//     while(s <= e) {
//         sum+= A[s];
//         s++;
//     }
//     return sum;
// }
// let arr = [3,2,-1,4];
// Method 1:
// function AddAllSubArray (A) {
//     let N = A.length;
//     for (let i = 0; i < N; i++) {
//         for (let j = i; j < N; j++) {
//             console.log(PrintSubArraySum(A, i, j));
//             console.log('==============');
//         }
//     }
// }
// AddAllSubArray(arr);
// TC: O(N^3);


// Method 2:
// let arr = [3,2,-1,4];

// function AddAllSubArray (A) {
//     let N = A.length;
//     for (let i = 0; i < N; i++) {
//         let sum = 0;
//         for (let j = i; j < N; j++) {
//             sum+= A[j];
//             console.log(sum);
//             console.log('========');
//         }
//     }
// }
// AddAllSubArray(arr);
// TC:O(N^2);

// Q4: Given an array, Find the sum of all possible susbarray sums.

// let arr = [3,2,-1,4];
// let arr = [1,2,3,4];
// 1                           1
// 1 2                         3
// 1 2 3                       6
// 1 2 3 4                    10
// ===============================
//                             20


// 2                           2
// 2 3                         5
// 2 3 4                       9
// ==============================
//                             16

                        
// 3                           3
// 3 4                         7
// 4                           4
// ==============================
// Total -> 50

// function addAllSum(A, s, e) {
//     let sum = 0;
//     while(s <= e) {
//         sum+= A[s];
//         s++;
//     }
//     return sum;
// }

// function AddAllSubArray (A) {
//     let N = A.length;
//     let sum = 0;
//     let ans = 0;
//     for (let i = 0; i < N; i++) {
//         for (let j = i; j < N; j++) {
//             ans+= addAllSum(A, i, j);
//         }
//     }
//     return ans;
// }
// let arr = [1,2,3,4];
// console.log(AddAllSubArray(arr));

// [1,2,3,4];
// s       e           subarray                sum

// 0       0               1                    1
// 0       1               1+2                  3
// 0       2               1+2+3                6
// 0       3               1+2+3+ 4             10

// 1       1               2                    2
// 1       2               2+3                  5
// 1       3               2+3+4                9

// 2       2               3                    3
// 2       3               3+4                  7

// 3       3               4                    4
// ===============================================
// 1+ 1+2 + 1+2+3 + 1+2+3+4
// 2 + 2+3 + 2+3+4
// 3 + 3+4
// 4
// ====
// 1+1+1+1     => 4*1
// 2+2+2+2+2+2 => 6*2
// 3+3+3+3+3+3 => 6*3
// 4+4+4+4     => 4*4
// ===================
// Total       ===> 50
// ===================
// [a, b] => b-a+1

// [3, -2, 4, -1, 2, 6];

// s       e               subarray
// 0       3               3 -2 4 -1
// 0       4               3 -2 4 -1 2
// 0       5               3 -2 4 -1 2 6

// 1       3               -2 4 -1
// 1       4               -2 4 -1 2
// 1       4               -2 4 -1 2 6

// 2       3                4 -1
// 2       4                4 -1 2
// 2       5                4 -1 2 6

// 3       3                -1
// 3       4                -1 2
// 3       5                -1 2 6
// =================================
// [a, b] => b-a+1
// Element at index i will be present in all subarray for which

// range from starting index  => s <= i => [0, i] => i-0+1 = i+1;
// ending index   => e >= i;  => [i , N-1] => N-1 - i +1 => N-i;
// Total = (i+1)*(N-i)

// Count of subarrays = (i+1)*(N-i) in which ith element is present

// function AddAllSubArray (A) {
//     let N = A.length;
//     let sum = 0;
//     for (let i = 0; i < N; i++) {
        // let count = (i+1)*(N-i);
//         sum+= count*A[i];
//     }
//     return sum;
// }
// let arr = [1,2,3,4];
// console.log(AddAllSubArray(arr));

// TC: O(N);

// Questions:
// 1) Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array
// and at least one occurrence of the minimum value of the array.

// 2 Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.
// NOTE: The rightmost element is always a leader.

// 3) Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
// 1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
// 2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
// Your task is to find the count of good subarrays in A.

// 4) You are given an integer array A of length N comprising of 0's & 1's, and an integer B.
// You have to tell all the indices of array A that can act as a center of 2 * B + 1 length 0-1 alternating subarray.
// A 0-1 alternating array is an array containing only 0's & 1's, and having no adjacent 0's or 1's. For e.g. arrays [0, 1, 0, 1], [1, 0] and [1] are 0-1 alternating, while [1, 1] and [0, 1, 0, 0, 1] are not.

// 5) Given an array A of N non-negative numbers and a non-negative number B,
// you need to find the number of subarrays in A with a sum less than B.
// We may assume that there is no overflow.

// 6) Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Return the maximum possible profit.

// 7) You are given a string S, and you have to find all the amazing substrings of S.
// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

// 8) Say the bulb is ON initially, after pressing the switch even number of times, what will be the final state of the bulb?

// 9) A wire connects N light bulbs.
// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.
// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.
// You can press the same switch multiple times.
// Note: 0 represents the bulb is off and 1 represents the bulb is on.

// 10) You are given an integer array A of size N.
// You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
// Find and return the maximum possible sum of the B elements that were removed after the B operations.

// NOTE: Suppose B = 3, and array A contains 10 elements, then you can:
// Remove 3 elements from front and 0 elements from the back, OR
// Remove 2 elements from front and 1 element from the back, OR
// Remove 1 element from front and 2 elements from the back, OR
// Remove 0 elements from front and 3 elements from the back.

// 11) Given an array of size 21, find the total number of subarrays of the array.

// 12) Given an array A of length N, return the subarray from B to C.

// 13) You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
// But the sum must not exceed B.

// 14) You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.























