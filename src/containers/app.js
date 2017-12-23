import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Remaining from './remaining.js';
import FormGroup from './form-group.js';
import { addIncomingEntry, addOutgoingEntry, calculateRemaining } from '../actions/index';

class App extends Component {
	addIncoming = (entry) => {
		this.props.addIncomingEntry(entry);
	}

	addOutgoing = (entry) => {
		this.props.addOutgoingEntry(entry);
	}

	componentDidUpdate = (nextProps) => {
		this.props.calculateRemaining(this.props.incomingTotal, this.props.outgoingTotal);
	}

	render() {
		return(
			<div>
				<Remaining remaining={this.props.remaining}></Remaining>
				<FormGroup onAdd={this.addIncoming} items={this.props.incomingEntries} total={this.props.incomingTotal}></FormGroup>
				<FormGroup onAdd={this.addOutgoing} items={this.props.outgoingEntries} total={this.props.outgoingTotal}></FormGroup>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addIncomingEntry, addOutgoingEntry, calculateRemaining }, dispatch);
}

function mapStateToProps({ incomingEntries, incomingTotal, outgoingEntries, outgoingTotal, remaining }) {
	return { incomingEntries, incomingTotal, outgoingEntries, outgoingTotal, remaining };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);