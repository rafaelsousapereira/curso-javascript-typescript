// while e do...while

function random(min, max) {
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('--------------');

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);