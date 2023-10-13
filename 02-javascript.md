# Chapter 2: JavaScript Essentials: From Novice to Fullstack

## Writing JavaScript

### Source Conventions

JavaScript source files are plain text files which usually use a `.js` file extension. Line endings can be LF (Line Feed) or CR-LF (Carriage Return and Line Feed) while indentation can include either spaces or Tabs.  It's a good practice to standardize this across a project, typically choosing LF as the standard line ending and two or four spaces per indent level. Tools like Git can also handle line ending conversions when checking out and committing files, which is useful if different operating systems are used for working on the project.

UTF-8 is the dominant character encoding for the web and is recommended for JavaScript files. It supports all Unicode characters, which includes almost all written languages and various symbols. This makes it very versatile and ensures that your scripts can handle any text they come across. Also, JavaScript itself is defined as using Unicode, and UTF-8 is a way of encoding Unicode text.

Including a Byte Order Mark (BOM) is not typically needed for JavaScript sources and can sometimes lead to issues. It's more relevant for UTF-16 or UTF-32 encodings, which have multiple ways of ordering bytes. Most modern text editors, IDEs, and JavaScript environments handle UTF-8 encoding without a BOM correctly, so it's generally safe to exclude it.

### Getting Started with JavaScript

To start writing JavaScript, all you need is a web browser and a text editor. JavaScript code can be loaded and executed in quite a large number of different ways:

1. **Script Tags**: In an HTML file, JavaScript can be included within `<script>` tags, which is known as "inline" JavaScript. The JavaScript code is then executed when the HTML page is loaded in a web browser. In this example the JavaScript code adds content to the `<p>` element with id `"demo"` by manipulating the DOM:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

