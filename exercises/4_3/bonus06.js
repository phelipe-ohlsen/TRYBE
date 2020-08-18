let n = 19;
let isPrime = true;

for (let i = n-1; i > 1 ; i--) {

  if (n % i == 0) {
    isPrime = false;
    break;
  }

}

console.log(isPrime)