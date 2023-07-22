// Question :1 Given a no, write a fn that returns 1 if the number is a prime else return -1.
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