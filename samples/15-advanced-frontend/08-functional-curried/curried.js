const curriedMultiply = a => b => a * b;
const double = curriedMultiply(2);
const result = double(3);
console.log(result)  // '6'
