const express = require('express');
const router = express.Router();

// home page
router.get('/', (req, res)=>{
    res.render("index")
});

// tags page
router.get('/tag', (req, res)=>{
    res.render("tag")
});

// create post page
router.get('/post', (req, res)=>{
    res.render("createPost")
});




// register page
router.get('/register', (req, res)=>{
    res.render("register")
});

// login page
router.get('/login', (req, res)=>{
    res.render("login")
});

module.exports = router;