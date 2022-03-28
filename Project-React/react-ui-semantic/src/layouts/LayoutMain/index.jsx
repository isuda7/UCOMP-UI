import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';

const LayoutMain = () => {
	return (
		<Outlet />
	);
}
export default LayoutMain;