import * as React from "react";
import TestMap from "../TestMap/TestMap";
import TestTable from "../TestTable/TestTable";
import TestViz from "../TestViz/TestViz";

import {
  MetricOptions,
  MapTestData,
  MapAnalyticsData,
} from "../../def/index.d";
import { VizGridProps } from "./VizGrid.d";

import * as faker from "faker";

const VizGrid: React.FC<VizGridProps> = ({
  ref = null,
  className = "",
  testData = null,
  analysisData = null,
}) => {
  return (
    <section className="container">
      <section>
        <h1>Poverty Map 2021</h1>
      </section>
      <section className="topView">
        <div className={`panel mapPanel`}>
          <TestMap data={testData} />
        </div>
        <div className={`panel vizPanel`}>
          <TestViz data={testData} analysisData={analysisData} />
        </div>
      </section>
      <section className="bottomView">
        <TestTable data={testData} />
      </section>
    </section>
  );
};

export default VizGrid;
