// prefix sum
// Find the preFix sum of the array.

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

function QuerySum(A, B) {
    let N = A.length;
    let ansArr = [];
    let len = B.length;
    let PS = [];
    PS[0] = A[0];
    for (let i = 1; i < N; i++) {
        PS[i] = PS[i-1]+A[i];
    }
    j = 0;
    while (j < len) {
        let s = B[j][0];
        let e = B[j][1];
        let sum = 0;
        if (s == 0) {
            sum = PS[e];
        } else {
            sum = PS[e] - PS[s-1];
        }
        j++;
        ansArr.push(sum);
    }
    return ansArr;
}
let A = [1,2,3,4,5]
B = [[0,2], [2,4]]
console.log(QuerySum(A, B));

