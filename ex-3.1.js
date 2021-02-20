const growthOfPopulation = ( p0, percent,aug ,p) =>{
    let current = p0;
    percent = percent/100 + 1;
    let yearsPassed = 0;
    while (current < p && yearsPassed<20){
        current  = Math.floor(current * percent + aug);
        yearsPassed ++;
    }
    return yearsPassed;
}

console.log(`nb_year(1500, 5, 100, 5000)= ${growthOfPopulation(1500, 5, 100, 5000)}`);
console.log(`nb_year(1500000, 2.5, 10000, 2000000)= ${growthOfPopulation(1500000, 2.5, 10000, 2000000)}`);
console.log(`nb_year(1000, 2, 50, 1200)= ${growthOfPopulation(1000, 2, 50, 1200)}`);