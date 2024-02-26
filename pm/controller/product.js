const mongodb = require('mongodb');
const mongo = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017';

const readData = (req, res) => {
    mongo.connect(mongoUrl)

        .then((conn) => {
            const db = conn.db('wap')
            const students = db.collection('students')
            const data = students.find().toArray()
            data
                .then((result) => {
                    console.log(result);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(result));
                })
                .catch((err) => {
                    console.log(err);
                    res.statusCode = 424;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(err));
                })

        })

        .catch((err) => {
            res.statusCode = 424;
            res.end('Connection failed!');
        });
}

const insertData = (req, res) => {
    res.statusCode = 201;
    console.log('Insert data');
    res.end('Create');
}

const updateData = (req, res) => {
    res.statusCode = 200;
    console.log('Update data');
    res.end('OK')
}

const deleteData = (req, res) => {
    res.statusCode = 204;
    console.log('Delete data');
    res.end('No content');
}


module.exports = {
    readData,
    insertData,
    updateData,
    deleteData
}


/*
const readData = (req, res) => {
    res.statusCode = 200;
    console.log('Read data');
    res.end('Get request completed');
}

const insertData = (req, res) => {
    res.statusCode = 201;
    console.log('Insert data');
    res.end('Create');
}

const updateData = (req, res) => {
    res.statusCode = 200;
    console.log('Update data');
    res.end('OK')
}

const deleteData = (req, res) => {
    res.statusCode = 204;
    console.log('Delete data');
    res.end('No content');
}
*/