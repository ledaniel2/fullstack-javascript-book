# Chapter 5: Asynchronous JavaScript and Promises

## Introduction to Asynchronous Programming

In **synchronous programming**, operations are performed sequentially. This means that if you have a series of tasks to accomplish, each task must wait for the previous one to complete before it can begin. This approach can be straightforward and easy to understand since everything happens in a predictable order.

```javascript
console.log('First');
console.log('Second');
console.log('Third');
```

The output will always be:

```plaintext
First
Second
Third
```

However, this approach becomes problematic when one of your tasks takes a long time to complete. If you're waiting for a large file to download or a complex calculation to run, your program will be "blocked" until these operations finish, and you can't do anything else.

In contrast, **asynchronous programming** allows operations to run in the "background," freeing up your program to do other things. In JavaScript, this is accomplished using callbacks, promises, and async/await.

Consider the below asynchronous code (we have used arrow syntax to write the function which outputs `'Second'`):

```javascript
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');
```

The output will be:

```plaintext
First
Third
Second
```

Even though we set the timeout to 0 milliseconds, `Second` is printed last. This is because `setTimeout()` is an asynchronous function in JavaScript.

### JavaScript Event Loop and Concurrency Model

At the heart of JavaScript's asynchronous model is the *Event Loop*. The Event Loop continually checks if there are any tasks that need to be executed, and if there are, it takes them from a task queue and executes them.

JavaScript is single-threaded, which means it can only do one thing at a time. But with the help of the event loop, JavaScript can handle asynchronous operations and perform tasks like updating the UI, sending AJAX requests, and handling user events without blocking the main thread.

This is possible because JavaScript's concurrency model uses an *event-driven, non-blocking I/O model*. Operations like reading from the network or the file system, or querying a database, can be initiated and then set aside. The program continues to run, and when the operation is finished, a "callback" function is invoked to handle the result.

This ability to run code asynchronously makes JavaScript well-suited for tasks like handling user interactions in the browser, making requests to servers, and reading and writing to databases, all of which can be time-consuming and are well-suited to an asynchronous, non-blocking model.

### Use Cases for Asynchronous Programming in JavaScript

Asynchronous programming is key for building fast, efficient JavaScript applications. Here are some common use cases:

* **AJAX Requests**: AJAX stands for Asynchronous JavaScript and XML. It's used to communicate with servers and fetch data without refreshing the page. By using AJAX, you can update parts of a web page, without reloading the whole page.

* **Event Handlers**: Asynchronous programming is used in event handlers. When a user clicks a button or submits a form, you can set up an event handler to respond to that event without blocking the rest of your code.

* **Timers**: Functions like `setTimeout()` or `setInterval()` are asynchronous. They wait a specified number of milliseconds to execute a function, but they don't stop the rest of your code from running.

* **Promises and Async/Await**: These are modern features in JavaScript that make working with asynchronous operations more manageable. You'll learn more about them later in this chapter.

* **File I/O**: Node.js uses asynchronous programming for reading and writing to the file system. This is essential for performance because I/O operations can be slow, and you don't want your program to "freeze" every time it reads or writes a file.

* **Database Operations**: Similar to file I/O, database operations can also be slow. When querying a database, you typically send the query and then do something with the result when it's ready. Asynchronous programming makes this possible.

In all these cases, the goal is the same: you want your program to be able to continue doing other tasks rather than waiting for a single task to complete. It's all about making the most of your resources and keeping your applications responsive, even when they're doing tasks that take some time to complete.

## Understanding Callbacks

### What is a Callback Function?

A callback function is a function that is passed as an argument to another function, with the intention of calling it back at a later time. This callback function gets executed at some point inside the containing function's body.

In JavaScript, functions are first-class objects, which means you can do with a function what you can do with other objects, like pass them as parameters to other functions.

Here is a basic example of a callback function:

```javascript
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

greet('Alice', () => {
  console.log('Callback function executed');
});
```

In this example, `greet()` is a function that takes two arguments: a name, and a callback function. After logging a greeting to the console, it executes the callback function.

