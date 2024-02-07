import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {decreaseCountAC, increaseCountAC} from "./redux/actions/actionCreator";

function App() {
	let counterStore = useSelector<RootStateType, number>(store=> store.counter.count)
	const dispatch = useDispatch()
	const increase = () => {
		dispatch(increaseCountAC())
	}
	const decrease = () => {
		dispatch(decreaseCountAC())
	}
	return (
		<div className="App">
			{counterStore}
			<button onClick={increase}>+</button>
			<button onClick={decrease}>-</button>
		</div>
	);
}

export default App;