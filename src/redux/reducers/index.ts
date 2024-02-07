import {combineReducers} from "redux";

export const test = (state: any = {}, action: any) => {
	return state
}
const rootReducer = combineReducers({
	test,
})
export default rootReducer