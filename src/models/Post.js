var dbConn  = require('../../config/db');

var Post = function (post) {
    this.user_id     =   post.user_id;
    this.title     =   post.title;
    this.title     =   post.title;
    this.description    =   post.description;
    this.image          =   post.image;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all post
Post.getAllPost = (result) =>{
    dbConn.query('SELECT * FROM posts', (err, res)=>{
        if(err){
            console.log('Error while fetching posts', err);
            result(null,err);
        }else{
            console.log('Post fetched successfully');
            result(null,res);
        }
    })
}

// create new post
Post.createPost = (postReqData, result) => {
    
    dbConn.query('INSERT INTO posts SET ? ', postReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Post created successfully');
            result(null, res)
        }
    })
}

module.exports = Post;