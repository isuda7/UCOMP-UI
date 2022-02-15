import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../IncludeHeader/IncludeHeader';
import UserFooter from '../IncludeFooter/IncludeFooter';
import './UserLayout.css';

const UserLayout = ({children}) => {
  return (
    <div className='main-wrapper'>
      <UserHeader/>
      <Outlet />
      <UserFooter/>
    </div>
  );
}
export default UserLayout;