//* Quando a promise for resolvida com sucesso, retorne o
//* resultado da divisão desse número por 2, 3, 5 e 10 em um array.

function exercise02() {
  const promise = new Promise((resolve,reject) => {
    const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
    const squaredSum = array.reduce((acc, number) => acc + (number * number), 0);
    (squaredSum < 8000) ? resolve(squaredSum) : reject();
  });
  promise
    .then((result) => [2, 3, 5, 10].map(numb => console.log(`Success! Result: ${result / numb}`)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

exercise02();
