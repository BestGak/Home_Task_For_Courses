const idGenerator = createIdGenerator();

function* createIdGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
