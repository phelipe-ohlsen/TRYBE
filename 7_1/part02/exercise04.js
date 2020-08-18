// ! Exercise 04

const replaceX = (str1,str2) => {
  let result = str1.split(' ');
  let index = 0;
  
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === 'x') {
      index = result.indexOf('x');
    }
  }

  result[index] = str2;
  result = result.join(' ');

  return result;
}

console.log(replaceX('Tryber x aqui!','Bebeto'));