</body>
</html>
```

2. **External JavaScript Files**: JavaScript code can also be placed in external `.js` files and linked to HTML using the `src` attribute in a `<script>` tag. This is often preferable for larger scripts or when the same script is used across multiple pages.

```html
<script src="script.js"></script>
```

3. **Inline Event Handlers**: JavaScript can be run as part of inline event handlers, such as `onclick` or `onload`. In this example, clicking the button causes a popup window to open:

```html
<button onclick="alert('Hello, world!');">Click Me!</button>
```

4. **Node.js**: Node.js is a runtime that allows you to run JavaScript on either your server or your local computer. You can create a `.js` file and run it non-interactively using the `node` command:

```bash
node script.js
```

5. **Node.js REPL**: REPL stands for Read-Eval-Print Loop. It's a simple, interactive programming environment into which you can type JavaScript statements or functions, line-by-line, and have them execute directly in the console. If you have Node.js installed, you can start the REPL by simply running the `node` command without any arguments in your command line:

```bash
node
> [Type JavaScript code here...]
```

6. **Browser Developer Tools**/**Console**: Most web browsers have built-in developer tools, which include a JavaScript console. You can write and execute JavaScript code directly in this console, inspecting variables, calling individual functions within scripts loaded by the page, or even manipulating the DOM interactively. In Chrome, for example, you can open the console by right-clicking on a web page, selecting "Inspect", and then navigating to the "Console" tab.

7. **JavaScript Online Editors**: There are many online platforms where you can write and run JavaScript directly in your web browser, without needing to set up a local development environment. Some examples include JSFiddle, CodePen, and Repl.it.

8. **Web Workers and Service Workers**: Web Workers and Service Workers run JavaScript in the background, separate from the main browser thread. This allows you to perform computationally heavy or asynchronous tasks without blocking the user interface.

9. **JavaScript in Mobile App Development Frameworks**: JavaScript can also be used in mobile app development frameworks like React Native, NativeScript or Ionic. These frameworks allow you to write JavaScript code which is then compiled into native code for iOS and Android.

These are some of the most common ways to run JavaScript, but the versatile nature of the language allows it to be used in many other contexts as well.

### Block Structure

Central to the understanding of how to write JavaScript code is the concept of *block structure*. A block is delimited by matching curly braces (`{` and `}`) appearing at the beginning and end of the block. Blocks can be positioned within other blocks, and by convention are given an increased level of indentation in order to maintain readability. Blocks are often used to hold conditional or repeatedly executed code.

Code can be outside of any block, which means it is executed when the script is loaded, or within functions. Function bodies are themselves delimited with curly braces, and the code within them is only executed when the function is invoked, either from within the same script or by another (external) hook.

Blocks contain zero or more statements and/or declarations. While optional in some cases, semi-colons are used after each statement or declaration, often at the end of a line. JavaScript programmers who want to be taken seriously use semi-colons as a rule. When a block contains exactly one statement, the braces become optional. However, due to the risk of editing being carried out in the future, as a rule braces are always used.

## Elementary JavaScript

Regardless of whether you're executing JavaScript in browser on server-side, the fundamentals of the language and data types available are the same. In this topic we'll get up to speed on these fundamentals giving you a firm foundation for understanding code examples that we will meet later.

### Declarations and Assignments

There are four ways to perform initial *assignments* (giving a value to a named variable) in JavaScript, of which only the first two listed here are the preferred syntax for new code:

* **`let`**: Creates a variable with the scope (lifetime) of the current block (the nearest matching pair of curly braces `{}`). This could be function scope, or if used outside of a function then global scope is implied. When the block is exited, the reference that existed from the variable to its value is removed, and the variable is no longer accessible. Within the same scope, or any sub-scope, the variable can be reassigned, for example:

```javascript
let a = 42;
console.log(a);  // '42'
a = 43;
console.log(a);  // '43'
```

* **`const`**: Creates a constant with the same scoping rules as for `let`. Reassignment of the constant using `=` is not permitted, however (partial) mutation by other means is possible, for example:

```javascript
const pi = 3.14;
pi = 4;  // not allowed
const person = { name: 'John', surname: 'Doe' };
person.surname = 'Smith';  // this is allowed
console.log(person);  // '{ name: 'John', surname: 'Smith' }'
```

* **`var`**: Creates a function scope or global variable, depending upon where the assignment occurs. One peculiar behavior of `var` is hoisting. When JavaScript hoists a variable, it lifts the variable declarations to the top of their scope. The initialization, however, stays where it is. That means you can reference a `var` variable before it's declared, which will yield `undefined`, for example:

```javascript
console.log(x);  // 'undefined'
var x = 5;
console.log(x);  // '5'
```

* Omitting to use any of `let`, `const` or `var` is either a reassigment or an assignment to a (new) global variable. Creating global variables in this way is not recommended due to potential conflicts with other variables and difficulty in managing variable lifetimes and scopes. Furthermore, strict mode (`'use strict'`) disallows the assignment of undeclared variables and would cause this code to throw an error. In general, it's a good idea to always declare your variables using `var`, `let`, or `const` to clearly define their scope and lifecycle.

Using (only) `let` or `var` without an assignment implies a *declaration* only, giving the variable the value of `undefined`, for example:

```javascript
let assign_later;
console.log(assign_later);  // 'undefined'
assign_later = 0;
console.log(assign_later);  // '0'
```

JavaScript is a dynamically typed language. This means that variables (other than those declared `const`) can always be reassigned with a value of a different type to that which it held before. We'll discuss the different available types next.

### Data Types

Here is a list of the basic data types available to be used in JavaScript:

* **Number**: Represents numeric values, including integers and floats, which are stored in memory as IEEE754 double-precision format. For instance, `10`, `4.5`, and `NaN` (which stands for "Not a Number") are all valid number types. Note that while integers larger than 32 bits wide can be stored as exact values, those above `Number.MAX_SAFE_INTEGER` (which will be much less that 64 bits wide) will be stored as floating-point.

```javascript
let a = 1e9;
const b = -0.000045;
```

* **String**: Represents a sequence of characters. In JavaScript, strings are enclosed within quotes or backticks. Both single (`'Hello'`) and double (`"Hello"`) quotes can be used, while escaped characters use a backslash, for example `'\n'` or `"\""`. Strings enclosed in backticks (` `` `) can optionally span multiple lines and contain variable or expression placeholders, for example `${variable}`. Such strings are known as template literals or template strings.

```javascript
let w = 'World';
console.log(`Hello, ${w}!`);  // 'Hello, World!'
```

* **Boolean**: Represents either `true` or `false`. Boolean variables have a surprisingly large number of uses, and boolean expressions (made up from boolean or non-boolean variables and comparisons) are often used in conditional statements and loops.

```javascript
let always = true;
let n = 42;
if (always || n < 42) { console.log('Was true!'); }
```

* **Null**: Represents the intentional absence of any object value. In JavaScript, `null` is an assignment value that signifies no value or no object. If you want to clear a variable that points to an object, you can assign `null` to the variable. If there are no other references to the object, it will be eligible for garbage collection, and the memory it occupies will eventually be reclaimed by the JavaScript runtime.

* **Undefined**: A variable that has been declared but has not been assigned a value, is `undefined`. This can also be assigned to variables as a way of "deleting" them, but assigning `null` is a better statement of intent.

* **Symbol**: A unique and immutable data type that can be used as a key for object properties. `Symbol(X)` produces an anonymous, unique value for any `X`.

* **BigInt**: An arbitrary-precision integer. `BigInt` is used for handling numbers larger than `Number.MAX_SAFE_INTEGER`, but may have higher computational overheads.

* **Object**: Objects are used to store collections of data and more complex entities. Objects in JavaScript can be thought of as key-value pairs. In addition to regular objects, there are several specific types of objects in JavaScript, including Function, Array, Date, and more. Elements of an object can be accessed using dot-notation, for example:

```javascript
const student = { name: 'Billy', grade: 5, school_bus: true };
console.log(`Student is called ${student.name}.`);  // 'Student is called Billy.'
```

* **Array**: A type of object used for storing multiple values in a single variable. Array elements are ordered and accessible by their index number, starting from zero. The elements in a JavaScript array do not have to be of the same type, for example;

```javascript
let arr = [ 1, 2, 3, 4 ];
console.log(`Second element is ${arr[1]}.`);  // 'Second element is 2.'
let various = [ 2.3, 'hello', false, {} ];
```

* **Function**: Functions are reusable blocks of code that perform a specific task. In JavaScript, functions are first-class objects, meaning they can have properties and methods, and can be passed to and returned from other functions. There are a number of ways to declare functions, we will cover these later.

* **Date**: Represents a single moment in time in a platform-independent format.

* **RegEx (Regular Expression)**: Syntax for declaring RegEx literals is (without quotes): `/pattern/modifiers`

### Primitive vs Reference Types

In JavaScript, data types are categorized into two types: primitive and reference.

*Primitive Types* in JavaScript are number, string, boolean, `undefined`, `null`, `Symbol`, and `BigInt`. These types are immutable, meaning that once they're created, their value can't be changed. If you try to change a primitive value, JavaScript will create a new primitive value and assign it to the variable.

Consider the following example:

```javascript
let str1 = 'Hello';
let str2 = str1;  // str2 is now 'Hello'
str1 = 'World';   // str1 is now 'World'

