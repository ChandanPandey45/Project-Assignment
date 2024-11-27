// src/components/Roles/RoleList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const response = await axios.get('/api/roles');
    setRoles(response.data);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button className="btn btn-primary">Add Role</button>
      <table className="table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
