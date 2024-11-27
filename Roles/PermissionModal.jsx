// src/components/Roles/PermissionModal.jsx
import React, { useState } from 'react';

const PermissionModal = ({ role, permissions, onSave }) => {
  const [selectedPermissions, setSelectedPermissions] = useState(role.permissions || []);

  const togglePermission = (permission) => {
    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions(selectedPermissions.filter((p) => p !== permission));
    } else {
      setSelectedPermissions([...selectedPermissions, permission]);
    }
  };

  return (
    <div>
      <h3>Edit Permissions for {role.name}</h3>
      <ul>
        {permissions.map((permission) => (
          <li key={permission}>
            <label>
              <input
                type="checkbox"
                checked={selectedPermissions.includes(permission)}
                onChange={() => togglePermission(permission)}
              />
              {permission}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => onSave(selectedPermissions)}>Save</button>
    </div>
  );
};

export default PermissionModal;
