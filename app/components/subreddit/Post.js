import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import axios from 'axios';

// A form to create a new Post

export default class Post extends Component {
	constructor(props) {
		super(props);
		//console.log("constructor Post")
		this.state = {
			title: "",
			content: "",
			author: ""
		}
	}

	handleTitleChange(event) {
   		this.setState({title: event.target.value});
  }
  handleContentChange(event) {
   		this.setState({content: event.target.value});
  }
  handleAuthorChange(event) {
   		this.setState({author: event.target.value});
  }

  handleSubmit(event) {
   		event.preventDefault();
   		let postRoute = '/posts/' + this.props.params.subredditId;
   		axios.post(postRoute, this.state)
   		.then((response) => {
        // Success then refresh the list of posts by
        // changing route to /:subredditId
        browserHistory.push('/' + this.props.params.subredditId);
   		})
   		.catch((error) => {
        console.log(error)
   			throw error;
   		}) 

   	
   		this.setState({
   		 title: "",
			 content: "",
			 author: ""
   		})
    
  }

	render() {
		return (
			<div className="col-sm-6">
        <h3>Create A New Post</h3>
				<form onSubmit={(event) => this.handleSubmit(event)}>
  					<div className="form-group">
   						<label htmlFor="title">Title</label>
   						<input value={this.state.title} onChange={(event) => this.handleTitleChange(event)} type="text" className="form-control" id="title" placeholder="Title" />
  					</div>
  					<div className="form-group">
   						<label htmlFor="content">Content</label>
    					<input value={this.state.content} onChange={(event) => this.handleContentChange(event)} type="text" className="form-control" id="content" placeholder="Content" />
  					</div>
  					<div className="form-group">
   						<label htmlFor="author">Author</label>
    					<input value={this.state.author} onChange={(event) => this.handleAuthorChange(event)} type="text" className="form-control" id="author" placeholder="Author" />
  					</div>
  
 					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
			)
	}
}