const express = require('express');
const router = express.Router();
const User = require('../models/schema').Users; // Ensure your schema path is correct

router.post('/signup', async (req, res) => {
    // Extract username, email, and password from request body
    const { username, email, password } = req.body;

    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).send('Username or email already exists');
        }

        // Create new user instance
        const newUser = new User({ username, email, password });

        // Save new user to database
        await newUser.save();

        // Return success response
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).send('Username not found');
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).send('Invalid password');
        }

        req.session.user = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        res.status(200).send('Login successful');
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Error logging in');
    }
});

module.exports = router;