console.log(str1);  // 'World'
console.log(str2);  // 'Hello'
```

As you can see, when `str1` is changed, `str2` remains unaffected because it's a copy of the original primitive value, not a reference to it.

*Reference Types* are objects, arrays, and functions, i.e., anything that's not a primitive type. Unlike primitive types, reference types are mutable, and variables assigned to a reference type hold a reference to the memory location of the value, not the actual value itself.

Consider the following example:

```javascript
let obj1 = { greeting: 'Hello' };
let obj2 = obj1;          // obj2 refers to obj1
obj1.greeting = 'World';  // mutate obj1

console.log(obj1.greeting);  // 'World'
console.log(obj2.greeting);  // 'World'
```

In this example, `obj1` and `obj2` both refer to the same object. So, when `obj1` is mutated, `obj2` reflects those changes because they both point to the same memory location.

This distinction between primitive and reference types is fundamental to understanding how JavaScript handles data and it's crucial when dealing with immutability and performance considerations in your JavaScript code.

## JavaScript Operators

JavaScript has a large number of operators, some of which are recent additions to the language. Here is a complete list:

* **Arithmetic Operators**:
    * Addition (`+`)
    * Subtraction (`-`)
    * Multiplication (`*`)
    * Division (`/`)
    * Modulus (Remainder) (`%`)
    * Increment (`++`)
    * Decrement (`--`)
    * Exponentiation (`**`)
* **Assignment Operators**:
    * Assignment (`=`)
    * Addition assignment (`+=`)
    * Subtraction assignment (`-=`)
    * Multiplication assignment (`*=`)
    * Division assignment (`/=`)
    * Remainder assignment (`%=`)
    * Exponentiation assignment (`**=`)
    * Left shift assignment (`<<=`)
    * Right shift assignment (`>>=`)
    * Unsigned right shift assignment (`>>>=`)
    * Bitwise AND assignment (`&=`)
    * Bitwise XOR assignment (`^=`)
    * Bitwise OR assignment (`|=`)
    * Logical AND assignment (`&&=`)
    * Logical OR assignment (`||=`)
    * Nullish assignment (`??=`)
* **Comparison Operators**:
    * Equal (`==`)
    * Not equal (`!=`)
    * Strict equal (`===`)
    * Strict not equal (`!==`)
    * Greater than (`>`)
    * Less than (`<`)
    * Greater than or equal (`>=`)
    * Less than or equal (`<=`)
* **Bitwise Operators**:
    * Bitwise AND (`&`)
    * Bitwise OR (`|`)
    * Bitwise XOR (`^`)
    * Bitwise NOT (`~`)
    * Left Shift (`<<`)
    * Right Shift (`>>`)
    * Zero-fill Right Shift (`>>>`)
* **Logical Operators**:
    * Logical AND (`&&`)
    * Logical OR (`||`)
    * Logical NOT (`!`)
    * Nullish coalescing (`??`)
* **String Operators**:
    * Concatenation (`+`)
    * Concatenation assignment (`+=`)
* **Conditional (ternary) Operator**:
    * `condition ? exprIfTrue : exprIfFalse`
* **Type Operators**:
    * `typeof` - Returns the type of a variable
    * `instanceof` - Returns true if an object is an instance of an object type
* **Void Operator**:
    * `void` - The void operator discards its expression's return value.
* **Delete Operator**:
    * `delete` - Deletes an object, an object's property, or an element at a specified index in an array.
* **In Operator**:
    * `in` - Returns true if the specified property is in the specified object or its prototype chain.
* **Spread Operator**:
    * `...` - Allows an iterable to be expanded in places where zero or more arguments or elements are expected.

## Control Flow

### Conditionals

*Conditionals* are fundamental elements of any programming language, allowing you to execute different pieces of code based on certain conditions. In JavaScript, conditional statements include uses of `if`, `else`, `else if`, `switch`, and `break`.

* **`if` Statement**: The `if` statement is the most basic type of conditional statement. It checks if a condition is true. If it is, the code within the immediately following block is executed.

```javascript
let x = 10;
if (x > 5) {
  console.log('x is greater than 5');
}  // 'x is greater than 5'
```

* **`else` Statement**: The `else` statement is used in conjunction with `if` to provide a code block that is executed if the condition in the `if` statement is not true.

```javascript
let x = 10;
if (x > 20) {
  console.log('x is greater than 20');
} else {
  console.log('x is not greater than 20');
}  // 'x is not greater than 20'
```

* **`else if` Statement**: `else if` is used after `if` to check for other conditions if the condition in the `if` statement is not true. There can be multiple `else if` statements.

```javascript
let x = 10;
if (x > 20) {
  console.log('x is greater than 20');
} else if (x > 15) {
  console.log('x is greater than 15');
} else {
  console.log('x is not greater than 15');
}  // 'x is not greater than 15'
```

* **`switch` Statement**: The `switch` statement is used to perform different actions based on multiple conditions. Use it if you need to select one of many code blocks to be executed. In a `switch` statement, each `case` is checked in order. If a `case` matches, the corresponding code block is executed. The `break` keyword is used to prevent the code from running into the next `case` automatically. The `default` keyword specifies code to run if there is no `case` match, and should always be present.

```javascript
let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('I am a banana!');
    break;
  case 'apple':
    console.log('I am an apple!');
    break;
  default:
    console.log('I am not a banana or an apple!');
}  // 'I am an apple!'
```

* **`break` Statement**: The `break` statement is also used to exit a loop, `switch`, or in conjunction with a labeled statement. In this case, the `break` statement stops the loop when `i` equals 5:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}  // '0 1 2 3 4'
```

