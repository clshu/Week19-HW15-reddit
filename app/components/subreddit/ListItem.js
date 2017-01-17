import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

// The single line item of the list in <List />
// when clicked, it changes route to /:subredditId/:post._id
// to load <ShowPost />
export default class ListItem extends Component {
/*
	handleClick(event) {
		let reactPath = '/' + this.props.post.subredditId + '/' + this.props.post._id;
		browserHistory.push(reactPath);
	}
*/
	render() {
		let reactPath = '/' + this.props.post.subredditId + '/' + this.props.post._id;

		return (
			<Link to={reactPath}>
				<li className="list-group-item">
					<p>{this.props.post.date}: <strong>{this.props.post.title}</strong></p>
				</li>
			</Link>
		);
	}
}
