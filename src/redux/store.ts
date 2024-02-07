import {createStore, compose} from "redux";
import rootReducer from "./reducers";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState: Partial<{ test: any; }> | undefined) => createStore(rootReducer, preloadedState, composeEnhancers)
const store = configureStore({})
export default store;