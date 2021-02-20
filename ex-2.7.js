const calc = (operation,num1,num2)=>{
    switch(operation){
        case `+`:
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            if (num2===0)
            {
                console.log('a number cannot be devided by zero');
                return null;
            }
            return num1/num2;
    }
}

console.log(`1 + 1 = ${calc('+', 1, 1)}`);
console.log(`1 - 3 = ${calc('-', 1, 3)}`);
console.log(`2 * 7 = ${calc('*', 2, 7)}`);
console.log(`10 / 5 = ${calc('/', 10, 5)}`);
console.log(`10 / 0 = ${calc('/', 10, 0 )}`);