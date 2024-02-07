import {DECREASE_COUNT, INCREASE_COUNT} from "../constants";

export type IncreaseCountACType = ReturnType<typeof increaseCountAC>
export type DecreaseCountACType = ReturnType<typeof decreaseCountAC>
export const increaseCountAC = () => {
	return{type:INCREASE_COUNT}
}

export const decreaseCountAC = () => {
	return{type:DECREASE_COUNT}
}