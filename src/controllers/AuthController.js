var dbConn = require('../../config/db');
const bcrypt = require('bcryptjs');
const  Joi =require('joi')

// register
const AuthController = {

    async login(req, res, next) {

       const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    
        });
        const { error } = loginSchema.validate(req.body)
    
        if (error) {
            return res.render('login', {
                message : error.message
           })
        }
          dbConn.query('SELECT password FROM users WHERE email = ?', [req.body.email], 
              (error, results, fields) => {
                  if (!results) {
                    return res.render('login', {
                        message : 'Email/Password not match !'
                   })
                  }
                // console.log(results[0].password)
                  const match = bcrypt.compareSync(req.body.password, results[0].password)
                  if (!match) {
                    return res.render('login', {
                         message : 'Email/Password not match !'
                    })
                     
                  } else {
                      const data = { email: results[0].email, password: results[0].password, status: "yes" }
                      
                    return res.render('post', {
                        message: 'Login successfully !',
                        data: JSON.stringify(data)
                   })
                    
                   }

          });
    },
    async register(req, res, next) {
        console.log(req.body)
        
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            passwordConfirm: Joi.ref('password'),

        });
   
        const { error } = registerSchema.validate(req.body)
        if (error) {
            return res.render('register', {
                message : error.message
           })
        }
        try {
            const password = await bcrypt.hash(req.body.password, 10);
            const { name, email } = req.body;
            dbConn.query("SELECT email from users where email = ?", [email], (err, results) => {
                if (err) throw err;
                console.log(results);
                if (results.lenght == 0) {
                    return res.render('register', {
                        message: 'This email id is already Exist!'
                    })
                } else {
                    dbConn.query("INSERT INTO users SET ?", { name, email, password }, (err, result) => { 
                if (err) throw err;
                if (result) { 
                    return res.render('post', {
                        message: 'You have register successfully!'
                    }) 
                } else {
                    return res.render('register', {
                        message: 'Something went Wrong!'
                    })
                }
            })
                } 
                
            });
           
            
            
            
        } catch (err) {
            return next(err);
        }
    }
}

module.exports=AuthController;