These conditional statements are key elements of control flow in JavaScript, allowing you to create complex, dynamic, and interactive web applications.

### Loops

*Looping structures* are crucial in JavaScript, as they help us to repeatedly execute a block of code as long as a specified condition is true. Here are some of the main loop structures used in JavaScript:

* **`while` Loop**: The `while` loop continues to run as long as the condition specified in its parentheses is true. In this example, as long as `i` is less than 5, the loop will continue to run and print out the value of `i`. Be careful with `while` loops, as they can create an infinite loop if the condition is always true.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}  // '0 1 2 3 4'
```

* **`do...while` Loop**: The `do...while` loop is similar to the `while` loop, but it will execute the block of code at least once before checking the condition. In this example, even if `i` is not less than 5, this loop will run at least once.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);  // '0 1 2 3 4'
```

* **`for` Loop**: The `for` loop is the most commonly used loop in JavaScript. It consists of three expressions: the initializer (usually a variable declaration), the condition, and the final expression (usually incrementing/decrementing). Here, `i` is initially set to 0. The loop continues to run as long as `i` is less than 5, and `i` is incremented by 1 after each iteration.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}  // '0 1 2 3 4'
```

* **`for...in` Loop**: The `for...in` loop is used to loop through the properties of an object. In this example, the `for...in` loop is used to iterate through each property in the person object and print out both the property name and its value.

```javascript
let person = {fname: "John", lname: "Doe", age: 25};

