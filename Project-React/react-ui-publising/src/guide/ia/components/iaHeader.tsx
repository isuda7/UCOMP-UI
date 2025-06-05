import React from 'react';
import { NavLink } from 'react-router';

const IAHeader = () => {
	return (
		<header className="g-header g-inner">
			<h1 className="g-logo">프로젝트명</h1>
			<nav className="g-gnb">
				<ul>
					<li><NavLink to='guide/ia/guideList' className={({ isActive }) => isActive ? 'is-selected' : ''}>가이드</NavLink></li>
					<li><NavLink to='/' className={({ isActive }) => isActive ? 'is-selected' : ''}>페이지</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}
export default IAHeader;