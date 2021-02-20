const wordToWierdCase = (word) =>
  word
    .split('')
    .map((letter, index) => (index % 2 ? letter : letter.toUpperCase()))
    .join('');

const toWeirdCase = (str) => str.split(' ').map(wordToWierdCase).join(' ');

console.log(toWeirdCase(`Weird string case`));
