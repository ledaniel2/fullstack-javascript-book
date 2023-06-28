function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

let alice = new Person('Alice', 25);
alice.greet();  // 'Hello, my name is Alice and I'm 25 years old.'
