let initialState: any =[]
export const testReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case "A":
			return state
	}
	return state
}

export const testAC = () => {
	return {type: "A"} as const
}