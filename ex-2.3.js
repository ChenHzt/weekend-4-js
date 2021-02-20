const isPerfectSquare = (num) => Number.isInteger(num**0.5);
const nextPerfectSquare = (num) => isPerfectSquare(num)? ((num**0.5)+1)**2 :-1;

console.log(`Next Perfect Square of 121 is ${nextPerfectSquare(121)}`);
console.log(`Next Perfect Square of 625 is ${nextPerfectSquare(625)}`);
console.log(`Next Perfect Square of 114 is ${nextPerfectSquare(114)}`);