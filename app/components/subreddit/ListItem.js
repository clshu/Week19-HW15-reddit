import React, { Component } from 'react';

export default class ListItem extends Component {

	handleClick(event) {

		console.log(this.props.post);
	}
	render() {

		return (
			<li className="list-group-item"  onClick={(event) => this.handleClick(event)}>
				<p><strong>{this.props.post.title}</strong></p>
			</li>
		);
	}
}
