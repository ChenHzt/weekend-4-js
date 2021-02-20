const binaryToDecimal = (arr) =>{
    const arrReversed = arr.reverse();
    const res = arrReversed.map((elem,index) => elem*(2**index));
    return res.reduce((acc,current)=>acc+current);
}

console.log(`decimal value of [1, 0, 1, 1] is ${binaryToDecimal([1, 0, 1, 1])}`);
console.log(`decimal value of [0, 1, 0, 1] is ${binaryToDecimal([0, 1, 0, 1])}`);