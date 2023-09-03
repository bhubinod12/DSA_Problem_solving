// 2D_Array:

// 4*4 
// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33
// last coloumn -> 03 -> first row and last coloumn
// last row -> 30 -> last row and first coloumn.

// n*m - >
// Last row -> n-1;
// last coloumn -> m-1;

// let A1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// A[0][0] = 1
// A[0][1] = 2
// A[0][2] = 3
// Q1) For the given 2D array print all the Element.

// function PrintArrElement(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;
//     for (let i = 0; i < rowL; i++) {
//         for (let j = 0; j < colL; j++) {
//             console.log(arr[i][j]);
//         }
//         if (i < rowL-1) {
//             console.log('=========');
//         }
//     }
// }
// console.log(PrintArrElement(A1));

// Q2) For the given 2D array print the sum of each row element.
// let A1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// function PrintEachRowSum(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;
//     let sum = 0;
//     for (let i = 0; i < rowL; i++) {
//         sum = 0;
//         for (let j = 0; j < colL; j++) {
//             sum+= arr[i][j];
//         }
//         console.log(sum);
//     }
// }
// console.log(PrintEachRowSum(A1));

// Q3) For the given 2D array print the sum of each column-wise element.

// Q)4 For the given 2D square matrix of size n*n, print the diagonal element(Left top -> Bottom right).

// let A1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// 00 01 02
// 10 11 12
// 20 21 22
// Method:1
// function PrintMainDiagonalElement(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;

//     for (let i = 0; i < rowL; i++) {
//         for (let j = 0; j < colL; j++) {
//             if (i == j) {
//                 console.log(arr[i][j]);
//             }
//         }
        
//     }
// }
// console.log(PrintMainDiagonalElement(A1));

// Method 2:
// let A1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// function PrintMainDiagonalElement(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;

//     for (let i = 0; i < rowL; i++) {
//         console.log(arr[i][i]);
//     }
// }
// console.log(PrintMainDiagonalElement(A1));


// Q)5 For the given 2D square matrix of size n*n, print the Anti diagonal element(right top -> Bottom left).

// let A1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// function PrintMainDiagonalElement(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;
//     let i = 0;
//     let j = colL-1;

//     while(i < rowL && j >= 0) {
//         console.log(arr[i][j]);
//         i++;
//         j--;
//     }
    
// }
// console.log(PrintMainDiagonalElement(A1));


// Q)6 Given a matrix of (N*N). print all element above the diagonal(top left -> bottom right).
// let A1 = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33

// function PrintAllElementAboveDiagonal(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;

//     for (let i = 0; i < rowL-1; i++) {
//         for (let j = i+1; j < colL; j++) {
//             console.log(arr[i][j]);
//         }
//         console.log('=========');
//     }
// }
// console.log(PrintAllElementAboveDiagonal(A1));

// Q)7 Given a Sq matrix of size (N*N). Convert- it into its transpose matrix.

// let A1 = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ]

// 1,5,9, 13
// 2,6,10,14
// 3,7,11,15
// 4,8,12,16

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33

// function ConvertToTranspose(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;

//     for (let i = 0; i < rowL-1; i++) {
//         for (let j = i+1; j < colL; j++) {
//             let temp = arr[i][j];
//             arr[i][j] = arr[j][i];
//             arr[j][i] = temp;
//         }
//         console.log('=========');
//     }
//     return arr;
// }
// console.log(ConvertToTranspose(A1));

// Q8) Given a Sq matrix of size (N*N). Rotate the matrix by 90 degree in clockwise direction.
let A1 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
// n2:

// Transpose of A1:
// [1, 5, 9, 13]
// [2, 6, 10, 14]
// [3, 7, 11, 15]
// [4, 8, 12, 16]
// Reverse of each row will get the answer matrix
// n2:

// n2+n2 = 2n^2 = > O(n^2)

// 13 9 5 1
// 14 10 6 2
// 15 11 7 3
// 16 12 8 4

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33

// function ConvertTo90degreeClockWise(arr) {
//     let rowL = arr.length;
//     let colL = arr[0].length;

