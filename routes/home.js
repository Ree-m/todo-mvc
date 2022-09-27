const express = require('express') //get express? so we use this everywhere?
const router = express.Router() //get router
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) 

module.exports = router  //export allow this file to be used everywhere.

