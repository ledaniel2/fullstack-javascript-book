for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}  // '0 1 2 3 4'

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}  // '0 1 2 3 4'

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);  // '0 1 2 3 4'

for (let i = 0; i < 5; i++) {
  console.log(i);
}  // '0 1 2 3 4'

let person = {fname: "John", lname: "Doe", age: 25};

for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}

let array = [1, 4, 2, 5, 3];

for (let value of array) {
  console.log(value);
}  // '1 4 2 3 5'
