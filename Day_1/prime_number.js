// Question :1 Write a function and check if given input number is prime or not?
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