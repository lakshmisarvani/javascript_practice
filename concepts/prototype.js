function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello " + this.name);
};

const user = new Person("John");

user.sayHello();