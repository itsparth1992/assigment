const PostModel = require('../models/Post');
var dbConn = require('../../config/db');

// get all post list
exports.getPostList = (req, res) => {
    
    var query = 'select * from posts';
    dbConn.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.render('post', { post: 'Posts', posts: rows});
    })
    
}

// create new post
exports.createNewPost = (req, res) => {
    
    var title = req.body.title;
    var description = req.body.description;
    // ======================
    let sampleFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // name of the input is sampleFile
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + sampleFile.name;
  
    // Use mv() to place file on the server
    sampleFile.mv(uploadPath, function (err) {
        // if (err) return res.status(500).send(err);
        var sql = `INSERT INTO posts (title, description, image, created_at) VALUES ("${title}","${description}", "${sampleFile.name}", NOW())`;
        dbConn.query(sql, (err, rows) => {
        
            if (!err) {
                return res.render('createPost', {
                    message : 'Post inserted successfully !'
                })
           
            } else {
                return res.render('createPost', {
                    message : 'Something is wrong !'
                })
            }
        });
    });
    // ======================
}