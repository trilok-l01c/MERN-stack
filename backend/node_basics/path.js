const path = require("path");

// getting the absolute path
const absPath = path.resolve("file.js");

// getting the relative path
// it depends upon the order given
const relPath = path.join("mern_tutor", "Projects", "node_basics", "app.js");

console.log(absPath);
console.log(relPath);
