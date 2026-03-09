const add = x => x + 2;
const multiply = x => x * 3;

const compose = (f, g) => x => f(g(x));

const result = compose(multiply, add);

console.log(result(5)); // 21