The output of this code will be:

```plaintext
Hello Alice
Callback function executed
```

### Using Callback Functions for Asynchronous Operations

Callback functions are used extensively in JavaScript for asynchronous operations. For example, let's consider the `setTimeout()` function, which waits a specified number of milliseconds and then executes a callback function:

```javascript
console.log('First');
setTimeout(() => {
  console.log('Second');
}, 1000);
console.log('Third');
```

In this code, `setTimeout` is an asynchronous function that uses a callback. The callback function is not executed immediately; instead, it's "called back" after 1000 milliseconds (1 second). Meanwhile, the rest of the program continues to run, so `First` and `Third` are logged to the console about a second before `Second`.

### Problems with Callbacks: Callback Hell and Inversion of Control

While callbacks are powerful and flexible, they can lead to problems when overused or used improperly. Two common issues are Callback Hell and Inversion of Control.

**Callback Hell**, also known as "the pyramid of doom", refers to the situation where callbacks are nested within callbacks, leading to code that's hard to read and understand.

Here's an example of callback hell:

```javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getTheMostData(c, function(d) {
        // Now do something with 'd'
      });
    });
  });
});
```

This is a problem because it's hard to understand the flow of the program, the code is hard to maintain, and error handling is difficult.

**Inversion of Control** is a problem where the timing and execution of your code is handed over to a third party, usually without sufficient controls or guarantees. This can lead to problems like code running too early, too late, or not at all. Consider this call to a hypothetical third-party function:

```javascript
thirdPartyFunction('Hello, World!', (err, data) => {
  if (err) {
    console.log('Something went wrong');
  } else {
    console.log(data);
  }
});
```

In the code above, we have no control over when or how `thirdPartyFunction()` executes our callback. It might call it immediately, or not at all, or even multiple times. It's an inversion of control because we've given control of our code over to `thirdPartyFunction()`.

Promises and async/await, which we'll discuss in the following sections, were introduced in part to solve these issues with callbacks. They make it easier to write asynchronous code that's clear and easy to understand, without falling into callback hell or losing control of our program's flow.

## Introduction to Promises

### What is a Promise?

A Promise is a special JavaScript object that links the "producing code" and the "consuming code" together. In terms of asynchronous operations, this means a Promise can help manage operations that are currently in progress or will be in the future.

A Promise can be in one of three states:

1. **Pending**: The Promise's outcome hasn't yet been determined, because the asynchronous operation that will produce its result hasn't completed yet.

2. **Fulfilled**: The asynchronous operation has completed, and the Promise has a resulting value.

3. **Rejected**: The asynchronous operation failed, and the Promise will never be fulfilled. In the rejected state, a Promise has a reason that indicates why the operation failed.

### Creating and Using Promises: `new Promise`, `Promise.resolve`, `Promise.reject`

To create a new Promise, you use the `new Promise()` constructor. This takes one argument, an executor function, which itself takes two parameters: resolve and reject.

```javascript
let promise = new Promise((resolve, reject) => {
  // asynchronous operation
});
```

The resolve function is called when the asynchronous task completes successfully and produces a result. The reject function is called when the task fails, and it produces a reason for that failure.

```javascript
let promise = new Promise((resolve, reject) => {
  let successful = true;
  if (successful) {
    resolve('The operation was successful.');
  } else {
    reject('The operation failed.');
  }
});
```

You can also create a Promise that is immediately resolved or rejected using `Promise.resolve(value)` and `Promise.reject(reason)`. These methods return a Promise object that is already in the resolved or rejected state.

```javascript
let resolvedPromise = Promise.resolve('Resolved promise');
let rejectedPromise = Promise.reject('Rejected promise');
```

### Promise States and Fates: Pending, Fulfilled, Rejected

As mentioned, a Promise can be in one of three states: pending, fulfilled, or rejected. Once a Promise is fulfilled or rejected, it is considered settled, and its state cannot change.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

console.log(promise);  // 'Promise {  <pending>, ...'

