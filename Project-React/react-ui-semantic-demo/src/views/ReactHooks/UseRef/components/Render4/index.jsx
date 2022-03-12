import React, {useRef, useEffect} from 'react';
import {Button, FormGroup, Input} from "semantic-ui-react";

const Render4 = () => {
	const InputRef = useRef();

	useEffect(() => {
		// console.log('(Render4) '+InputRef);
		InputRef.current.focus();
	}, []);
	
	const handlerLogin = () => {
		alert('다시 입력하세요');
		InputRef.current.focus();
	}

	return (
		<div className='render-area'>
			<FormGroup>
				<Input type='text' placeholder='username' ref={InputRef} />
				<Button className='primary' onClick={handlerLogin}>로그인</Button>
			</FormGroup>
		</div>
	)
}
export default Render4