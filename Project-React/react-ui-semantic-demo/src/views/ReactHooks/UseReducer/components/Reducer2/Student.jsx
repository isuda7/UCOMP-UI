import React from 'react';
import { Button } from 'semantic-ui-react';

const Student = ({ name, dispatch, id, isHere}) => {
	return (
		<div>
			<span
				style={{
					textDecoration: isHere? 'line-through' : 'none',
					color: isHere? 'gray' : 'black',
				}}
				onClick={() => {
					dispatch({ type: 'mark-student', payload: {id} });
				}}
			>{name}</span>
			<Button className='secondary' 
				onClick={() => {
					dispatch({ type: 'delete-student', payload: { id } })
				}}
			>삭제</Button>
		</div>
	)
}
export default Student