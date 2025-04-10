// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the Student schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    course: { type: String, required: true }
});

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

// Create a new student (CREATE)
app.post('/students', async (req, res) => {
    try {
        const { name, age, course } = req.body;

        const student = new Student({ name, age, course });
        await student.save();

        res.status(201).json({ message: 'Student created successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
});

// Get all students (READ)
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }
});

// Get a single student by ID (READ)
app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error });
    }
});

// Update a student by ID (UPDATE)
app.put('/students/:id', async (req, res) => {
    try {
        const { name, age, course } = req.body;

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, age, course },
            { new: true, runValidators: true }
        );

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student updated successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error });
    }
});

// Delete a student by ID (DELETE)
app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});