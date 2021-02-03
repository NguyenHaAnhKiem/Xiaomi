const express = require('express')
const router = express.Router();

const MemberController = require("../app/controllers/memberController");

router.get('/my_reviews', MemberController.my_reviews);
router.get('/withdrawal', MemberController.withdrawal);

module.exports = router;