for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
```

```plaintext
fname: John
lname: Doe
age: 25
```

* **`for...of` Loop**: The `for...of` loop is used to iterate over iterable objects (like Arrays, Strings, Maps, NodeLists, etc.). This loop will print out each value in the array:

```javascript
let array = [1, 4, 2, 5, 3];

for (let value of array) {
  console.log(value);
}  // '1 4 2 3 5'
```

These looping structures are powerful tools in JavaScript, allowing you to control the flow of your program and reduce the amount of code you need to write.

## JavaScript Functions

Functions are fundamental to JavaScript, providing a way to define reusable code. This allows you to call the same code multiple times, which enhances the modularity and readability of your programs.

JavaScript functions can be defined in several ways. Each has different characteristics related to hoisting, scope, and usage. Here are the primary ways to define a function:

1. **Function Declarations (or Function Statements)**: Here, you declare a function using the function keyword followed by the function name. This is the most common and traditional way to define a function. Function declarations are hoisted, which means they can be called before they are defined in the code.

```javascript
function add(x, y) {
  return x + y;
}
```

2. **Function Expressions**: In function expressions, the function is assigned to a variable. Function expressions can be named or anonymous. In many cases `const` is used, which means the variable cannot later be reassigned, which means it will always refer to the same function. Function expressions are not hoisted, so they cannot be invoked before they are defined.

```javascript
const add1 = function(x, y) { // Anonymous Function Expression
  return x + y;
};

