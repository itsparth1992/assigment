const TagModel = require('../models/Tag');
var dbConn = require('../../config/db');
// get all tag list
exports.getTagList = (req, res) => {
    
    var query = 'select * from tags';
    dbConn.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.render('alltag', { name: 'Names', names: rows});
    })
    
}

// create new tag
exports.createNewTag = (req, res) => {
    
    var name = req.body.name;
    var sql = `INSERT INTO tags (name, created_at) VALUES ("${name}", NOW())`;
    dbConn.query(sql, function(err, result) {
        if (result) {
            return res.render('tag', {
                message : 'Tag inserted successfully !'
            })
           
        } else {

            return res.render('tag', {
                message : 'Enter tags !'
            })
    
      }
    });
}

