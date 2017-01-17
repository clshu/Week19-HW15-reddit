import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import axios from 'axios';
 
// This class display a Post
export default class ShowPost extends Component {
	constructor(props) {
		super(props);
		//console.log("ShowPost: constructor");
		//console.log(this.props.params);
		this.state = {
			title: "",
			content: "",
			author: "",
			comments: []
		}	
	}
	getPost(post_id) {
		// GET /posts/post_id/:post_id
		axios.get('/posts/post_id/' + post_id).then(post => {
			//console.log(post.data)
			//this.setState({ posts: posts.data });
			this.setState ({
				title: post.data.title,
				content: post.data.content,
				author: post.data.author,
				comments: post.data.comments
			})
		});
	}
	
	componentDidMount() {
		//console.log("ShowPost: componentDidMount")
		this.getPost(this.props.params.post_id);
		
	}
	componentWillReceiveProps(nextProps) {

		// This is invoked if React Route is set to /:subredditId/:post_id second time and beyond
		// React Route is set to 
		if (this.props === nextProps) {
			return;
		} else {
			this.props = nextProps;
			this.getPost(this.props.params.post_id);
		}
	}

	handleClick() {
		let reactRoute = '/' + this.props.params.subredditId + '/' + this.props.params.post_id + '/comment';
		browserHistory.push(reactRoute);
	}

	render() {
		//console.log("ShowPost: render")
		// reverse order to show the latest first
		let comments =
			this.state.comments.reverse().map((comment, index) => {
				return <p key={index}>- {comment}</p>;
			})
		
		return (
			<div className="col-sm-6">
				<div className="show-post">
					<h4>Title</h4>
					<div className="well">
						{this.state.title}
					</div>
					<h4>Content</h4>
					<div className="well">
						{this.state.content}
					</div>
					<h4>Author</h4>
					<div className="well">
						{this.state.author}
					</div>
					<h4>Comments</h4>

					<div className="well">
						{comments}
					</div>
					
					<input className="btn btn-primary" type="button" onClick={(event) => this.handleClick(event)} value="Add a New Comment" />
					
				</div>
			</div>
			)
	}
}