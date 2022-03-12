import React, { useState, useMemo, useEffect } from 'react';
import { Button, Input } from 'semantic-ui-react';

const Memo2 = () => {
	const [number, setNumber] = useState(0);
	const [isKorea, setIsKorea] = useState(true);

	const location = useMemo(() => {
		return {
			contry: isKorea ? '한국' : '외국'
		}
	}, [isKorea]);

	useEffect(() => {
		console.log('useEffect');
	}, [location]);

	return (
		<div className='memo-area'>
			<h3>하루에 몇끼 먹어요?</h3>
			<Input type='Number' value={number} onChange={(e) => setNumber(e.target.value)} />
			<br />
			<br />
			<h3>어느 나라에 있어요?</h3>
			<p>나라: {location.contry}</p>
			<Button type='button' className='primary' onClick={(e) => setIsKorea(!isKorea)}>Submit</Button>
		</div>
	)
}

export default Memo2