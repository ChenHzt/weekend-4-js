const unique = arr =>{
    const sorted = arr.sort();
    return sorted[0] === sorted[1] ? sorted[sorted.length -1] : sorted[0];  
}

console.log(`the unique number in the array [ 1, 1, 1, 2, 1, 1 ] is ${unique([ 1, 1, 1, 2, 1, 1 ])}`);
console.log(`the unique number in the array [ 0, 0, 0.55, 0, 0 ] is ${unique([ 0, 0, 0.55, 0, 0 ])}`);