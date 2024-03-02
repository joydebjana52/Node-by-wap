const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/oracle');
const express = require('express');
const server = express();
const {
    fetchTickets,
    createTicket,
    updateTicket,
    deleteTicket
} = require('./controller/ticket.controller');

server.listen(9000);

server.get('/ticket', fetchTickets);

server.post('/ticket', createTicket);

server.put('/ticket', updateTicket);

server.delete('/ticket', deleteTicket);