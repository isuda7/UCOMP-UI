import React, {useState, useRef, useEffect} from 'react';
import {Button} from "semantic-ui-react";

const Render3 = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);
	useEffect(() => {
		countRef.current = countRef.current + 1;
		console.log('(Render3) 랜더링 수:', countRef.current);
	});
	const handleRender = () => {
		setCount(count + 1);
	}
	return (
		<div className='render-area'>
			<p>Count: {count}</p>
			<Button className='primary' onClick={handleRender}>올려</Button>
		</div>
	)
}
export default Render3