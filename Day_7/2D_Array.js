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

















