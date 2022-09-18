import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import projectsReducer from "./projectsReducer";

const reducer = combineReducers({
    login: loginReducer,
    projects: projectsReducer
})

const store = configureStore ({
    reducer
});

export default store;