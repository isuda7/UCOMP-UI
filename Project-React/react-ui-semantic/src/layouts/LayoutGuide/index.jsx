import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';

const LayoutGuide = ({children}) => {
  return (
    <div className="g-wrap">
        <header>
            <h1>Publishing Guide</h1>
        </header>
        <div className="g-cont">
          <Outlet />
        </div>
    </div>
  );
}
export default LayoutGuide;