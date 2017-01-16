import React, { Component } from 'react';

import axios from 'axios';
import List from './List';

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
	componentWillMount() {
		console.log("Listing: componentWillMount")
	}
	componentDidMount() {
		console.log("Listing: componentDidMount")
		this.getSubReddit(this.props.params.subredditId);
	}
	componentWillReceiveProps(nextProps) {
		console.log("Listing: componentWillReceiveProps")
		console.log("Listing: nextProps:subredditId " + nextProps.params.subredditId);
		console.log("Listing: this.Props:subredditId " + this.props.params.subredditId);
		this.getSubReddit(this.props.params.subredditId);
	}
	componentDidUpdate() {
		console.log("Listing: componentDidUpdate")
		//this.getSubReddit(this.props.params.subredditId);
	}
	componentWillUpdate() {
		console.log("Listing: componentWillUpdate")
	}
	componentWillUnmount() {
		console.log("Listing: componentWillUnmount")
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
