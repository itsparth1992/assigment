const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');



// login
router.post('/login',(req, res, next) => { 
   
    AuthController.login(req,res,next);
    
});

// // register
router.post('/register',  (req, res, next) => { 
     AuthController.register(req,res,next);
    
});

// logout
router.get('/logout', (req,res,next) => { 
    return res.render()={ 
    
    }
});




module.exports = router;