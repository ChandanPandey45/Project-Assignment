// src/components/Layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/roles">Roles</NavLink>
      <NavLink to="/permissions">Permissions</NavLink>
    </div>
  );
};

export default Sidebar;
