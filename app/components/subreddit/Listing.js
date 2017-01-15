import React, { Component } from 'react';

import axios from 'axios';
import List from './List';

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
			console.log(posts.data)
			this.setState({ posts: posts.data });
		});
	}

	componentDidMount() {
		console.log("componentDidMount")
		this.getSubReddit(this.props.params.subredditId);
	}
	componentWillReceiveProps() {
		console.log("componentWillReceiveProps")
		this.getSubReddit(this.props.params.subredditId);
	}
	componentDidUpdate() {
		console.log("componentDidUpdate")
		//this.getSubReddit(this.props.params.subredditId);
	}

	render() {
	
		return (
				<div className="row">	
			
					<List subredditId={this.props.params.subredditId} posts={this.state.posts} />

					{/* This code will dump the correct Child Component */}
	        		{this.props.children}
				</div>
			
		);
	}
}
