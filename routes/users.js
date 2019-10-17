
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================
router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users)
});


// 2. add a new user
// POST /add
// ========================================
router.post('/add', async (req, res) => {
    let user = new User({ username: req.body.username });
    user = await user.save();
    res.send(user)
})

module.exports = router;