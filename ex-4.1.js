const fibo = (n, startArr=[1,1]) =>{
    const fiboArr = startArr;
    for( let i=2; i<n; i++)
    {
        fiboArr.push(fiboArr[0]+fiboArr[1])
        fiboArr.shift();
        
    }
    return fiboArr[1];
}

console.log(fibo(9));