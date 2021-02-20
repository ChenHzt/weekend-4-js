const longestWord = (str) =>
  str
    .split(' ')
    .reduce((max, current) => (current.length > max.length ? current : max));

console.log(longestWord(`what is the longest word in the sentence`));
