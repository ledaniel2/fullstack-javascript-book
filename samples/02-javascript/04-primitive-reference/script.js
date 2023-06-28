let str1 = 'Hello';
let str2 = str1;  // str2 is now 'Hello'
str1 = 'World';   // str1 is now 'World'

console.log(str1);  // 'World'
console.log(str2);  // 'Hello'

let obj1 = { greeting: 'Hello' };
let obj2 = obj1;          // obj2 refers to obj1
obj1.greeting = 'World';  // mutate obj1

console.log(obj1.greeting);  // 'World'
console.log(obj2.greeting);  // 'World'
