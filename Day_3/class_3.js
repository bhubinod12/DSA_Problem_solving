
//[22-07-23]

// function MinTimeInSecond (arr) {
//     let N = arr.length;
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < N; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     let sum = 0;
//     for (let i = 0; i < N; i++) {
//         sum+= max-arr[i];
//     }
//     return sum
// }
// console.log(MinTimeInSecond([1,2,3,4]));

// function QuerySum(arr, B) {
//     let N = arr.length;
//     let ansArr = [];
//     let len = B.length;
//     let j = 0;
//     while (j < len) {
//         let s = B[j][0];
//         let e = B[j][1];
//         SumBasedOnIndex(arr, s, e);
//         j++;
//     }
//     return ansArr;

//     // 
//     function SumBasedOnIndex(arr, s, e) {
//         let sum = 0
//         while(s <= e) {
//             sum+= arr[s];
//             s++;
//         }
//         ansArr.push(sum);
//     }
    
// }
// let arr = [1,2,3,5,8,9]
// B = [[0,3],
// 	[1,3]
// ]

// console.log(QuerySum(arr, B));

// function GoodPairs(arr, B) {
//     let N = arr.length;
//     arr.sort((a,b) => {
//         return a-b;
//     })
//     let i = 0;
//     let j = N-1;
//     while (i < j) {
//         if (arr[i] + arr[j] == B) {
//             return 1;
//          } else if (arr[i] + arr[j] < B) {
//             i++;
//          } else {
//             j--;
//          }
//     }

//     return -1;
// }

// Math calcluation:
// ===
// log32 base 2-> 5

// 32/2 -> 16/2 -> 8/2 -> 4/2 -> 2/2->1


// log 1 base 2 -> 0

// log 3 base 2 -> 1.

// log a base a
// log2 base 2 -> 1

// [1,4]-> 1 2 3 4
// (1, 4) -> 2 3
// [1, 4) -> 1 2 3
// (1,4] -> 2 3 4

// [0,4] -> 5

// [a, b] -> b-a+1

// ===
// Airthmetic Progression:
// 4,7,10,13,16,19, 22, 25

// a, a+d, a + 2d, a+3d....a+(n-1)d

// a -> 1st term
// d -> common diff

// Sum of first n terms = N/2(2a+(N-1)d)

// 1+2+3+4+ .....N;
// a = 1
// d = 1

// N/2(2*1 + (N-1)*1) = N/2(2 + N -1) = N/2(N+1) => N*(N+1)/2

// ***Geometric Progression**

// 5 10 20 40 80 160...

// a, ar, ar^2 a*r^3....
// a-> first term
// r-> common ratio
// N -> No of terms

// Sum of first N term for GP -> a(r^n -1)/r-1, r > 1

// ===
// 2+3 = 5 -> O(1)

// function fn () {
// 	let s = 0;
// 	for (let i = 1, i <= N; i++) {
// 		s+= i;
// 	}
// 	return s;
// }

// O(N)
// ==
// function fn () {
// 	let s = 0;
// 	for (let i = 0; i <=100; i++) {
// 		s =s+i;
// 	}
// 	return s;
// }
// O(1);




// function fn (N) {
// 	let s = 0;
// 	for (let i = 1; i*i <=N; i++) {
// 		s =s+i;
// 	}
// 	return s;
// }
// O(Squrt(N))

// function fn (N) {
// 	i = N;
// 	while (i > 1) {
// 		i = i/2;
// 	}
// }
// N -> N/2 -> N/4 -> N/8 -> .....1

// N + N/2^1 + N/2^2 + N/2^3 ++......
// kth -> N/2^k -> 1

// N/2^k = 1;
// N = 2^k

// logN = log2^k base 2

// logN = k*(log2 base 2)
// logN = K
// K = logN;

// O(logN);
// ==

// for (let i = 0; i <= N; i*2) {
	
// }
// infinte.

// for (let i = 1; i < N; i*2) {
	
