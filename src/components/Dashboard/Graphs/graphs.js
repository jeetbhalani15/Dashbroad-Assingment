import React from "react";
import PiaChart from "./piaChart";
import Flowchart from "./flowCharts";
import { SummaryChart } from "./SummaryChart";
import "./graphs.css";

const Graphs = () => {
  return (
    <>
      <h3>Marketing</h3>
      <div>
        <div className="piachart-container">
          <div>
            <PiaChart />
          </div>
          <div>
            <Flowchart />
          </div>
        </div>
        <div>
          <SummaryChart />
        </div>
      </div>
    </>
  );
};

export default Graphs;