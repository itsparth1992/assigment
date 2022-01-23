const PostModel = require('../models/Post');

// get all post list
exports.getPostList = (req, res) => {
    
   //console.log('here all post list');
   PostModel.getAllPost((err, posts) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Post', posts);
        res.send(posts)
    })
    
}

// create new post
exports.createNewPost = (req, res) =>{
    const postReqData = new PostModel(req.body);
    console.log('postReqData', postReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        PostModel.createPost(postReqData, (err, post)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Post Created Successfully', data: post.insertId})
        })
    }
}