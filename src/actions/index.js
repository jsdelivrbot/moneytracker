export const ADD_INCOMING_ENTRY = 'ADD_INCOMING_ENTRY';

export function addIncomingEntry(value) {
	console.log('in action', value);
	return {
		type: ADD_INCOMING_ENTRY,
		payload: value
	}
}

export const ADD_OUTGOING_ENTRY = 'ADD_OUTGOING_ENTRY';

export function addOutgoingEntry(value) {
	return {
		type: ADD_OUTGOING_ENTRY,
		payload: value
	}
}