const slowFunction = () => {
  // Simulate a function that takes 1 second to run
  setTimeout(() => console.log("Finished slow function"), 1000);
};

const fastFunction = () => {
  console.log("Finished fast function");
};

slowFunction();
fastFunction();
