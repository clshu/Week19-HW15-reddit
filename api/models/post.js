const mongoose = require('mongoose');

const Post = new mongoose.Schema({
	author: String,
	comments: Array,
	content: String,
	subredditId: String,
	title: String,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', Post);
