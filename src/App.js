import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import PageHeader from "./components/PageHeader/pageHeader";
import Orders from "./components/Orders/orders";
import SideNavigation from "./components/sideNavigation/sideBar";
import "./App.css";

function App() {
  const [pageHeader, setPageHeader] = useState("Dashbroad");
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <Router>
        <div className={`${isCollapsed ? "wide" : "content"}`}>
          <SideNavigation
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          <PageHeader pageHeader={pageHeader} />
          <Routes>
            <Route exact to="dashbroad" path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
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
