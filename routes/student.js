const express = require('express');
const router = express.Router();
const Student = require('../models/students');

// GET all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch(err) {
        res.status(500).send('Error ' + err);
    }
});

// GET a specific student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch(err) {
        res.status(500).send('Error ' + err);
    }
});

// POST create a new student
router.post('/', async (req, res) => {
    const {
        name,
        birth,
        email,
        password,
        gender,
        phoneNumber,
        address,
        educationLevel,
        courseSpecialization,
        university,
        year,
        aboutMe,
        files
    } = req.body;

    const student = new Student({
        name,
        birth,
        email,
        password,
        gender,
        phoneNumber,
        address,
        educationLevel,
        courseSpecialization,
        university,
        year,
        aboutMe,
        files
    });

    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch(err) {
        res.status(500).send('Error ' + err);
    }
});

// PUT update a specific student by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedStudent);
    } catch(err) {
        res.status(500).send('Error ' + err);
    }
});

// DELETE a specific student by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        res.json(deletedStudent);
    } catch(err) {
        res.status(500).send('Error ' + err);
    }
});

module.exports = router;
