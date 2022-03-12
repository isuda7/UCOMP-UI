import React, {useState, useRef} from 'react';
import {Button} from "semantic-ui-react";

const Render1 = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);
	console.log('(Render1) 랜더링');
	const handleState = () => {
		setCount(count + 1);
	}
	const handleRef = () => {
		countRef.current = countRef.current + 1;
		console.log('(Render1) Ref: ', countRef.current);
	}

	return (
		<div className='render-area'>
			<p>State: {count}</p>
			<p>Ref: {countRef.current}</p>
			<Button className='primary' onClick={handleState}>State 올려</Button>
			<Button className='primary' onClick={handleRef}>Ref 올려</Button>
		</div>
	)
}
export default Render1