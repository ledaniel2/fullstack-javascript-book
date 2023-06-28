let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);  // '[ 1, 2, 3, 4, 5, 6 ]'

function foo(a, ...rest) {
  console.log(a);
  console.log(rest);
}

foo(1, 2, 3, 4);
