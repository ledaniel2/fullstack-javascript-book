const hello = function() { return "Hello, World!"; };

function greet(helloFn) {
  console.log(helloFn());
}

greet(hello);  // 'Hello, World!'
