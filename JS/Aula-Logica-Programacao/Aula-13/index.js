function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('"x" e "y" precisam ser números');
  }

  return x + y;
}

try {
  console.log(sum(1, 4));
  console.log(sum("1", 4));
} catch (err) {
  console.log("Você digitou uma string, só deve ser números");
  console.error(err)
}