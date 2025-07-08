const router = require('express').Router();
const authenticateToken = require('../middleware/authToken');
const { getWorkouts, createWorkout, deleteWorkout } = require('../controllers/logicas');

router.post('/', authenticateToken, createWorkout);
router.get('/', authenticateToken, getWorkouts);
router.delete('/:id', authenticateToken, deleteWorkout);

module.exports = router;