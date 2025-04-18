import React, { useReducer, useState } from 'react';
import { Button, FormGroup, Input } from 'semantic-ui-react';
import Student from './Student';

const reducer = (state, action) => {
	switch (action.type) {
		case 'add-student':
			const name = action.payload.name;
			const newStudent = {
				id: Date.now(),
				name,
				isHere: false,
			};
			return {
				count: state.count + 1,
				students: [...state.students, newStudent],
			};
		case 'delete-student':
			return {
				count: state.count - 1,
				students: state.students.filter(
					(student) => student.id !== action.payload.id
				),
			};
		case 'mark-student':
			return {
				count: state.count,
				students: state.students.map((student) => {
					if (student.id === action.payload.id) {
						return { ...student, isHere: !student.isHere };
					}
					return student;
				}),
			};
		default:
			return state;
	}
}
const initialState = {
	count: 0,
	students: [],
}

const Reducer2 = () => {
	const [name, setName] = useState('');
	const [stdInfo, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='reducer-area'>
			<h3>출석부</h3>
			<p>총 학생수: {stdInfo.count}</p>
			<br />
			<FormGroup>
				<Input type='text' value={name} placeholder='이름을 입력해주세요.'
					onChange={(e) => setName(e.target.value)}
				/>
				<Button className='primary' onClick={() => {
					dispatch({ type: 'add-student', playload: { name } });
				}}>추가</Button>
			</FormGroup>
			<div>
				{stdInfo.students.map((student) => {
					return (
						<Student
							key={student.id}
							name={student.name}
							dispatch={dispatch}
							id={student.id}
							isHere={student.isHere}
						/>
					)
				})}
			</div>
		</div>
	)
}
export default Reducer2
