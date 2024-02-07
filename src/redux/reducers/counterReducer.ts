import {DECREASE_COUNT, INCREASE_COUNT} from "../constants";
import {DecreaseCountACType, IncreaseCountACType} from "../actions/actionCreator";

export type CounterType = {
	count: number
}
export type ActionType = IncreaseCountACType | DecreaseCountACType

let initialState: CounterType = {
	count: 0
}
export const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
	switch (action.type) {
		case INCREASE_COUNT:
			return {...state, count: state.count + 1}
		case DECREASE_COUNT:
			return {...state, count: state.count - 1}
		default: return  state
	}
}
