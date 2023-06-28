const element = <h1>Hello, world!</h1>;

const name = 'John Doe';
const element = <h1>Hello, {name}</h1>;

function greet(name) {
    if (name) {
        return <h1>Hello, {name}!</h1>;
    } else {
        return <h1>Hello, Stranger.</h1>;
    }
}

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
