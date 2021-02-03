const express = require('express')
const router = express.Router();

const AdminController = require("../app/controllers/adminController");

router.get('/product_management', AdminController.product_management);
router.get('/reviews_management', AdminController.reviews_management);
router.get('/member_management', AdminController.member_management);

module.exports = router;