// // const express = require('express');
// // const { registerUser, loginUser } = require('../controllers/userController');
// // const userMiddleware = require('../middleware/userMiddleware');
// // const router = express.Router();

// // // @route   POST /user/register
// // // @desc    Register a new user
// // // @access  Public
// // router.post('/register', registerUser);

// // // @route   POST /user/login
// // // @desc    Login user and get token
// // // @access  Public
// // router.post('/login', loginUser);


// // module.exports = router;



// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/userController');
// const userMiddleware = require('../middleware/userMiddleware');
// const authMiddleware = require('../middleware/authMiddleware');
// const router = express.Router();

// // @route   POST /user/register
// // @desc    Register a new user
// // @access  Public
// router.post('/register', registerUser);

// // @route   POST /user/login
// // @desc    Login user and get token
// // @access  Public
// router.post('/login', loginUser);

// router.get('/profile', userMiddleware,(req,res)=>{

//     res.status(200).json({
//         id: req.user.id,
//         username:req.user.username,
//         email: req.user.email,
//     });
// })

// module.exports = router;




const express = require('express');
const { registerUser, loginUser,viewUserByEmail } = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');
const router = express.Router();

// @route   POST /user/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /user/login
// @desc    Login user and get token
// @access  Public
router.post('/login', loginUser);

// @route   GET /user/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', userMiddleware, (req, res) => {
    res.status(200).json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
    });
});

router.get('/view', viewUserByEmail);

module.exports = router;