setTimeout(() => {
  console.log(promise);  // 'Promise {<fulfilled>: 'Promise resolved'} ...'
}, 2500);
  ```

In the example above, if you log the promise immediately after creating it, its state will be "pending" because the `setTimeout()` function hasn't completed yet. After 2 seconds, the promise will be resolved and can't go back to the pending state or be rejected.

This feature ensures that once a Promise has been settled, you can be confident that it will always be in the same state and hold the same value or reason, no matter how many times you access it. This is known as the Promise's "fate". The fate of a Promise is sealed once it's settled, and it can't be changed.

## Working with Promises

### Promise Chaining: `then` and `catch`

Once we have a Promise, we can use `.then()` to schedule actions to be run after the Promise is resolved or rejected. then takes two optional arguments: a function to be executed if the Promise is fulfilled, and a function to be executed if the Promise is rejected.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

promise.then(
  result => console.log(result),  // 'Promise resolved' (after 2 seconds)
  error => console.log(error)
);
```

Conversely, `.catch()` is a shorthand for `.then(null, rejection)`. It's useful for handling errors which cause rejections in a chain of Promises. If a Promise is rejected, the catch handler is called.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise rejected');
  }, 2000);
});

promise.catch(error => console.log(error));  // 'Promise rejected' (after 2 seconds)
```

### Error Handling with Promises: `catch` and `finally`

Error handling with Promises can be done using the `.catch()` method. The catch handler catches all errors that occur while the Promise is being executed.

```javascript
let promise = new Promise((resolve, reject) => {
  throw new Error('Something went wrong');
});

promise.catch(error => console.log(error));  // 'Error: Something went wrong ...'
```

`.finally()` is another method that can be called on a Promise. The finally handler passes through results and errors to the next handler. It's a good place to put cleanup code that should run irrespective of whether the Promise was fulfilled or rejected.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Cleanup code'));
```

### Running Promises in Parallel: `Promise.all`, `Promise.race`, `Promise.allSettled`

There are several useful Promise methods for dealing with multiple Promises at once.

* **`Promise.all`** takes an array of Promises and returns a new Promise that only fulfills when all the Promises in the array have been fulfilled, or rejects as soon as one of them rejects. The result is an array of all the fulfilled values.

```javascript
let promise1 = Promise.resolve('Promise 1 resolved');
let promise2 = Promise.resolve('Promise 2 resolved');

Promise.all([promise1, promise2])
  .then(result => console.log(result))  // 'Promise 1 resolved', 'Promise 2 resolved'
  .catch(error => console.log(error));
```

* **`Promise.race`** also takes an array of Promises but returns a Promise that fulfills or rejects as soon as one of the Promises in the array fulfills or rejects.

```javascript
let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Promise 1 resolved');
});
let promise2 = Promise.resolve('Promise 2 resolved');

Promise.race([promise1, promise2])
  .then(result => console.log(result))  // 'Promise 2 resolved'
  .catch(error => console.log(error));
```

* **`Promise.allSettled`** is similar to `Promise.all`, but it waits for all Promises to settle, regardless of whether they were fulfilled or rejected. It returns an array of objects that each describe the outcome of
each Promise.

```javascript
let promise1 = Promise.resolve('Promise 1 resolved');
let promise2 = Promise.reject('Promise 2 rejected');

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
```

In this example, `Promise.allSettled` waits for both `promise1` and `promise2` to settle, then logs the results. Each result in this array is an object with a status property that can be either "fulfilled" or "rejected". If the Promise was fulfilled, the object will also have a `value` property. If the Promise was rejected, the object will have a `reason` property.

These methods are very useful for coordinating and managing multiple Promises, whether you need to run tasks in parallel, race multiple tasks and take the first one to complete, or ensure that all tasks have finished regardless of whether they succeeded or failed.

## Asynchronous Functions and the `await` Keyword

### Introduction to Async/Await

Async/await is syntactic sugar in JavaScript built on top of Promises that makes asynchronous code look and behave more like synchronous code. This makes it easier to reason about and makes asynchronous code cleaner and less error-prone.

