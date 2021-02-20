const countDuplicates = (str) => {
  const count = {};
  let res = 0;
  str
    .toLowerCase()
    .split('')
    .forEach((element) => (count[element] = (count[element] || 0) + 1));
  count.forEach((element) => (element > 1 ? (res += 1) : null));
  return res;
};

console.log(countDuplicates('aabbcdcee'));
