import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';

const LayoutSub = () => {
	return (
		<Outlet />
	);
}
export default LayoutSub;