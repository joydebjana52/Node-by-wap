const http = require("http");
const url = require("url");
const {
    readData,
    insertData,
    updateData,
    deleteData
} = require('./controller/product');

const server = http.createServer((req, res) => {
    const method = req.method;

    if (method === "GET") return readData(req, res);

    if (method === "POST") return insertData(req, res);

    if (method === "PUT") return updateData(req, res);

    if (method === "DELETE") return deleteData(req, res);

    res.statusCode = 405;
    res.end('Method not allowed!');
});

const PORT = 8000;
server.listen(PORT);