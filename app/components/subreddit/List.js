import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import ListItem from './ListItem';

// This class holds and show a list of posts
// if it's clicked then show the details of the post by switching
// route to /:subredditId/new
export default class List extends Component {
	constructor(props) {
		super(props);
	
	}
	handleButtonClick(event) {
		if (!this.props.subredditId) {
			return;
		}
		// Change route to /:subredditId/new to add a new post
		browserHistory.push(`/${this.props.subredditId}/new`);
	}

	render() {
		
		return (
			<div className="col-sm-6">
				
				<h3>Subreddit: {this.props.subredditId}</h3>
				<button className="btn btn-primary" type="button" onClick={(event) => this.handleButtonClick(event)}>Create A New Post</button>
				<ul className="list-group">
					{this.props.posts.map(post => <ListItem key={post._id} post={post} />)}
				</ul>
			</div>
			)
	}
}