const peopleOnTheBus = arr =>{
    return arr.reduce((acc,current) => acc+current[0] - current[1],0);
}

console.log(peopleOnTheBus([[10,0],[5,8],[10,8]]));