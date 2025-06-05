import { Outlet } from 'react-router-dom';
import '../css/guide.css';

const UILayout = () => {
	return (
		<div className='g-wrapper g-ui'>
			<Outlet />
		</div>
	);
}

export default UILayout;
