import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "../reducers/post";
//add Reducer
const rootReducer = combineReducers({
  post: postReducer,
});
// add async event
export default createStore(rootReducer, applyMiddleware(thunk));