const add2 = function addNumbers(x, y) { // Named Function Expression
  return x + y;
};
```

3. **Arrow Functions**: Arrow functions provide a way to write functions with a shorter syntax. They are always anonymous and they handle this differently than traditional functions. A `return` statement is not needed as the return value is implicitly the result of the last (or only) statement of the function. Arrow functions are particularly useful when you're working with functions that take other functions as arguments (also known as higher-order functions). They have other differences from regular functions, such as a different way of handling `this`.

```javascript
let add3 = (x, y) => x + y;
```

4. **Immediately Invoked Function Expressions (IIFEs)**: An IIFE is a function that runs as soon as it is defined.

```javascript
(function(x, y) {
  console.log(x + y);
})(5, 10);  // '15'
```

5. **Generator Functions**: These are special functions from which we can generate multiple values (not just one like regular functions). They pause their execution in the middle, preserving their state, and can subsequently be resumed. The `yield` statement is used in place of `return`.

```javascript
function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
```

6. **Async Functions**: Async functions are used to work with JavaScript promises in a more comfortable syntax. They can be defined as a declaration, an expression, or an arrow function. We will cover asynchronous JavaScript in chapter 5.

Each type of function definition has its own benefits and appropriate use-cases. The choice often depends on the specific requirements of your code.

## Advanced JavaScript Syntax

JavaScript has some more advanced features which will be useful to know when we meet some of the code examples from later in the book.

### JavaScript Objects and JSON

JavaScript Object Notation (JSON) is a standard data interchange format that uses human-readable text to store and transmit data objects. A JSON object is essentially a collection of key-value pairs, where both keys and values are strings. In other words, it's similar to a dictionary or a hash in some other programming languages.

In JSON, keys must be strings. When you're creating an object literal in JavaScript, keys don't have to be wrapped in quotes if they're valid JavaScript identifiers, but in JSON, all keys must be enclosed in double quotes.

Here's an example of a JSON object:

```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 35,
    "isAdmin": false,
    "roles": ["user", "editor"]
}
```

In this JSON object:

1. The keys are `"name"`, `"email"`, `"age"`, `"isAdmin"`, and `"roles"`.
2. The values include a string, an integer, a boolean, and an array.

When working with JSON in JavaScript, you'll typically use the `JSON.parse()` and `JSON.stringify()` methods:

* `JSON.parse()` converts a JSON string into a JavaScript object.
* `JSON.stringify()` converts a JavaScript object into a JSON string.

Here's how you'd use them:

```javascript
const jsonString = '{"name":"John Doe","email":"john.doe@example.com","age":35,"isAdmin":false,"roles":["user","editor"]}';

const user = JSON.parse(jsonString);
console.log(user.name);  // 'John Doe'

const userObj = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 32,
    isAdmin: true,
    roles: ["admin", "user"]
};

const jsonStr = JSON.stringify(userObj);
console.log(jsonStr);  // '{"name":"Jane Doe","email":...'
```

Keep in mind, while JSON looks similar to JavaScript object literal syntax, they are not exactly the same. For example, JSON keys must always be enclosed in double quotes, and trailing commas are not allowed.

### Destructuring Assignment

Destructuring assignment allows you to unpack values from arrays, or properties from objects, into distinct variables.

```javascript
let arr = [1, 2]

let [a, b] = arr;
console.log(a);  // '1'
console.log(b);  // '2'

let person = { name: "Alice", age: 25 };

let { name, age } = person;
console.log(name);  // 'Alice'
console.log(age);   // '25'
```

### Spread Operator and Rest Parameters

The spread operator (`...`) allows an iterable to be expanded in places where zero or more arguments or elements are expected.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);  // '[ 1, 2, 3, 4, 5, 6 ]'
```

When used in a function's parameters, it acts as a rest parameter: it collects all remaining arguments into an array.

```javascript
function foo(a, ...rest) {
  console.log(a);
  console.log(rest);
}

foo(1, 2, 3, 4);
```

