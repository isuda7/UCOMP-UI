import React, { useState, useMemo } from 'react';
import { Input } from 'semantic-ui-react';

const hardCalculater = (number) => {
	console.log('어려운계산기');
	for (let i = 0; i < 999999999; i++) {
		return number + 10000;		
	}
}
const easeCalculater = (number) => {
	console.log('쉬운계산기');
	for (let i = 0; i < 999999999; i++) {
		return number + 10000;		
	}
}

const Memo1 = () => {
	const [hardNumber, setHardNumber] = useState(1);
	const [easeNumber, setEaseNumber] = useState(1);

	// const hardNum = hardCalculater(hardNumber);
	const hardNum = useMemo(() => {
		return hardCalculater(hardNumber);
	}, [hardNumber]);
	const easeNum = easeCalculater(easeNumber);

	return (
		<div className='memo-area'>
			<h3>어려운 계산기</h3>
			<Input type='number' value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
			<span> + 10000 = {hardNum}</span>
			<br/><br/>
			<h3>쉬운 계산기</h3>
			<Input type='number' value={easeNumber} onChange={(e) => setEaseNumber(parseInt(e.target.value))} />
			<span> + 1 = {easeNum}</span>
		</div>
	)
}

export default Memo1