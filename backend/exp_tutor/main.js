// loading the express package
const express = require("express");
// instantiate an express app or server object
const app = express();
const PORT = 2000;

// retrieving information
app.get("/", (req, res) => {
    res.send(`<p> Hello, world </p>
            <div  class="box" width="100px" height="100px">Hare Krsna!</div>`);
});

app.get("/article/", (req, res) => {
    res.send("This is articles page");
});
//
app.listen(PORT, () => {
    console.log("Just trying express on port http://localhost:" + PORT);
});

app.get("/metal/", (_, res) => {
    res.sendStatus(404).send("File not found");
});

// ## sendStatus() helps us to inform the user about the status of network
