import { ADD_INCOMING_ENTRY, ADD_OUTGOING_ENTRY } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case ADD_INCOMING_ENTRY: 
			const incoming = [action.payload, ...state];
			return incoming;

		case ADD_OUTGOING_ENTRY: 
			const outgoing = state.push(action.payload);
			return outgoing;
	}
	return state;
}