import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router
import './Sidebar.css'; // Import your CSS file for Sidebar styling

const SideNavigation = () => (
  <div className="sidebar">
    <div className="logo">
      {/* Your logo image or text */}
      <h></h>
    </div>
    <ul className="nav-links">
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <Link to="/inventory">Inventory</Link>
      </li>
      <li>
        <Link to="/conversion">Conversion</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  </div>
);

export default SideNavigation;
