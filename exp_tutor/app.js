// write your code here.
const express = require("express");
const app = express();

app.get("/", (_, res) => {
    res.send("Welcome to our services page!");
});

app.get("/web", (_, res) => {
    res.send("We specialize in Web Development.");
});

app.get("/mobile", (_, res) => {
    res.send("We also offer Mobile App Development.");
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});