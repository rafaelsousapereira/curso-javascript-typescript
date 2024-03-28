const pessoa = {
  nome: 'João',
  sobrenome: 'da Silva',
  idade: 30,
  endereco: {
    rua: 'Av. Brasil',
    numero: 130
  }
};

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);