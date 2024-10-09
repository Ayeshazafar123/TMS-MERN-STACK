const express = require('express');
const router = express.Router();
const {getRecentTickets} = require ('../controllers/homeController')

// route to get /home/recent

router.get('/recent', getRecentTickets);

module.exports = router;