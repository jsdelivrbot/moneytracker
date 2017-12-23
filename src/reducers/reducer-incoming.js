import { ADD_INCOMING_ENTRY } from '../actions/index';

export function getIncomingEntries(state = [], action) {
	console.log('in the reducer');
	switch(action.type) {
		case ADD_INCOMING_ENTRY:
			const incoming = [action.payload, ...state];
			return incoming;
	}
	return state;
}

export function getIncomingTotal(state = 0, action) {
	switch(action.type) {
		case ADD_INCOMING_ENTRY:
			return state + parseInt(action.payload);
	}
	return state;
}