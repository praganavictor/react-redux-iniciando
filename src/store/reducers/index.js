import { combineReducers } from "redux";

import { reducers as courseReducers } from "./course";

const reducers = combineReducers({
  courseReducers
});

export { reducers };
