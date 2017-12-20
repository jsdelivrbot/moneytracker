import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addIncomingEntry, addOutgoingEntry } from '../actions/index' ;

class FormGroup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			entries: [],
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();

		this.props.addIncomingEntry(this.state.term);
		this.setState({ term: '' });
	}

	onInputChange(e) {
		this.setState({ term: e.target.value });
	}

	renderEntries(entry) {
		return (
			<li key={entry}>{ entry }</li>
		);
	}

	render() {
		return(
			<div>
				<form onSubmit={this.onFormSubmit} className="form-inline">
					<div className="form-group">
						<input type="text" 
						value={this.state.term} 
						onChange={this.onInputChange} 
						/>
					</div>
					<div className="form-group">
						<button>Add</button>
					</div>
				</form>
				<ul>

					{this.props.entry.map(this.renderEntries)}
					
				</ul>				
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addIncomingEntry, addOutgoingEntry }, dispatch);
}

function mapStateToProps({ entry }) {
	return { entry };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormGroup);