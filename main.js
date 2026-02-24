// loading the express package
const express = require("express");
// instantiate an express app or server object
const app = express();
const PORT = 2000;

// retrieving information
app.get("/", (req, res) => {
    res.send("Hello, world");
});

app.get("/article/", (req, res) => {
    res.send("This is articles page");
});
//
app.listen(PORT, () => {
    console.log("Just trying express on port " + PORT);
});
