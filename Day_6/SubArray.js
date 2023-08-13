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






















