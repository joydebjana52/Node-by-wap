const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: String,
    roll: Number,
    cgpa: Number,
    mobile: Number
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

/*
! Data types for MongoDB/Mongoose:

    String - "Joydeb Jana"
    Number - 108
    Boolean - true
    Date - 21-12-2002
*/