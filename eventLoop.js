console.log("1. Start");

setTimeout(() => {
    console.log("4. setTimeout");
}, 0);

setImmediate(() => {
    console.log("5. setImmediate");
});

process.nextTick(() => {
    console.log("3. process.nextTick");
});

console.log("2. End");