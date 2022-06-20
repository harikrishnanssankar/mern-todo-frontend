import { combineReducers } from "redux";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
    todos: todoReducer,
    auth:authReducer
})

export default reducers;