import React from "react";
import Graphs from "../Graphs/graphs";
import RecentOrders from "../recentOrders";
import "./dashboardSummery.css";

const DashboardSummary = () => {
  return (
    <div className="summary-box">
      <div>
        <Graphs />
      </div>
      <div>
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardSummary;
