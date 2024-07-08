import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
// import Customers from './components/Customers';
// import Orders from './components/Orders';
// import Inventory from './components/Inventory';
// import Conversion from './components/Conversion';
// import Settings from './components/Settings';
import SideNavigation from './components/sideBar';
import "./App.css";
import PageHeader from './components/PageHeader/pageHeader';

function App() {
  const [pageHeader, setPageHeader] = useState("Dashbroad")
  return (
    <>
    <Router>
        <div className="content">
        <SideNavigation />
        <PageHeader pageHeader={pageHeader} />
        <Routes>
            <Route exact to="dashbroad" path="/dashboard" element={<Dashboard/>} />
            <Route component={null} />
            <Route component={null} />
            <Route component={null} />
            <Route component={null} />
            <Route component={null} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
