import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
// import Customers from './components/Customers';
// import Orders from './components/Orders';
// import Inventory from './components/Inventory';
// import Conversion from './components/Conversion';
// import Settings from './components/Settings';
import SideNavigation from './components/sideBar';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNavigation />
        <div className="content">
          <Routes>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="" component={null} />
            <Route exact path="" component={null} />
            <Route exact path="" component={null} />
            <Route exact path="" component={null} />
            <Route exact path="" component={null} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
