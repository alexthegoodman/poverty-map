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
    <section className="vizGrid">
      <div className="vizGridInner">
        <div className="col col1">
          <TestViz data={testData} analysisData={analysisData} />
        </div>
        <div className="col col2">
          <TestMap data={testData} />
        </div>
        <div className="col col3">
          <TestTable data={testData} />
          <TestViz data={testData} analysisData={analysisData} />
        </div>
      </div>
    </section>
  );
};

export default VizGrid;
