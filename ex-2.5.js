const summation = (num) =>{
    const rangeArr = [...Array(num+1).keys()];
    return rangeArr.reduce((acc,current)=>acc+current); 
}

console.log(`Summation of 8 is ${summation(8)}`);
console.log(`Summation of 3 is ${summation(3)}`);
console.log(`Summation of 20 is ${summation(20)}`);