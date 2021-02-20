const sumOfLowestIntegers = (arr) =>{
    let positives = arr.filter(elem => elem>=0);
    let sorted = positives.sort((a,b)=>a-b);

    let val1 = sorted.length > 0 ? sorted[0]: 0;
    let val2 = sorted.length > 1 ? sorted[1]: 0;
    
    return val1 + val2;
}
const res1 = sumOfLowestIntegers([19, 5, 42, 2, 77]);
console.log(`sum of lowest integers in the array [19, 5, 42, 2, 77] is ${res1}`);

const res2 = sumOfLowestIntegers([10, 343445353, 3453445, 3453545353453]);
console.log(`sum of lowest integers in the array [10, 343445353, 3453445, 3453545353453] is ${res2}`);