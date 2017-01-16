const express = require('express')
const router = express.Router();

const Post = require('../models/post');

// GET /posts/:subreddit
router.get('/:subreddit', (req, res) => {

	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');
	// sort in descending order of date to show the last entry first
	Post.find({
		subredditId: subredditId
	}).
	sort({date: -1}).
	select({ _id: 1, title: 1, date: 1, subredditId: 1 }).
	exec((err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

// POST /posts/:subreddit
router.post('/:subreddit', (req, res) => {

	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');
	let newPost = Object.assign({}, req.body, {subredditId});
	
	Post.create(newPost
	, (err, results) => {
		if (err) throw err;
		res.json(results);
	});


});

// GET /posts/post_id/:post_id
// Can't use  /posts/:post_id because it will be mistaken
// as /posts/:subreddit due to the same path structure
router.get('/post_id/:post_id', (req, res) => {
	
	Post.findById(req.params.post_id,
		(err, results) => {
			if (err) throw err;
			res.json(results);
		}
	);
});

// PUT /posts/:post_id
router.put('/:post_id', (req, res) => {

	Post.findOneAndUpdate({ _id: req.params.post_id },
		{$push: {comments: req.body.comment}},
		(err, results) => {
			if (err) throw err;
			res.json(results);
		}
	);
});
module.exports = router;
