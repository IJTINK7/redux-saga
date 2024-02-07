import {combineReducers, createStore} from "redux";
import {testReducer} from "./reducers/testReducer";
import {counterReducer} from "./reducers/counterReducer";


// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	test: testReducer,
	counter: counterReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
