import React, { Component } from 'react';

export default class FormGroup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onAdd(this.state.term);
		this.setState({ term: '' });
	}

	onInputChange = (e) => {
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
						<input type="number" 
						value={this.state.term} 
						onChange={this.onInputChange} 
						required
						/>
					</div>
					<div className="form-group">
						<button>Add</button>
					</div>
				</form>
				<ul>
					{this.props.items.map(this.renderEntries)}
				</ul>
				<p>Total: {this.props.total}</p>
			</div>
		);
	}
}