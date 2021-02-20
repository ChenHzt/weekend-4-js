const toCamelCase = str =>{
    const s = str.split(/[- _]+/);
    const first = s[0];
    const temp = s.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    temp[0] = first;
    return temp.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));