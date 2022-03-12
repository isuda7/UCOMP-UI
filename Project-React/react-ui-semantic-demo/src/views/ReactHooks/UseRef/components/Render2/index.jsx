import React, {useState, useRef} from 'react';
import {Button} from "semantic-ui-react";

const Render2 = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);
	let countLet = 0;

	const handleRef = () => {
		countRef.current = countRef.current + 1;
		console.log('Ref:', countRef.current);
	}
	const handleLet = () => {
		countLet = countLet + 1;
		console.log('(Render2) Let:', countLet);
	}
	const handleRender = () => {
		setCount(count + 1);
	}
	const handlePrint = () => {
		console.log('(Render2) Ref:', countRef.current, ', Let:', countLet);
	}

	return (
		<div className='render-area'>
			<p>Ref: {countRef.current}</p>
			<p>Var: {countLet}</p>
			<Button className='primary' onClick={handleRef}>Ref 올려</Button>
			<Button className='primary' onClick={handleLet}>Let 올려</Button>
			<br/>
			<Button className='primary' onClick={handleRender}>Render</Button>
			<Button className='primary' onClick={handlePrint}>Print</Button>
		</div>
	)
}
export default Render2