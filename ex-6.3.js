const organizeStrings = (s1, s2) => {
  const set = new Set();
  s1.concat(s2)
    .split('')
    .forEach((letter) => set.add(letter));
  return Array.from(set).sort().join('');
};

console.log(organizeStrings(`xyaabbbccccdefww`, `xxxxyyyyabklmopq`));
