// Q 1) Given an arr of size N. Given Q quries of s & e.
// for every query return the sum of all even indices elements in the range from s & e.
        
// let arr = [2,3,1,6,4,6];
// B = [[1,3],
// [2,5],
// [0,4],
// [3,5]]
// Q =4
// s    e      sum
// 1    3       1
// 2    5       5
// 0    4       7
// 3    5       4
// 3    3       0
// let arr = [2,3,1,6,4,6];
// PS = [2, 5, 6, 12, 16, 22]
// Q1 = [2,5] -> s = 2, e = 5

// PS[5] - PS[1] = 22 -5 = 17
// Prefix sum for even indices
// let arr = [2,3,1,6,4,6];
// 2 2 3 3 7 7
// function evenIndicesSum (A) {
//     let N = A.length;
//     let PS = [];
//     PS[0] = arr[0];
//     for (let i = 1; i < N; i++) {
//         if (i%2 != 0) {
//             PS[i] = PS[i-1];
//         } else {
//             PS[i] = PS[i-1] + arr[i];
//         }
//     }
// }
// PS = [2, 2, 3, 3, 7, 7]
// // Q1 = [0,4] -> s= 0, e = 4;
// ans  = PS[4];
// ans = 7;
// let arr = [2,3,1,6,4,6];
// OddPS = [0, 3, 3, 9, 9, 15]

// Q2 Given an array, Count number of special indices in the array.
// Special index: after removing which 
// Sum of all even indexed elements == Sum of all odd indexed elements
// index:   0 1 2 3 4  5
// A =     [4,3,2,7,6,-2];
// index:  0 1 2 3 4           Se          So
//         3 2 7 6 -2 ==>      8           8       special index:
//         4 2 7 6 -2 ==>      9           8           No
//         4 3 7 6 -2 ==>      9           9       special index:
    //  0 1 2 3 4  5 6  7 8  9
A = [2, 3, 1, 4, 0, -1, 2, -2, 10, 8];

// sum of odd indxed elements of the remaining index 3:
//     sum of odd indxed elements from 0 to 2
//             3
//             +
//     sum of even indxed elements from 4 to 9
//         0+2+10 => 12


// PSe -> Even indexed elememts.
// PSo -> Odd indexed elements.


// Se[0 , i-1] = PSe[i-1];
// So[0, i-1] = PSo[i-1];
// Se[i+1, N-1] = PSe[N-1] - PSe[i];
// So[i+1, N-1] = PSo[N-1] - PSo[i];

// Even preFix -> O(N)
// Odd preFix -> O(N)
// ->2N+N -> 3N
// O(N)
// let ans = 0;

// for (let i = 0; i < N; i++) {
//     SumEvenIndex[0, i-1]
//     SumEvenIndex[i+1, N-1] -> 
// }

// Q3// Majority elements
// Given an array of +ve numbers. Return if there exists an element with frequency > N/2 (where N is length of the array)
// A = [1, 6, 1, 1, 2, 1];
// N = 6;

// Question:
// Q4:You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
// For every query, the task is to calculate the sum of all even indices in the range A[B[i][0]…B[i][1]].

// First argument A is an array of integers. Second argument B is a 2D array of integers.
// Input 1:
// A = [1, 2, 3, 4, 5]
// B = [   [0,2] 
//         [1,4]   ]

// Output 1:
// [4, 8]

// Q4 You are given an array A of length N and Q queries given by the 2D array B of size Q*2. Each query consists of two integers B[i][0] and B[i][1].
// For every query, the task is to calculate the sum of all odd indices in the range A[B[i][0]…B[i][1]].

// Input 1:
// A = [1, 2, 3, 4, 5]
// B = [   [0,2] 
//         [1,4]   ]
// Output 1:
// [2, 6]

// Q5: Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
// Input 1:
// A=[2, 1, 6, 4]

// Output 1:
// 1

// Q5: Given an array of size N, find the majority element. The majority element is the element that appears more than floor(n/2) times.
// You may assume that the array is non-empty and the majority element always exists in the array.

// Input 1:
// [2, 1, 2]

// Q6: You're given a read-only array of N integers. Find out if any integer occurs more than N/3 times in the array in linear time and constant additional space.
// If so, return the integer. If not, return -1.

// If there are multiple solutions, return any one.

// Note: Read-only array means that the input array should not be modified in the process of solving the problem
// Input 1:
// [1 2 3 1 1]

// Output 1:
// 1















