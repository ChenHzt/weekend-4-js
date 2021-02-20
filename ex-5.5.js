const initials = (str) =>
  str
    .split(' ')
    .map((current) => current.charAt(0).toUpperCase())
    .join('.');

console.log(initials('Sam Harris'));
console.log(initials('Patrick Feeney'));
