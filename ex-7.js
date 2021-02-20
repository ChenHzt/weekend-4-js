const myFilter = (arr, myCallback) => {
  const res = [];
  for (elem in arr) {
    myCallback(arr[elem]) ? res.push(arr[elem]) : null;
  }
  return res;
};

console.log(myFilter([1, 2, 3, 4, 5], (elem) => elem > 2));

const myForEach = (arr, myCallback) => {
  for (elem in arr) myCallback(arr[elem]);
};

myForEach([8, 9, 10], (elem) => console.log(`next is: ${elem}`));

const myMap = (arr, myCallback) => {
  const res = [];
  for (elem in arr) res.push(myCallback(arr[elem]));
  return res;
};

console.log(myMap([1, 2, 3, 4, 5], (elem) => elem * 2));