The `async` and `await` keywords are integral parts of the async/await syntax:

* **`async`**: This keyword is used to declare an asynchronous function. An async function always returns a Promise. If the function returns a value, the Promise will be fulfilled with that value. If the function throws an exception, the Promise will be rejected with that exception.

* **`await`**: This keyword is used *inside an async function* to wait for a Promise. It makes the JavaScript runtime wait until that Promise settles, and then returns its result. This "pauses" the async function and waits for the Promise to resolve, but it doesn't block the rest of the code from running.

### Using Async Functions and the Await Keyword

Here's an example of an async function:

```javascript
async function myFunc() {
  return 'Hello World';
}

console.log(myFunc());  // 'Promise { 'Hello World', ...'
```

Even though we're returning a string, because we've declared `myFunc()` as an `async function`, it automatically wraps the returned value in a Promise.

We can consume the Promise using `.then()` as usual:

```javascript
myFunc().then(console.log);  // 'Hello World'
```

However, with async/await, we can make this look more like synchronous code:

```javascript
async function displayResult() {
  let result = await myFunc();
  console.log(result);  // 'Hello World'
}

displayResult();
```

In the above code, `await myFunc()` makes JavaScript wait until `myFunc()` Promise resolves and then assigns its result to the result variable.

### Error Handling with Async/Await: Try/Catch Blocks

When using async/await, you can handle errors using try/catch blocks, similar to synchronous code. If a Promise rejects, the await expression throws an exception, which can be caught using a try/catch block.

```javascript
async function myFunc() {
  throw new Error('Something went wrong');
}

async function runFunc() {
  try {
    let result = await myFunc();
    console.log(result);
  } catch (error) {
    console.error(error);  // 'Error: Something went wrong'
  }
}

runFunc();
```

In the above code, `myFunc()` returns a rejected Promise. When we try to await that Promise, it throws an exception, which we catch and log to the console.

Async/await syntax offers a cleaner, more intuitive way to write and manage Promises. They allow you to write asynchronous code that has a more synchronous structure, which can make it easier to understand and maintain.

## AJAX (Asynchronous JavaScript and XML)

### Understanding AJAX and Its Role in Web Development

AJAX, which stands for Asynchronous JavaScript And XML, is a set of web development techniques that allows web applications to send and retrieve data from a server asynchronously, without interfering with the display and behavior of the existing page.

In the early days of the web, every time a user made a change that required data to be fetched from a server, the entire webpage had to be reloaded. This was very inefficient. With AJAX, it became possible to update parts of a web page with new data from the server without reloading the entire page.

Even though XML was originally used for data exchange in AJAX techniques, it's been largely replaced by JSON (JavaScript Object Notation) due to its lightweight structure and ease of use.

### Making AJAX Requests with the XMLHttpRequest Object

The XMLHttpRequest object is a built-in browser object that allows making HTTP requests to servers from JavaScript.

Here's how to make a simple GET request with XMLHttpRequest:

```javascript
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://dummyjson.com/products/1');

xhr.send();

xhr.onload = () => {
  if (xhr.status == 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.log('Error', xhr.status, xhr.statusText);
  }
};

xhr.onerror = () => {
  console.log('Request failed');
};
```

In the example above, `xhr.onload` is a function that gets called when the request completes. It checks the HTTP status code of the response with `xhr.status`. If the status is 200, that means the request was successful, and it logs the response. Otherwise, it logs an error message.

`xhr.onerror` is a function that gets called if the request fails for some reason, such as a network error.

While the XMLHttpRequest object is powerful and flexible, its API isn't the most user-friendly. Modern JavaScript provides a more convenient API for making HTTP requests, the Fetch API, which we'll cover in the next section. Despite this, understanding XMLHttpRequest is essential for understanding the history of AJAX and how asynchronous data fetching in JavaScript has evolved.

## API Integration

### What is an API?

API stands for Application Programming Interface. It is a set of rules and protocols for building and interacting with software applications. APIs define the methods and data formats that a program can use to communicate with other software.

