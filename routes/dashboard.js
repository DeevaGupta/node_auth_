const router = require('express').Router();
const User = require('../model/User');
const verify = require('./user_verification');

router.get("/dashboard",verify, (req, res)=> {
    res.json({post: {title: "first post"},
                     description: "random"})
});

module.exports = router;