// write your code here.
const express = require("express");
const app = express();

// a security mechanism
const cors = require("cors");

// colors for fun

const colors = ["#53d860", "#d7d356", "#903939", "#e3a283"];
const colorLen = colors.length;
const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
};

// syntax to use middlewares
// this will allow only specific domain to make request

app.use(cors(corsOptions));

// routes
app.get("/api/data", (_, res) => {
    res.json({
        message: "Hello, world",
        color: colors[Math.floor(Math.random() * colorLen)],
    });
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
