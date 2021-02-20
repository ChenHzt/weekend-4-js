const tribonacci = (n, startArr=[1,1,1]) =>{
    const fiboArr = startArr;
    for( let i=3; i<n; i++)
    {
        fiboArr.push(fiboArr[0]+fiboArr[1]+fiboArr[2])
        fiboArr.shift();
        
    }
    return fiboArr[2];
}

console.log(tribonacci(7,[0,1,1]));