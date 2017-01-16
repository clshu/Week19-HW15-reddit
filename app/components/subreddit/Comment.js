import React, { Component } from 'react';
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
   		let postRoute = '/posts/' + this.props.params.post_id;
   		axios.put(postRoute, this.state)
   		.then((response) => {
   		})
        // Success then refresh the list of posts by
        // changing route to /:subredditId/:post_id
        /*
        browserHistory.push('/' + this.props.params.subredditId);
   		})
   		*/
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
    					<textarea className="form-control" rows="10" value={this.state.comment} onChange={(event) => this.handleCommentChange(event)} ></textarea>
  					</div>
				</form>
				<button type="submit" className="btn btn-primary" >Submit</button>
			</div>
			);
	}
}