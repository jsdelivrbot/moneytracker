import { CALCULATE_REMAINING } from '../actions/index';

export default function(state = 0, action) {
	switch(action.type) {
		case CALCULATE_REMAINING:
			return action.payload;
	}
	return state;
}