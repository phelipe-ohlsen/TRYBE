//* Quando a Promise for bem-sucedida,
//* encadeie nela uma segunda Promise que some os elementos do array.

function exercise02() {
  const promise = new Promise((resolve,reject) => {
    const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
    const squaredSum = array.reduce((acc, number) => acc + (number * number), 0);
    (squaredSum < 8000) ? resolve(squaredSum) : reject();
  });
  promise
    .then(result => [2, 3, 5, 10].map(numb => result / numb))
    .then(result => result.reduce((acc, el) => acc + el))
    .then(showResult => console.log(showResult))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

exercise02();
