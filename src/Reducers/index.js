import { combineReducers } from "redux";
import loginReducer from "./Login";
import quotesReducer from "./quotes";

const reducerObject = {
    userData: loginReducer,
    quotes: quotesReducer
}

const combinedReducers = { ...reducerObject};

const rootReducer = combineReducers(combinedReducers);

export default rootReducer;