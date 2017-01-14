import React, { Component } from 'react';

export default class ListItem extends Component {
	render() {
		return (
			<li className="list-group-item">
				<h3>{this.props.post.title}</h3>
			</li>
		);
	}
}
