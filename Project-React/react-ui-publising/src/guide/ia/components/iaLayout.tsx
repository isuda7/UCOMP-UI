import React from 'react';
import IAHeader from './iaHeader';
import { Outlet } from 'react-router-dom';
import '../css/import.css';

const IALayout = () => {
	return (
		<div className='g-wrapper g-ia'>
			<IAHeader />
			<Outlet />
		</div>
	);
}

export default IALayout;
