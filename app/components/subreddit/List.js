import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
	constructor(props) {
		super(props);
		//console.log("constructor List")
	}

	render() {
		console.log("List:props")
		console.log(this.props)
		return (
			<div className="col-sm-9">
				
				<h2>Subreddit: {this.props.subredditId}</h2>
				
				<ul className="list-group">
					{this.props.posts.map(post => <ListItem key={post._id} post={post} />)}
				</ul>
			</div>
			)
	}
}