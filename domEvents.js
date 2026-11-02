const EventEmitter = require("events");

const button = new EventEmitter();

button.on("click", () => {
    console.log("Button was clicked!");
});

button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

console.log("Simulating DOM events...");

button.emit("mouseover");
button.emit("click");
button.emit("click");