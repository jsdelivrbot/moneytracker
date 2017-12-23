import { ADD_OUTGOING_ENTRY } from '../actions/index';

export function getOutgoingEntries(state = [], action) {
	switch(action.type) {
		case ADD_OUTGOING_ENTRY:
			const outgoing = [action.payload, ...state];
			return outgoing;
	}
	return state;
}

export function getOutgoingTotal(state = 0, action) {
	switch(action.type) {
		case ADD_OUTGOING_ENTRY:
			return state + parseInt(action.payload);
	}
	return state;
}