//     for (let i = 0; i < rowL-1; i++) {
//         for (let j = i+1; j < colL; j++) {
//             let temp = arr[i][j];
//             arr[i][j] = arr[j][i];
//             arr[j][i] = temp;
//         }
//         console.log('=========');
//     }
//     return arr;
// }
// console.log(ConvertTo90degreeClockWise(A1));

// Reverse of each row will get the answer matrix

// ==Questions added==

// 1) You are given a 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.
// Input:
// [1,2,3,4]
// [5,6,7,8]
// [9,2,3,4]

// Output 1:
// [15,10,13,16]

// 2) First argument A is a 2D array of integers.(2D matrix).Return an array containing row-wise sums of original matrix.
// Input 1:
// [1,2,3,4]
// [5,6,7,8]
// [9,2,3,4]

// Output 1:
// [10,26,18]

// 3) You are given a N X N integer matrix. You have to find the sum of all the main diagonal elements of A.
// Main diagonal of a matrix A is a collection of elements A[i, j] such that i = j.

// 4) You are given a N X N integer matrix. You have to find the sum of all the minor diagonal elements of A.
// Input 1:
// A = [[1, -2, -3],
// 	  [-4, 5, -6],
// 	  [-7, -8, 9]]

// Output 1:
// -5
// 5) Give a N * N square matrix A, return an array of its anti-diagonals. Look at the example for more details.
// Return a 2D integer array of size (2 * N-1) * N, representing the anti-diagonals of input array A.
// The vacant spaces in the grid should be assigned to 0.

// Input 1:
// 1 2 3
// 4 5 6
// 7 8 9

// Output 1:
// 1 0 0
// 2 4 0
// 3 5 7
// 6 8 0
// 9 0 0

// 6) First argument is a 2D matrix of integers. You have to return the Transpose of this 2D matrix.
// A = [[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// 	]
// Output 1:

// [[1, 4, 7], 
// [2, 5, 8], 
// [3, 6, 9]
// ]

// 7) You are given a n x n 2D matrix A representing an image. Rotate the image by 90 degrees (clockwise).
// Return the 2D rotated matrix.
// Input 1:
// [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]
// ]

// Output 2:

//  [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
//  ]
 
// 8) You are given a matrix A and and an integer B, you have to perform multiplication of matrix A with an integer B.

// Input Format
// First argument is 2D array of integers A representing matrix.
// Second argument is an integer B.

// Output Format
// You have to return a 2D array of integers after doing required operations.

// Input 1:
// A = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// B = 2

// Output 1:
// [[2, 4, 6], 
// [8, 10, 12], 
// [14, 16, 18]]

// 9) You are given two matrices A and B of equal dimensions and you have to check whether two matrices are equal or not.
// NOTE: Both matrices are equal if A[i][j] == B[i][j] for all i and j.
// Return 1 if both matrices are equal or return 0.

// Input 1:

// A = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// B = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
	 
// 10) You are given two matrices A & B of same size, you have to return another matrix which is the sum of A and B.
// Note: Matrices are of same size means the number of rows and number of columns of both matrices are equal.

// Input 1:
// A = [[1, 2, 3],   
//      [4, 5, 6],   
//      [7, 8, 9]]  

// B = [[9, 8, 7],   
//      [6, 5, 4],   
//      [3, 2, 1]]
// Output 1:
// [[10, 10, 10],   
//  [10, 10, 10],   
//  [10, 10, 10]]
 
// 11) You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M). You have to subtract matrix B from A and return the resultant matrix. (i.e. return the matrix A - B).

// Input 1:

// A =  [[1, 2, 3], 
//       [4, 5, 6], 
//       [7, 8, 9]]

// B =  [[9, 8, 7], 
//       [6, 5, 4], 
//       [3, 2, 1]]
	  
// Output 1:

//  [[-8, -6, -4],
//   [-2, 0, 2],
//   [4, 6, 8]]

// 12) You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.

// Input 1:
// [1,2,3,4]
// [5,6,7,0]
// [9,2,0,4]

// Output 1:
// [1,2,0,0]
// [0,0,0,0]
// [0,0,0,0]


















