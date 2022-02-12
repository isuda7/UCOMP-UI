import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class UserHeader extends Component {
    render() {
        return (
			<header className='header'>
				<NavLink to='/Main/'>Main</NavLink>&nbsp;/&nbsp;
				<NavLink to='/Pages/Prototype'>Prototype</NavLink>
			</header>
		)
    }
}
export default UserHeader;