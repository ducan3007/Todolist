import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import tasksReducer from "./tasks/tasks.reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;