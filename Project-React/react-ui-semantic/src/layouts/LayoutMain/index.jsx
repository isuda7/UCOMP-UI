import React from 'react';
import { Outlet } from 'react-router-dom';
import { SubHeader, SubFooter } from '../components';
import './style.css';

const LayoutMain = ({children}) => {
  return (
    <div className='main-wrapper'>
      <SubHeader/>
      <Outlet />
      <SubFooter/>
    </div>
  );
}
export default LayoutMain; 