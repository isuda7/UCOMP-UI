import React, { useState, useEffect, useCallback } from 'react';
import { Button, Input } from 'semantic-ui-react';

const Callback1 = () => {
	const [number, setNumber] = useState(0);
	const someFunction = useCallback(() => {
		console.log('someFunction');
		return;
	}, [number]);
	
	useEffect(() => {
		console.log('useEffect');		
	}, [someFunction]);

	return (
		<div className='callback-area'>
			<Input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}  />
			<Button className='primary' onClick={someFunction}>Call sumeFunc</Button>
		</div>
	)
}
export default Callback1;
