import React, {useContext} from 'react';
import { Button } from 'semantic-ui-react';
import { DemoContext } from '../../context';
import ContextHeader from './header';

const Context1 = () => {
	const { isDark, setIsDark } = useContext(DemoContext);
	const handlerToggle = () => {
		setIsDark(!isDark);
	}
	return (
		<div className='context-area'>
			<ContextHeader />
			<Button className={isDark?'black':'primary'} onClick={handlerToggle}>토글</Button>
		</div>
	)
}
export default Context1