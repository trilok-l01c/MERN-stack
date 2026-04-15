// NOTE: following functions are syncrhonus in nature

// using file system module
const fs = require("fs");
const path = require("path");
// checking the existence of the file
if (fs.existsSync("d.js")) console.log("Exists");
else {
    console.log("Not exists");
}

// rename and delete
try {
    fs.renameSync("d.js", "dt.js");
    console.log("Success for rename");
    fs.unlinkSync("dt.js");
} catch (err) {
    console.log("Failed!", err);
}
