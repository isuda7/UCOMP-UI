import React, { useState, useCallback } from 'react';
import { Button, FormGroup, Input } from 'semantic-ui-react';
import Box from './Box';

const Callback2 = () => {
	const [size, setSize] = useState(100);
	const [isDark, setIsDark] = useState(false);

	const createBoxStyle = useCallback(() => {
		return {
			backgroundColor: 'pink',
			width: `${size}px`,
			height: `${size}px`,
		}
	}, [size]);

	return (
		<div className='callback-area' style={{background: isDark ? 'black':'white'}}>
			<FormGroup>
				<Input type='number' value={size} onChange={(e) => setSize(e.target.value)} />
				<Button onClick={() => setIsDark(!isDark)} className='primary'>Change</Button>
			</FormGroup>
			<Box createBoxStyle={createBoxStyle} />
		</div>
	)
}
export default Callback2;