const express = require('express')
const router = express.Router()
const controller = require('../controllers/mainController')
const validator = require("../validators/main")

router.post('/register', validator.registration, controller.register)
router.post('/login', validator.login, controller.login)

module.exports = router