```plaintext
1
[ 2, 3, 4 ]
```

### Import/Export

JavaScript has built-in language-level support for modules. This means you can split your code into separate files and import/export variables, functions, or classes from one file to another.

Here's how to export a function from a module called `module.js`:

```javascript
function greet() {
  console.log("Hello, World!");
}

export default greet;
```

And here's how to import it into a client script called `script.js`

```javascript
import { greet } from './module.js';

greet();  // 'Hello, World!'
```

For HTML pages to use the `import` keyword, `<script type="module">` must be used. Also, the module script must be served from a webserver, as opposed to being directly loaded from disk.

With these more advanced tools, your JavaScript code can be made more readable, organized, and flexible.

## Object-Oriented JavaScript

### Prototypes

In JavaScript, almost everything is an object, and all objects in JavaScript have a hidden `[[Prototype]]` property that's either null or references another object. This object is known as the object's prototype.

Each object's prototype can also have its own prototype, leading to what's known as a prototype chain. When trying to access a property that does not exist in an object, JavaScript will look up this prototype chain until it either finds the requested property or hits a prototype which is null (the end of the prototype chain).

### Creating Objects and Prototypes

When you create a new object in JavaScript using an object literal (e.g., `let obj = {}`), the object's prototype is set to `Object.prototype`. If you create an object with a constructor function or a class, the object's prototype is set to `ConstructorFunction.prototype` or `Class.prototype`.

Here's an example with a constructor function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

let alice = new Person('Alice', 25);
alice.greet();  // 'Hello, my name is Alice and I'm 25 years old.'
```

In this example, the `greet()` method is added to `Person.prototype`, so it's available to all objects created with `new Person()`.

### Prototype Inheritance

In JavaScript, inheritance is prototype-based, meaning that objects can inherit properties and methods from other objects. This is achieved through the prototype chain.

When you use the new keyword to create an object, the new object's `[[Prototype]]` is set to the prototype of the function or class. This links the object to the prototype, allowing the object to inherit properties and methods.

Here's an example of prototype inheritance:

```javascript
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
```

In this example, `Cat.prototype` is set to a new object whose prototype is `Animal.prototype`, establishing inheritance. The `Cat` objects inherit the properties and methods of `Animal`.

### Classes

Classes in JavaScript are a special kind of function and a core component of object-oriented programming in the language. They were introduced to simplify the process of creating objects and managing inheritance.

Here's a basic example of how to define a class:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}
```

In this example, `Rectangle` is a class that represents a geometric rectangle.

The constructor is a special method for creating and initializing objects created within a class. In this case, it takes two parameters (`height` and `width`), which are used to define the rectangle's dimensions.

`area()` is a method of the Rectangle class, which calculates the area of the rectangle.

You can create an instance of a class using the new keyword:

```javascript
let myRectangle = new Rectangle(10, 20);
console.log(myRectangle.area());  // '200'
```

### Inheritance in JavaScript Classes

JavaScript classes also support inheritance through the `extends` keyword. Inheritance allows you to create a class as a child of another class. The child class inherits all the parent's properties and methods.

Here's an example:

```javascript
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  perimeter() {
    return this.height * 4;
  }
}
```

In this example, `Square` is a child class of `Rectangle`. It uses the `extends` keyword to set `Rectangle` as its parent.

The constructor in `Square` calls the `super()` function, which refers to the parent class's constructor. In this case, it sets both the height and width to `sideLength`.

`Square` has its own method, `perimeter()`, which calculates the perimeter of the square.

An instance of Square can now be created:

```javascript
let mySquare = new Square(5);
console.log(mySquare.area());       // '25' (from the parent Rectangle class)
console.log(mySquare.perimeter());  // '20' (from the Square class)
```

Classes in JavaScript offer a more intuitive and structured approach to object-oriented programming in JavaScript, especially for developers coming from class-based languages like Java or C++. However, it's important to note that JavaScript remains a prototype-based language, and classes are essentially syntactic sugar (providing a more natural syntax) over this system.

