const express = require('express')
const router = express.Router();

const HomeController = require("../app/controllers/homeController");

router.get('/login', HomeController.login);
router.get('/register', HomeController.register);
router.get('/', HomeController.index);

module.exports = router;