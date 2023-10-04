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















