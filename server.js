const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
//  Get rid off "mongoose mpromise deprecated" message by assign it to ES6 Promise
mongoose.Promise = Promise;
const bodyParser = require('body-parser');
const app = express();

const posts = require('./api/routes/posts');

const PORT = process.env.PORT || 8888;

app.use(express.static('public'));
// parse application/x-www-form-urlencoded 
//app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

app.use('/posts', posts);
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

let MONGODB = process.env.MONGODB_URI || "mongodb://localhost/reddit";
mongoose.connect(MONGODB);

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
