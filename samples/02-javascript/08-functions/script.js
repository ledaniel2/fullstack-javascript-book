function add(x, y) {
  return x + y;
}

const add1 = function(x, y) { // Anonymous Function Expression
  return x + y;
};

const add2 = function addNumbers(x, y) { // Named Function Expression
  return x + y;
};

let add3 = (x, y) => x + y;

(function(x, y) {
  console.log(x + y);
})(5, 10);  // '15'

function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
