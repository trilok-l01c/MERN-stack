// write your code here.
const express = require("express");
const app = express();
// const cors = require("cors");

// allowing requests from every domain
// app.use(cors);

app.get("/", (_, res) => {
    res.send("Welcome to our services page!");
});

app.get("/data", (_, res) => {
    res.json({
        message: "Hare, Krsna",
    });
});

app.get("/mobile", (_, res) => {
    res.send("We also offer Mobile App Development.");
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
