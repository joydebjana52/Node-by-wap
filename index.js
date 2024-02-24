const http = require('http');

const server = http.createServer(function (req, res) {
    const requestMethod = req.method;
    console.log(requestMethod);



    res.statusCode = 200;
    res.end("Success");   //? This helps to follow the "stateless protocol".
});

server.listen(8000);