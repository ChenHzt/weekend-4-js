const maskify = (str) =>
  str.length <= 4 ? str : '#'.repeat(str.length - 4) + str.slice(-4);

console.log(maskify('4554556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify('Nananananananananananananananana Batman!'));
