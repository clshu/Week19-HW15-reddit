import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import axios from 'axios';
 

export default class ShowPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: ""
		}
		
	}
	handleCommentChange(event) {
		this.setState({comment: event.target.value});
	}
	handleSubmit(event) { 
		event.preventDefault();

		// Add a new comment
   		let postRoute = '/posts/' + this.props.params.post_id;
   		axios.put(postRoute, this.state)
   		.then((response) => {
   			console.log(response);
   		
        // Success then refresh the list of posts by
        // changing route to /:subredditId/:post_id
        // to load <ShowPost />
        browserHistory.push('/' + this.props.params.subredditId + '/' + this.props.params.post_id);
   		})
   		
   		.catch((error) => {
       		console.log(error)
   			throw error;
   		}) 
    
	}
	render() {
		return (
			<div className="col-sm-6">
				<form onSubmit={(event) => this.handleSubmit(event)}>
  					<div className="form-group">
    					<label htmlFor="new-comment">New Comment</label>
    					<textarea className="form-control" rows="10" value={this.state.comment} onChange={(event) => this.handleCommentChange(event)} required></textarea>
  					</div>
  					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
	
			</div>
			);
	}
}