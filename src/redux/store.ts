import {combineReducers, createStore} from "redux";
import {testReducer} from "./reducers/testReducer";
import {counterReducer} from "./reducers/counterReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
	test: testReducer,
	counter: counterReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, composeWithDevTools())
