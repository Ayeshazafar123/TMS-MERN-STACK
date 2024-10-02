// AdminDashboard.js
import React from 'react';
import Sidebar from '../components/SideBar'; // Adjust the path if Sidebar.js is in a different directory
import "../css_files/test.css";

const AdminDashboard = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: '20px' }}>
                <h2>Admin Dashboard</h2>
                {/* Admin dashboard content goes here */}
            </div>
        </div>
    );
};

export default AdminDashboard;
