import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import axios from 'axios';
 

export default class ShowPost extends Component {
	constructor(props) {
		super(props);
		console.log("ShowPost: constructor");
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
	componentWillMount() {
		console.log("ShowPost: componentWillMount");
	}
	componentDidMount() {
		console.log("ShowPost: componentDidMount")
		this.getPost(this.props.params.post_id);
		
	}
	componentWillReceiveProps(nextProps) {
		console.log("ShowPost: componentWillReceiveProps");
		console.log("ShowPost: nextProps: _id: " + nextProps.params.post_id);
		console.log("ShowPost: this.Props: _id: " + this.props.params.post_id);
		//console.log(nextProps)
		//console.log("ShowPost: this.Props")
		//console.log(this.props)
		if (this.props === nextProps) {
			return;
		} else {
			this.props = nextProps;
			this.getPost(this.props.params.post_id);
		}
	}
	
	componentWillUpdate() {
		console.log("ShowPost: componentWillUpdate");
	}
	componentDidUpdate() {
		console.log("ShowPost: componentDidUpdate");
	}
	componentWillUnmount() {
		console.log("ShowPost: componentWillUnmount")
	}
	handleClick() {
		let reactRoute = '/' + this.props.params.subredditId + '/' + this.props.params.post_id + '/comment';
		browserHistory.push(reactRoute);
	}
	render() {
		console.log("ShowPost: render")
		let comments =
			this.state.comments.map((comment) => {
				return <p>- {comment}</p>;
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