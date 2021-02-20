const mumbling = (str) =>
  str
    .split('')
    .map(
      (letter, index) =>
        letter.toUpperCase() + letter.toLowerCase().repeat(index)
    )
    .join('-');

console.log(`abcd => ${mumbling('abcd')}`);
console.log(`RqaEzty => ${mumbling('RqaEzty')}`);
console.log(`cwAt => ${mumbling('cwAt')}`);
