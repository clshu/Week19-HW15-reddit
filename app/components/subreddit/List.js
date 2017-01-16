import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import ListItem from './ListItem';

export default class List extends Component {
	constructor(props) {
		super(props);
	
	}
	handleButtonClick(event) {
		if (!this.props.subredditId) {
			return;
		}
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