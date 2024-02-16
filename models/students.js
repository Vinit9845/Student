const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    educationLevel: {
        type: String,
        required: true
    },
    courseSpecialization: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    aboutMe: {
        type: String,
        required: true
    },
    files: {
        // This might need further definition, like storing paths to files, or other relevant data
        type: [String], // Array of file paths or IDs
        
    }
});

module.exports = mongoose.model('students', studentSchema);
