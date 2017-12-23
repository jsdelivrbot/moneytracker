import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { calculateRemaining } from '../actions/index';

export default class Remaining extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<h2>{this.props.remaining > 0 ? `Amount remaining: ${this.props.remaining}` : 'Please enter your incoming/outgoing money.'}</h2>
		);
	}
}