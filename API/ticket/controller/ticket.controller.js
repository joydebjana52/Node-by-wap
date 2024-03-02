const Ticket = require('../schema/ticket.schema')

const fetchTickets = (req, res) => {
    res.status(200).json({ message: `${req.method} request method` });
}

const createTicket = async (req, res) => {
    const ticket = new Ticket({
        title: "Demo"
    });
    await ticket.save();
    res.status(200).json({ message: `${req.method} request method` });
}

const updateTicket = (req, res) => {
    res.status(200).json({ message: `${req.method} request method` });
}

const deleteTicket = (req, res) => {
    res.status(200).json({ message: `${req.method} request method` });
}

module.exports = {
    fetchTickets,
    createTicket,
    updateTicket,
    deleteTicket
};