In the context of web development, when we talk about APIs, we're usually referring to web APIs. A web API is an interface for an application that can be interacted with over HTTP. Many services provide web APIs that allow developers to interact with their services programmatically. For example, a weather service might provide a web API that you can fetch data from to display weather information on your website.

### Making API Requests with Fetch and Async/Await

The `fetch()` function is a modern, promise-based API for making HTTP requests in the browser. It's much more user-friendly than the older XMLHttpRequest API, and it works great with async/await syntax.

Here's an example of how to make a GET request to a web API with fetch:

```javascript
async function fetchData() {
  let response = await fetch('https://dummyjson.com/products/1');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();
  console.log(data);
}

fetchData().catch(e => console.log('There was a problem with your fetch operation: ' + e.message));
```

In this example, we first call fetch with the URL of the API. This returns a Promise that resolves to the Response object representing the response to the request. We can then call the `json()` method on the Response object to get another Promise that resolves to the body of the response parsed as JSON.

If the request fails for any reason, or if the HTTP status of the response is not a success status (200-299), the Promise will reject, and the error can be caught and handled in the catch block.

### Understanding HTTP Status Codes and Error Messages

HTTP status codes are three-digit numbers that indicate the status of an HTTP response. They're returned by the server whenever an HTTP request is made, and they tell the client whether the request was successful or not, and why.

Status codes are grouped into five classes:

* **1xx (Informational)**: The request was received, and the process is continuing.
* **2xx (Successful)**: The request was successfully received, understood, and accepted.
* **3xx (Redirection)**: Further action must be taken to complete the request.
* **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled.
* **5xx (Server Error)**: The server failed to fulfill a valid request.

For example, a status code of 200 means the request was successful, while a status code of 404 means the requested resource could not be found on the server.

In the fetch example above, we check the status of the response with `response.ok`, which is a shortcut for checking whether the status is in the range 200-299. If it's not, we throw an error with the status code.

In this way, understanding and appropriately handling HTTP status codes is vital to correctly implementing error handling when working with APIs.

## Practical Examples of Asynchronous JavaScript

### Implementing a Timeout with Promises

Let's implement a function that returns a Promise that resolves after a specified number of milliseconds. This can be used to create a delay in an async function.

```javascript
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('Start');
  await timeout(2000);
  console.log('End');
}

run();
```

In this example, the `run()` function logs `Start`, waits for 2 seconds, and then logs `End`.

### Simulating File I/O with Promises

Let's simulate reading a file with an asynchronous function. In a real-world scenario, this could be a function that reads a file from the file system or a database.

```javascript
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous file read with setTimeout
    setTimeout(() => {
      if (fileName === 'notfound.txt') {
        reject(new Error(`File not found: ${fileName}`));
      } else {
        resolve(`File contents of ${fileName}: Hello, world!`);
      }
    }, 1000);
  });
}

async function run() {
  try {
    let contents = await readFile('hello.txt');
    console.log(contents);
  } catch (error) {
    console.error(error);
  }
}

run();
```

In this example, the `readFile()` function returns a Promise that simulates reading a file. If the filename is `notfound.txt`, it rejects the Promise with an error. Otherwise, it resolves the Promise with a string representing the file contents. The run function then tries to read a file and logs the contents or an error message.

These examples should give you a good sense of how asynchronous JavaScript and Promises can be used in practical scenarios.

## Advanced Asynchronous Patterns

### Understanding Promises and Generators

Generators are a special kind of function in JavaScript that can be exited and later re-entered, with their context (variable bindings) saved across re-entrances. Generators are denoted with an asterisk (`function*`) and use the `yield` keyword to pause function execution.

While not inherently asynchronous, generators become incredibly powerful when combined with Promises. They can be used to write asynchronous code that looks and behaves like synchronous code, just like async/await (which is actually based on generators).

