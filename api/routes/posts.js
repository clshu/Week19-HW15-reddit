const express = require('express')
const router = express.Router();

const Post = require('../models/post');

router.get('/:subreddit', (req, res) => {
	//console.log(req.originalUrl);
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

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

router.post('/:subreddit', (req, res) => {
	//console.log(req.originalUrl);
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');
	let newPost = Object.assign({}, req.body, {subredditId});
	
	Post.create(newPost
	, (err, results) => {
		if (err) throw err;
		res.json(results);
	});


});
module.exports = router;
