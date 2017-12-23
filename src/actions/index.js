export const ADD_INCOMING_ENTRY = 'ADD_INCOMING_ENTRY';

export function addIncomingEntry(value) {
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

export const CALCULATE_REMAINING = 'CALCULATE_REMAINING';

export function calculateRemaining(incoming = 0, outgoing = 0) {
	const remaining = incoming - outgoing;
	return {
		type: CALCULATE_REMAINING,
		payload: remaining
	}
}