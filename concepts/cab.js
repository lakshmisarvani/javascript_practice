/*
call(), apply(), and bind() are built-in methods of Function.prototype in JavaScript. 
They are used to explicitly set the value of this for a function’s execution context. 
Normally, the value of this depends on how a function is invoked, but these methods allow us to manually control it.
The call() and apply() methods both invoke the function immediately with a specified this value.
The difference between them is that call() accepts arguments individually, while apply() accepts arguments as an array. 
On the other hand, bind() does not execute the function immediately; instead, it returns a new function with
this permanently bound to the provided object,which allows the function to be executed later
without losing its context.
*/
// const person={
//   name: "alice"
// };
// function details(age,city){
//   console.log(this.name+" "+age+" "+city);
// }
// details.call(person,25,"coimbatore");
// details.apply(person,[26,"hyderabad"]);
// const r=details.bind(person,25,"tamilnadu");
// r();

const user = {
  name: "Alice",
  // greet() {
  //   console.log(this.name);
  // }
};
function greet(){
  console.log(this.name);
}

setTimeout(greet.call(user), 1000);
// const user = {
//   name: "Alice",
//   greet() {
//     console.log("Hello, " + this.name);
//   }
// };

// // Normally, calling directly works
// user.greet();  // Output: Hello, Alice

// // But if we pass it as a callback:
// setTimeout(user.greet, 1000);  // Output: undefined (this lost)

// // Using bind to fix it
// const boundGreet = user.greet.bind(user);
// setTimeout(boundGreet, 1000);  // Output after 1 second: Hello, Alice


// //prototype chaining
// function Person() {}
// const p = new Person();
// console.log(p.__proto__ === Person.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);
// const person = {
//   name: "Alice"
// };

// function greet(age, city) {
//   console.log(this.name, age, city);
// }

// // call
// greet.call(person, 25, "NY");

// // apply
// greet.apply(person, [25, "NY"]);

// // bind
// const boundFn = greet.bind(person);
// boundFn(25, "NY");