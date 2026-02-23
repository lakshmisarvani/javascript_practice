// Add your code here to implement counter using singleton principle
let counter=0;
class Counter{
    getInstance(){
        return this;
    }
    getCount(){
        return counter;
    }
    increment(){
        return ++counter;
    }
    decrement(){
        return --counter;
    }
}
// Do not remove below code
const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();

console.log(counter1 === counter2); // Should print: true

counter1.increment();
counter1.increment();
console.log(counter2.getCount()); // Should print: 2
counter2.decrement();
console.log(counter1.getCount()); // Should print: 1
