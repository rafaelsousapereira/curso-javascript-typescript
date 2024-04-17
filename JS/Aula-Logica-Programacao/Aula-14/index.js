function returnCurrentTime(date) {
  if (!(date instanceof Date)) {
    throw new TypeError('Espera instância do tipo Date');
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const date = new Date('01-01-1970 00:04:59');
  const hour = returnCurrentTime(date);
  console.log(hour);
} catch (error) {
  console.error('Erro inesperado');
} finally {
  console.log('Tenha um bom dia!');
}