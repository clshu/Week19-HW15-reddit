import React, { Component } from 'react';

import axios from 'axios';
import List from './List';
import Post from './Post';

export default class Listing extends Component {
	constructor() {
		super();
		//console.log("constructor Listing")
		this.state = {
			posts: []
		}
	}

	getSubReddit(subredditId) {
		axios.get('/posts/' + subredditId).then(posts => {
			console.log("posts")
			console.log(posts)
			this.setState({ posts: posts.data });
		});
	}

	componentDidMount() {
		console.log("componentDidMount")
		this.getSubReddit(this.props.params.subredditId);
	}

	componentDidUpdate() {
		//console.log("componentDidUpdate")
		//this.getSubReddit(this.props.params.subredditId);
	}

	render() {
		console.log("Listing:render");
		return (
				<div className="row">
					<Post subredditId={this.props.params.subredditId} refreshList={(id) => this.getSubReddit(id)}/>
					<List subredditId={this.props.params.subredditId} posts={this.state.posts} />
				</div>
			
		);
	}
}
