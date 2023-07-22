// Question :1 Given a no, write a fn that returns 1 if the number is a prime else return -1.
// Method 1:
/* function isPrime (n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    }
    return false;
}*/
// method 2:

function isPrime(num) {
    let count = 0;
    for (let i = 1; i*i <= num; i++) {
        if (num%i == 0) {
            if (i*i == num) {
                count++;
            } else {
                count = count+2;
            }
        }
    }
    if (count ==2) {
        return 1;
    }
    return -1;
}
console.log(isPrime(5));
console.log(isPrime(10));

/* Question: 2
function factorCount(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      if (i * i == n) {
        count++;
      } else {
        count = count + 2;
      }
    }
  }
  return count;
}
console.log(factorCount(100));
*/
// Question 3: Find sqrt of perfect square number

/*function perfectSqrt(n) {
  for (let i = 1; i <= n; i++) {
    if (i * i == n) {
      return i;
    }
  }
}
*/

// Class_1[Question]

/* 1) Given an integer A, you need to find the count of it's factors. 
Factor of a number is the number which divides it perfectly leaving no remainder.

2) Given a number A.Return 1 if A is prime and return 0 if not. 

3) Given a number A.Return square root of the number if it is perfect square otherwise return -1.
Note: A number is a perfect square if its square root is an integer.

4) You are given an integer A, you need to find and return the sum of all the even numbers between 1 and A.
Even numbers are those numbers that are divisible by 2.

5) You are given two integers A and B.You have to find the value of A ^ B(A to power B).

6) You are given an integer A.You have to tell whether it is a perfect number or not.
	Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
	A proper divisor of a natural number is the divisor that is strictly less than the number.

7) You will be given an integer n.You need to return the count of prime numbers less than or equal to n.

8) You are given a function that takes an integer argument A.Return 1 if A is a perfect square otherwise return 0.

9) Given two integers A and B.A represents the count of mangoes and B represent the count of slices of mangoes.Mango can be cut into three slices of mangoes.A glass of mango shake can be formed by two slices of mangoes.
Find the maximum number of glasses of mango shakes you can make with A mangoes and B slices of mangoes initially.

10) You are given an integer A.You need to print all the Armstrong Numbers between 1 to A.
If sum of cubes of each digit of the number is equal to the number itself, then the number is called an Armstrong number.

For example, 153 = (1 * 1 * 1) + (5 * 5 * 5) + (3 * 3 * 3).
*/