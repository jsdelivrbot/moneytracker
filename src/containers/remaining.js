import React, { Component } from 'react';

export default class Remaining extends Component {
	constructor(props) {
		super(props);

		this.state = {
			remaining: ''
		};
	}

	showRemaining() {
		return(
			<div>This is a <h5>test</h5></div>
		);
	}

	render() {
		return(
			<h2>{this.state.remaining.length ? `Amount remaining: ${this.state.remaining}` : 'Please enter your incoming/outgoing money.'}</h2>
		);
	}
}