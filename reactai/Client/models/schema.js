const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true }, // Updated to use 'username' instead of 'name'
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Added 'password' field
    entryDate: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
}

const userQueriesSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Use ObjectId reference to the User model
    query: { type: String, required: true },
    response: { type: String, required: true }
});

const User = mongoose.model('User', userSchema, 'users');
const UserQueries = mongoose.model('UserQueries', userQueriesSchema, 'user_queries');

module.exports = { User, UserQueries };
