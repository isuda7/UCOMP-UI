import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayoutBlank = ({children}) => {
  return (
    <Outlet />
  );
}
export default UserLayoutBlank;