// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import UserList from './components/Users/UserList';
import RoleList from './components/Roles/RoleList';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/roles" element={<RoleList />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
