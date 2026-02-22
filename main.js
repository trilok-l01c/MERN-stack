// loading the express package
const express = require("express");
// instantiate an express app or server object
const app = express();
const PORT = 2000;

app.get("/", (req, res) => {
    res.send("Hello, world");
});

app.listen(PORT, () => {
    console.log("Just trying express on port" + PORT);
});
