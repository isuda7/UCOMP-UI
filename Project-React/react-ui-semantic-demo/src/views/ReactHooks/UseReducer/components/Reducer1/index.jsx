import React, {useState, useReducer} from 'react';
import { Button, FormGroup, Input } from 'semantic-ui-react';

const reducer = (state, action) => {
	console.log('reducer가 일을 합니다', state, action);
	switch (action.type) {
		case 'desposit':
			return state + action.payload;
		case 'widthraw':
			return state - action.payload;
		default:
			return state;
	}
};

const Reducer1 = () => {
	const [number, setNumber] = useState(null);
	const [money, dispatch] = useReducer(reducer, 0);

	return (
		<div className='reducer-area'>
			<h3>useReducer 은행에 오신것을 환영합니다.</h3>
			<p>잔고: {money}원</p>
			<br/>
			<FormGroup>
				<Input type='number' value={number} onChange={(e)=> setNumber(parseInt(e.target.value))} step='1000' />
				<Button className='primary' 
					onClick={() => {
						dispatch({type:'desposit', payload: number});
					}}
				>예금</Button>
				<Button className='primary'
					onClick={() => {
						dispatch({type:'widthraw', payload: number});
					}}
				>출금</Button>
			</FormGroup>
		</div>
	)
}
export default Reducer1