// using file system module
const fs = require("fs");

// checking the existence of the file
if (fs.existsSync("../../../Resources")) console.log("Exists");
else console.log("Not exists");

// rename
try {
    fs.renameSync("d.js", "dt.js");
    console.log("Success for rename");
    fs.unlinkSync("dt.js");
} catch (err) {
    console.log("Failed!", err);
}

//
