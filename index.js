const http = require('http');

const server = http.createServer(function (req, res) {
    const requestMethod = req.method;
    console.log(requestMethod);

    if (requestMethod === "GET") {
        res.statusCode = 200;
        res.end('GET request - User wants to read some data');
    } else if (requestMethod === "POST") {
        res.statusCode = 201;
        res.end('POST request - User wants to add store some data');
    } else if (requestMethod === "PUT") {
        res.statusCode = 201;
        res.end("PUT request - User wants to update data");
    } else if (requestMethod === "DELETE") {
        res.statusCode = 207;
        res.end('DELETE request - User want to delete data');
    } else {
        res.statusCode = 405;
        res.end('Unknown request - User wants to hack the server');
    }

    // res.statusCode = 200;
    // res.end("Success");   //? This helps to follow the "stateless protocol".
});

server.listen(8000);