// }
// 1 2 4 8 16....2^k
// 2^k = N;
// k = logN;
// O(logN)

// ==
// for (let i =1; i<= 10; i++) {
// 	for (let j = 1; j <= N; j++) {
		
// 	}
// }
// i -> 1, 2 3 .....10
// j -> N + N + N+ N + N 10times

// N*10-> O(N)
// ===

// for (let i =1; i<= N; i++) {
// 	for (let j = 1; j <= N; j++) {
		
// 	}
// }

// i -> 1, 2 3 .....N
// j -> N + N + N+ N + N Ntimes
// N*N -> O(N^2)

// ==

// for (let i =1; i <=N; i++) {
// 	for (let j = 1; j < 2^i; j++) {
	
// 	}
// }
// i -> 1, 2 3 ... N
// j -> [1,2] ->2 -> 2^1
// j -> [1,4] ->4 -> 2^2
// j -> [1,8] ->8 -> 2^3


// j -> [1,8] ->8 -> 2^N

// 2 + 2^2+ 2^3 .....2^N
// ===


// O(1) < logN < Squrt(N) < N < NlogN < N*sqrt(N) < N^2 < N^3 <.....

// 4N^2+3N+ 6*squrt(N) + 9logn+ 10
// 4N^2 -> O(N^2);

// 1) What is the time complexity of the following code snippet
// for(int i = 1 ; i <= n ; i+=2){
// print(i);
// }

// 2) What is the time complexity of the following code snippet
// function fn(N, M){
// 	for(int i = 1 ; i <= N ; i++){
// 		if(N % i == 0)
// 			print(i);
// 	}
// for(int i = 1 ; i <= M ; i++){
// 	if(M % i == 0)
// 		print(i);
// 	}
// }

// 3) What is the time complexity of the following code snippet
// function func(int n){
// 	int s = 0;
// 	for(int i = 1 ; i <= 100 ; i++){
// 		s = s + i;
// 	}
// 	return s;
// }

// 4) What is the time complexity of the following code snippet

// function func(int n){
// 	int s = 0;
// 	for(int i = 0 ; i < n ; i = i * 2){
// 		s = s + i;
// 	}
// 	return s;
// }

// 5) What is the time complexity of the following code snippet
// for(int i = 1 ; i <= 100 ; i*=2){
// 	for(int j = 1 ; j <= n ; j++){
// 		print(i + j);
// 	}
// }

// 6) What is the time complexity of the following code snippet
// for(int i = 0 ; i < n ; i++){
// 	for(int j = 0 ; j <= i ; j++){
// 		print(i+j);
// 	}
// }

// 7) What is the time complexity of the following code snippet
// for(int i = 1 ; i <= n ; i*=2){
// 	for(int j = 1 ; j <= n ; j++){
// 		print(i + j);
// 	}
// }

// 8) What is the time complexity of the following code snippet
// int j = 0;
// for(int i = 0 ; i < n ; i++){
// 	while(j <= i){
// 		print(i + j);
// 	j++;
// 	}
// }

// 9) What is the time complexity of following code:
//  int a = 0, i = N; 
// while (i > 0) { 
//     a += i; 
//     i /= 2; 
// }
// 10) What is the time complexity of the following code snippet
// for(int i = 1 ; i <= n ; i++){
// 	for(int j = 1 ; j <= 3^i ; j++){
// 		print(i + j);
// 	}
// }

// 11) What is the time complexity of the following code snippet
// int func(int n){
// int s = 0;
// for(int i = 1 ; i*i*i <= n ; i++){
// 	s = s + i;
// }
// return s;

// }

// 12) What is the time complexity of the following code snippet
// for(int i = 1 ; i <= n ; i*=2){
// 	for(int j = 1 ; j <= n ; j++){
// 		print(i + j);
// 	}
// }

// 13) What is the time complexity of the following code snippet
// for(int i = 1 ; i <= n ; i+=2){
// 	print(i);
// }