import { combineReducers } from "redux";
import loginReducer from "./Login";

const reducerObject = {
    userData: loginReducer
}

const combinedReducers = { ...reducerObject};

const rootReducer = combineReducers(combinedReducers);

export default rootReducer;