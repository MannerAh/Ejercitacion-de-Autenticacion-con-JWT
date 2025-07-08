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
    connectDB().then(async () => { // Asegurarse de conectarse a la DB
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
const login = (req, res) => {
    const {username, password} = req.body
    connectDB().then(async () => {
        const user = await User.findOne({username})
        if (!user) {
           return res.status(400).json({message: 'Invalid username or password'})
        }
        const token = jwt.sign({id: user._id, username: user.username },
        process.env.JWT_SECRET, { expiresIn: '15m' }) 
        res.status(200).json({token});          
    })
    .catch ((error) => {
        console.error(error)
        res.status(500).json({message: 'Server error'})
})
}


// GET /workouts sin token, porque se pide la auth en ../routes
const getWorkouts = (req, res) => {
    connectDB().then(async () => {
        const workouts = await Workout.find()
        res.json(workouts)
})
}

// POST /workouts
const createWorkout = (req, res) => {
    const {exercise, category, reps} = req.body
    const userId = req.user._id
    connectDB().then(async () => {
        try { // Try-Catch para evitar errores, mongoose valida los datos necesarios
        const workout = new Workout({ userId, exercise, category, reps})
        } catch (error) {
            console.error(error)
            res.status(400).json({message: 'Invalid workout'})
        }
    })
}

// DELETE /workouts/:id