## A Brief Introduction to TypeScript

TypeScript is a superset of JavaScript that adds optional static typing to the language, among other features. By ensuring that variables and function parameters are of certain types, TypeScript can help catch common errors at compile-time, before your code is even run.

### What is TypeScript?

TypeScript is an open-source language developed and maintained by Microsoft which extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes before you run code. Source code files written in TypeScript have a `.ts` filename extension.

### TypeScript vs JavaScript

One of the main differences between TypeScript and JavaScript is that TypeScript introduces a type system. For example, in TypeScript, you can annotate variables with types:

```typescript
let isDone: boolean = false;
let lines: number = 42;
let name: string = "Bob";
```

This can help catch errors, such as trying to use a number as a string. While JavaScript will happily let you do this, TypeScript will alert you to the potential issue before you even run the code.

### Basic TypeScript Syntax

Here are some of the key pieces of syntax in TypeScript:

* **Types**: TypeScript introduces several new types, and lets you annotate variables with these types:

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let x: [string, number];  // tuple type
x = ["hello", 10];
enum Color { Red, Green, Blue }  // enumeration
let c: Color = Color.Green;
```

* **Interfaces**: Interfaces in TypeScript have a similar role to interfaces in other languages. They define the contract for classes, without worrying about how these classes will achieve what is required in the contract.

```typescript
interface Point {
    x: number;
    y: number;
}
```

* **Classes**: TypeScript supports the class-based object-oriented programming paradigm, like Java and C#. Here's an example:

```typescript
class Animal {
    name: string;
    constructor(name: string) { this.name = name; }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}
```

* **Generics**: Generics provide a way to make components work with any data type and not restrict to one data type. Thus, components can be reusable and maintainable.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

The syntax may feel overwhelming if you're new to typed languages, but you'll quickly find that the additional layer of protection that TypeScript provides can save you a lot of time debugging. After you become comfortable with JavaScript, it's worth considering whether TypeScript might be a useful tool for your projects. Learning TypeScript is a prerequisite for using Angular, one of the frontend frameworks we will introduce later.

## Introduction to JSX

JSX stands for JavaScript XML. It's a syntax extension for JavaScript, primarily adopted by frameworks such as React to describe the structure of the user interface. Source code files written in JSX have a `.jsx` filename extension.

JSX looks similar to HTML and allows you to write JavaScript that has HTML-like syntax. It's not a requirement for writing React, but it makes the code more readable and writeable, so it's widely used in the industry.

### What does JSX look like?

Here's a simple example of JSX code:

```jsx
const element = <h1>Hello, world!</h1>;
```

This looks like HTML, but it's actually JavaScript. The variable element is not storing a string of HTML; it's storing a JSX element.

### Embedding Expressions in JSX

You can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`. Here's an example:

```jsx
const name = 'John Doe';
const element = <h1>Hello, {name}</h1>;
```

Here, we're creating a variable called name, and then we're using that variable inside a JSX element. The content inside the curly braces is treated as a JavaScript expression, and it will be evaluated as such.

### JSX is an Expression Too

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means you can use JSX inside if statements and for loops, assign it to variables, accept it as arguments, and return it from functions.

```jsx
function greet(name) {
    if (name) {
        return <h1>Hello, {name}!</h1>;
    } else {
        return <h1>Hello, Stranger.</h1>;
    }
}
```

### JSX Represents Objects

Babel compiles JSX down to `React.createElement()` calls. Here's an example:

```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

This JSX will be compiled to:

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

This is why you need to include React in your JS files if you're using JSX, even if you don't see `React` explicitly referenced in your code. Behind the scenes, it's being used to create your JSX elements.

JSX may seem strange at first, but it's a powerful tool that allows you to write your component structures in a way that's readable, and easy to understand at a glance. This can make it significantly easier to understand what your components will output, and to work with dynamic data.
