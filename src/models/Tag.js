var dbConn  = require('../../config/db');

var Tag = function (tag) {
    this.name     =   tag.name;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all post
Tag.getAllTag = (result) =>{
    dbConn.query('SELECT * FROM tags', (err, res)=>{
        if(err){
            console.log('Error while fetching tags', err);
            result(null,err);
        }else{
            console.log('Tag fetched successfully');
            result(null,res);
        }
    })
}

// create new post
Tag.createTag = (tagReqData, result) =>{
    dbConn.query('INSERT INTO tags SET ? ', tagReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Tag created successfully');
            result(null, res)
        }
    })
}



module.exports = Tag;