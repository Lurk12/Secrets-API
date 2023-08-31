const express = require('express');
const router = express.Router()
const {register, dashboard, login} = require('../controllers/auth');
const authenticateUser = require('../middleware/authentication');

router.post('/register', register)
router.post('/login', login)
router.get('/dashboard', authenticateUser, dashboard)

module.exports = router