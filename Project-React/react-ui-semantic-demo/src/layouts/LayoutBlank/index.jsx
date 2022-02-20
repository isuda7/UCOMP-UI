import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutBlank = ({children}) => {
  return (
    <Outlet />
  );
}
export default LayoutBlank;