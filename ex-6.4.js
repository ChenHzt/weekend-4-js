const isIsogram = (str) => {
  const newStr = str.toLowerCase();
  return newStr
    .split('')
    .every((letter, index) => newStr.indexOf(letter) === index);
};
console.log(`isIsogram('Dermatoglyphics') = ${isIsogram('Der')}`);
console.log(`isIsogram('aba') = ${isIsogram('aba')}`);
console.log(`isIsogram('moOse') = ${isIsogram('moOse')}`);
