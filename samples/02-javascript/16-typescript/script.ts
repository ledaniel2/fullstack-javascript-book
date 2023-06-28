let isDone: boolean = false;
let lines: number = 42;
let name: string = "Bob";

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let x: [string, number];  // tuple type
x = ["hello", 10];
enum Color { Red, Green, Blue }  // enumeration
let c: Color = Color.Green;

interface Point {
    x: number;
    y: number;
}

class Animal {
    name: string;
    constructor(name: string) { this.name = name; }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
