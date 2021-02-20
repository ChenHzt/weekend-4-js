const findCentury = (year) => Math.ceil(Math.abs(year) / 100) * Math.sign(year);

console.log(`findCentury(1990)=${findCentury(1990)}`);
console.log(`findCentury(-100)=${findCentury(-100)}`);
console.log(`findCentury(-2)=${findCentury(-2)}`);
console.log(`findCentury(1800)=${findCentury(1800)}`);