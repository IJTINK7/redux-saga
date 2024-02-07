import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./reducers/testReducer";
import {counterReducer} from "./reducers/counterReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
	test: testReducer,
	counter: counterReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
