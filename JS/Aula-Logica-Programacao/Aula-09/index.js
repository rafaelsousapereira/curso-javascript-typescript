// break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log('pulei o 2');
    continue;
  }

  if (numero === 7) {
    console.log('7 encontrado...');
    break;
  }

  console.log(numero);
}