function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Cat(name) {
  Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function() {
  console.log('Meow!');
};

let whiskers = new Cat('Whiskers');
whiskers.eat();   // 'Whiskers is eating.'
whiskers.meow();  // 'Meow!'
