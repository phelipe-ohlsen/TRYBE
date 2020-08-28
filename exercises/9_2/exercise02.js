//* Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. 
//* Primeiramente, instancie uma Promise. Dentro dela, 
//* você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
//* Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, 
//* ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

//? Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

function exercise02() {
  const promise = new Promise((resolve,reject) => {
    const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);
    const squaredSum = array.reduce((acc, number) => acc + (number * number), 0);
    (squaredSum < 8000) ? resolve(squaredSum) : reject();
  });
  promise
    .then((result) => console.log(`Success! Result: ${result}`))
    .catch(() => console.log('failure'));
}

exercise02();
