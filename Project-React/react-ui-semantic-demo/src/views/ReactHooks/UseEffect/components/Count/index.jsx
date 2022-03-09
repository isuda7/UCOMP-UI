import React, { useState, useEffect } from 'react';
import { Button, Input } from "semantic-ui-react";

const Count = () => {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState('');
	const [names, setNames] = useState([]);
	const handleCountUpdate = () => {
		setCount(count + 1);
		setNames((prevState) => {
			if (names.length > 0) {
				return ([...prevState, ', '+input]);
			} else {
				return ([...prevState, input]);
			}
		})
	}
	const handleInputChange = (e) => {
		setInput(e.target.value);
	}

	useEffect(() => {
		if (count >= 6) {
			setCount(0);
			setNames([]);
		}
	}, [count]);

	return (
		<div className='count-area'>
			<p>count: {count}</p>
			<p>name: {names}</p>
			<p><Input type='text' onChange={handleInputChange} /></p>
			<br />
			<Button className='primary' onClick={handleCountUpdate}>Update</Button>
		</div>
	)
}
export default Count