import React, { Component } from 'react';
import Remaining from '../containers/remaining.js';
import FormGroup from '../containers/form-group.js';

export default class App extends Component {
	render() {
		return(
			<div>
				<Remaining></Remaining>
				<FormGroup></FormGroup>
			</div>
		);
	}
}