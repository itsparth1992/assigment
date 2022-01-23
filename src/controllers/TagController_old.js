const TagModel = require('../models/Tag');

// get all tag list
exports.getTagList = (req, res) => {
    
    //console.log('here all tag list');
    TagModel.getAllTag((err, tags) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Tag', tags);
        res.send(tags)
    })
    
}

// create new tag
exports.createNewTag = (req, res) => {
    
    const tagReqData = new TagModel(req.body);
    console.log('tagReqData', tagReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        TagModel.createTag(tagReqData, (err, tag)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Tag Created Successfully', data: tag.insertId})
        })
    }
}

