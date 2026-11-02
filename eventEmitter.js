const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

myEmitter.on("exit", () => {
    console.log("Program is exiting...");
});

myEmitter.emit("greet", "Krishna");
myEmitter.emit("exit");