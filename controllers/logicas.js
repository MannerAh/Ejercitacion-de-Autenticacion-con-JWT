const jwt = require('jsonwebtoken');
auth = require('../middleware/authToken');
const { connectDB } = require('../config/database');
const { Workout } = require('../models/workouts');
const { User } = require('../models/users');
const express = require('express')
const app = express()

// POST /register
const register = (req, res) => {
    const {username, password} = req.body
    connectDB().then(async () => {
        const user = await User.findOne({username})
        if (user) {
            res.status(400).json({message: 'Username already exists'})
        }
        else {
            const newUser = new User({username, password})
            await newUser.save()
            res.status(201).json({message: 'User created successfully'})
        }
    })
}

// POST /login


// POST /workouts


// GET /workouts


// DELETE /workouts/:id

