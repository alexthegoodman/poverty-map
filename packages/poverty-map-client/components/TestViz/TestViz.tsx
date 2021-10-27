import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { TestVizProps } from "./TestViz.d";
import { ScaleLinear } from "d3-scale";

// TODO: optmize garbage collection
// TODO: complete types

// graph dimensions and margins
const graphWidthInPixels = 500;
const graphHeightInPixels = 500;
const graphMarginInPixels = { top: 20, bottom: 20, left: 20, right: 20 };

// graph bounds
const boundsWidthInPixels =
  graphWidthInPixels - graphMarginInPixels.left - graphMarginInPixels.right;
const boundsHeightInPixels =
  graphHeightInPixels - graphMarginInPixels.top - graphMarginInPixels.bottom;

const getXDataEntity = (data) => data.metricB;
const getYDataEntity = (data) => data.issue;
// const getYDataEntity = (data) => +data.frequency * 100;
// // And then scale the graph by our data
const TestViz: React.FC<TestVizProps> = ({ data = null }) => {
  const xAxis = scaleBand({
    range: [0, boundsWidthInPixels], // for barcharts, this is the width
    domain: data.map(getXDataEntity), // provide data via filter function
    padding: 0.4, // spacing between bars
  });
  const yAxis = scaleBand({
    range: [boundsHeightInPixels, 0],
    domain: data.map(getYDataEntity),
  });

  const compose = (scale, accessor) => (composeData) =>
    scale(accessor(composeData)); // integrate scales with data to get positions
  const getXEntityPosition = compose(xAxis, getXDataEntity); // get position on the x axis
  const getYEntityPosition = compose(yAxis, getYDataEntity); // get position on the y axis

  return (
    <svg width={graphWidthInPixels} height={graphHeightInPixels}>
      {data ? (
        data.map((entity, index) => {
          const barHeight = boundsHeightInPixels - getYEntityPosition(entity);
          const barWidth = xAxis.bandwidth();

          return (
            <Group key={`bar-${index}`}>
              <Bar
                x={getXEntityPosition(entity)}
                y={getYEntityPosition(entity)}
                height={barHeight}
                width={barWidth}
                fill="#fc2e1c"
              />
            </Group>
          );
        })
      ) : (
        <></>
      )}
    </svg>
  );
};

export default TestViz;
