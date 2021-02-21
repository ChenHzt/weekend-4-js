const countDuplicates = (str) => {
  const count = {};
  let res = 0;
  str
    .toLowerCase()
    .split('')
    .forEach((element) => (count[element] = (count[element] || 0) + 1));
  for (const [key, value] of Object.entries(count)) value > 1 ? res++ : null;
  return res;
};

console.log(countDuplicates('aabbcdcee'));
console.log(countDuplicates('Indivisibilities'));
