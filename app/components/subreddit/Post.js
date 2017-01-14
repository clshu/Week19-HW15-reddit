import React, { Component } from 'react';

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
    	console.log("Submit")
    	console.log(this.state)
   		event.preventDefault();
   	
   		this.setState({
   			title: "",
			content: "",
			author: ""
   		})
  	}

	render() {
		return (
			<div className="col-sm-3">
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