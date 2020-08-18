// ! Exercise 01
// * Crie uma função que receba um número e retorne seu fatorial.

const factorial = (n) => {
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(4))