```javascript
function* genFunc() {
  let user = 1;
  while (true) {
    user++;
    try {
      const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A fetch error occurred:', error);
      return; // Terminate the generator if a fetch error occurs
    }
  }
}

function run(genFunc) {
  let genObj = genFunc();

  function step(value) {
    try {
      let result = genObj.next(value);
      if (result.done) return;
      console.log(result);
      result.value.then(response => {
        console.log(response.json()); // log the actual data
        step(response);
      })
        .catch(error => {
        console.error('An error occurred:', error);
        genObj.return(); // Terminate the generator if a promise rejection occurs
      });
    } catch (error) {
      console.error('A generator error occurred:', error);
    }
  }

  step();
}

run(genFunc);
```

In this example, `genFunc()` is a generator function that fetches data from an API. It yields the Promise returned by fetch, pausing its execution. The `step()` function then resumes the generator function when the Promise resolves, as well as logging the data from the response. All possible error paths are also handled&nbsp;&mdash;&nbsp;this is good practice for production code.

### Introduction to Observables with RxJS

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. An Observable is like a stream which can emit multiple values over time, and it is able to "push" values to an observer.

The Observable model allows you to treat streams of asynchronous events with the same sort of simple, composable operations that you use for collections of data items like arrays. It frees you up from tangled webs of callbacks, and thereby makes your code more readable and less prone to bugs.

```javascript
import rxjs from 'https://dev.jspm.io/rxjs@6';
const { Observable } = rxjs;

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

console.log('Before subscribe');
observable.subscribe({
  next(x) { console.log('Got value ' + x); },
  error(err) { console.error('Something wrong occurred: ' + err); },
  complete() { console.log('Done'); }
});
console.log('After subscribe');
```

In this example, the Observable emits three values over time: 1, 2, and 3. The final emission is delayed by 1 second. We subscribe to the Observable, providing callbacks for handling the emitted value, an error, and the completion of the Observable.

These advanced asynchronous patterns provide even more control over asynchronous behavior and can make your code more efficient, easier to read, and easier to manage.

## Best Practices and Considerations

### Error Handling and Debugging Asynchronous JavaScript

Proper error handling is critical in asynchronous programming, as errors can often go unnoticed. Here are some tips to handle errors effectively:

1. Always add a `.catch()` handler at the end of your Promise chains to handle any uncaught errors.
2. In async functions, always use try/catch blocks to handle errors.
3. In a `.catch()` handler or a catch block, always either handle the error or rethrow it. Never silence errors.
4. Add error handlers for event-based APIs, like `addEventListener('error', handleError)`.

Here's an example of proper error handling with async/await:

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://dummyjson.com/products/1');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with your fetch operation: ', error);
  }
}

fetchData();
```

### Performance Considerations in Asynchronous Programming

While asynchronous programming allows us to write more efficient programs by not blocking the execution thread, it does not come without its own performance considerations.

Here are some tips to keep in mind for writing performant asynchronous JavaScript:

1. **Be mindful of Promise chaining**: Although Promise chaining (`.then().then()`) allows for sequential execution, it can lead to slower code execution if each Promise relies on the result of the previous Promise. If the Promises are independent, consider using `Promise.all` to execute them in parallel.
2. **Use async/await sparingly**: Every async function returns a Promise, which comes with an overhead. If your function does not contain asynchronous operations, it should not be declared async.
3. **Be aware of memory leaks**: This can occur if you have Promises that take a long time to resolve or never resolve at all. Be sure to reject or resolve Promises properly.

Here's an example of using `Promise.all` for parallel execution:

```javascript
async function fetchAllData() {
  try {
    let responses = await Promise.all([
      fetch('https://dummyjson.com/products/1'),
      fetch('https://dummyjson.com/products/2'),
      fetch('https://dummyjson.com/products/3')
    ]);

    for (let response of responses) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.error('There was a problem with your fetch operation: ', error);
  }
}

fetchAllData();
```

In this example, we're fetching two sets of data in parallel, which can significantly speed up execution time compared to fetching them one after the other.

Adhering to these best practices and considerations can greatly enhance the reliability, readability, and performance of your asynchronous JavaScript code.
