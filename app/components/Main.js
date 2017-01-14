import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		//console.log("main....");
		return (
			<div className="container-fluid">
	      <div className="jumbotron text-center">
	        <h2><strong>Reddit!</strong></h2>
	      </div>

	      
	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
	      
	    </div>
		);
	}
}
