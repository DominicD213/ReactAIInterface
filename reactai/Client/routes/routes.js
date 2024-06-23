const express = require('express');
const router = express.Router();
const {User , UserQueries} = require('../models/schema') // Assuming 'users' is the correct model in your schema

router.post('/signup', async (req, res) => {
    const { username, password, email, } = req.body;

    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).send('Username or email already exists');
        }

        // Create new user instance
        const newUser = new User({ username, password, email });

        // Save new user to database
        await newUser.save();

        // Return success response
        return res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error); // Log detailed error
        return res.status(500).send('Internal Server Error'); // Send generic error response
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).send('Username not found');
        }

        // Check if password matches
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).send('Invalid password');
        }

        // Store user information in session
        req.session.user = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        return res.status(200).send('Login successful');
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).send('Error logging in');
    }
});

module.exports = router;
