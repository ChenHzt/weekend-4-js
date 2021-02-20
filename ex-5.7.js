const shortestWord = (str) =>
  str
    .split(' ')
    .reduce(
      (min, current) => (min > current.length ? current.length : min),
      Infinity
    );

console.log(shortestWord('what is the shortest word length?'));
