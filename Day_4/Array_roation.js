// Method:1-> brute force
/*function arrayRotation(arr, B) {
    let N = arr.length;
    while (B > 0) {
        let temp = arr[N-1];
        let j = N-2;
        while(j >= 0) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[0] = temp;
        B--;
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7,8];
B = 3;
console.log(arrayRotation(arr, B));*/
//

/* function arrayRotation(arr, B) {
    let N = arr.length;
    function reverse(arr, s, e) {
        let N = arr.length;
        while(s <= e) {
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
        return arr;
    }
    reverse(arr, 0, N-1);
    reverse(arr, 0, B-1);
    reverse(arr, B, N-1);
    return arr;
}
let arr = [1,2,3,4,5,6,7,8, 9];
B = 3;
console.log(arrayRotation(arr, B))
*/

