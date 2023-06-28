let a = 42;
console.log(a);  // '42'
a = 43;
console.log(a);  // '43'

const pi = 3.14;
// pi = 4;  // not allowed
const person = { name: 'John', surname: 'Doe' };
person.surname = 'Smith';  // this is allowed
console.log(person);  // '{ name: 'John', surname: 'Smith' }'

console.log(x);  // 'undefined'
var x = 5;
console.log(x);  // '5'

let assign_later;
console.log(assign_later);  // 'undefined'
assign_later = 0;
console.log(assign_later);  // '0'
