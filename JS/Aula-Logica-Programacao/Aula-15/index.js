function returnCurrentTime() {
  let date = new Date();

  return date.toLocaleTimeString('pt-BR', {
    hour12: false
  })
}

const timer = setInterval(function () {
  console.log(returnCurrentTime());
}, 1000);

setTimeout(function () {
  clearInterval(timer)
}, 3000);

setTimeout(function () {
  console.log('Olá mundo!');
}, 5000);