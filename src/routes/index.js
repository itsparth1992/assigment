const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');
const TagController = require('../controllers/TagController');

// get all post
router.get('/getpost', PostController.getPostList);

// create new post
router.post('/createpost', PostController.createNewPost);

// get all tags
router.get('/gettag', TagController.getTagList);

// create new tag
router.post('/createtag', TagController.createNewTag);

module.exports = router;