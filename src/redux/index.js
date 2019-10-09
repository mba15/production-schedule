import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import employee from "./employees.js"

const rootReducer = combineReducers({employee});

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;