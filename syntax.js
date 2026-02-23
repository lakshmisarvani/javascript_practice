let nums = [1, 2, 3, 4];

let doubled = nums.map(num => num * 2);
console.log(doubled); 
// [2, 4, 6, 8]

//let nums = [1, 2, 3, 4, 5];
let evens = nums.filter(num => num % 2 === 0);
console.log(evens);
// [2, 4]


//let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);
// 10

