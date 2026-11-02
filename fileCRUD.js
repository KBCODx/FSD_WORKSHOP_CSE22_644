const fs = require("fs");

// CREATE
fs.writeFileSync("student.txt", "Hello, this is my first file.");

console.log("File created successfully.");

// READ
let data = fs.readFileSync("student.txt", "utf8");

console.log("File content:");
console.log(data);

// UPDATE
fs.appendFileSync("student.txt", "\nThis file has been updated.");

console.log("File updated successfully.");

// READ again
data = fs.readFileSync("student.txt", "utf8");

console.log("Updated file content:");
console.log(data);

// DELETE
fs.unlinkSync("student.txt");

console.log("File deleted successfully.");