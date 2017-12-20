import { combineReducers } from "redux";
import EntryReducer from "./reducer-entry";

const rootReducer = combineReducers({
  entry: EntryReducer
});

export default rootReducer;