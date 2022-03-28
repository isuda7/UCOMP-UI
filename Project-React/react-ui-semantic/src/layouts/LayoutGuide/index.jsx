import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';

const LayoutGuide = ({children}) => {
  return (
    <div className='g_wrap'>
        <header>
            <h1>Publishing Guide</h1>
        </header>
        <div className='g_cont'>
          <Outlet />
        </div>
    </div>
  );
}
export default LayoutGuide;