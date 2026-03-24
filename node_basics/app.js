const http = require("http");
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");

    if (res.url === "/") {
        res.statusCode = 200;
        res.end("it is home");
    } else if (res.url === "/about") {
        res.statusCode = 200;
        res.end("it is about");
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

const Port = 3000;

server.listen(Port, () => {
    console.log("I am listening you at port:", Port);
});
