
import { createStore , applyMiddleware } from "redux";
import fetchReducer from "./reducer/fetchReducer";
import thunk from "redux-thunk";


const store = createStore(fetchReducer ,applyMiddleware(thunk))

export default store