// for...in

const frutas = ["Pêra", "Uva", "Manga"]

for (let index in frutas) {
  console.log(frutas[index])
}

const pessoa = {
  nome: 'Maria',
  idade: 23
}

for (let keys in pessoa) {
  console.log(keys, pessoa[keys])
}