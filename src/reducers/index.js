import { combineReducers } from "redux";
import { getIncomingEntries, getIncomingTotal } from "./reducer-incoming";
import { getOutgoingEntries, getOutgoingTotal } from "./reducer-outgoing";
import RemainingReducer from "./reducer-remaining";

const rootReducer = combineReducers({
  incomingEntries: getIncomingEntries,
  incomingTotal: getIncomingTotal,
  outgoingEntries: getOutgoingEntries,
  outgoingTotal: getOutgoingTotal,
  remaining: RemainingReducer
});

export default rootReducer;