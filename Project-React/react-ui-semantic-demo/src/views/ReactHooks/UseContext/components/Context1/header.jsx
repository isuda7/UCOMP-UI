import React, {useContext} from 'react';
import { DemoContext } from '../../context';

const Context1 = () => {
	const {isDark} = useContext(DemoContext);
	return (
		<div>
			Context Color : {isDark?'black':'primary'}
		</div>
	)
}
export default Context1