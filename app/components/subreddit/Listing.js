import React, { Component } from 'react';

import axios from 'axios';
import List from './List';

// This class the container of a list of posts
// which holds the state of the posts
export default class Listing extends Component {
	constructor() {
		super();
		console.log("Listing: constructor")
		this.state = {
			posts: []
		}
	}

	getSubReddit(subredditId) {
		axios.get('/posts/' + subredditId).then(posts => {
			//console.log(posts.data)
			this.setState({ posts: posts.data });
		});
	}

	componentDidMount() {
		//console.log("Listing: componentDidMount")
		this.getSubReddit(this.props.params.subredditId);
	}
	componentWillReceiveProps(nextProps) {

		this.getSubReddit(this.props.params.subredditId);
	}

	render() {

		console.log("Listing: render")
		return (
				<div className="row">	
			
					<List subredditId={this.props.params.subredditId} posts={this.state.posts} />

					{/* This code will dump the correct Child Component */}
	        		{this.props.children}
				</div>
			
		);
	}
}
