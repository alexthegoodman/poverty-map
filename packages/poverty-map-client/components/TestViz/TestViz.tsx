import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleLinear, scaleBand } from "@visx/scale";
import { TestVizProps } from "./TestViz.d";
// import { ScaleLinear } from "d3-scale";
import { MetricOptions } from "../../def/index.d";
import { enumToArray } from "../../pages/index";
import { maxBy } from "lodash";

// TODO: optmize garbage collection
// TODO: complete types

// graph dimensions and margins
const graphWidthInPixels = 500;
const graphHeightInPixels = 500;
const graphMarginInPixels = { top: 0, bottom: 25, left: 100, right: 0 };

// graph bounds
const boundsWidthInPixels =
  graphWidthInPixels - graphMarginInPixels.left - graphMarginInPixels.right;
const boundsHeightInPixels =
  graphHeightInPixels - graphMarginInPixels.top - graphMarginInPixels.bottom;

// const getXDataEntity = (entity) => entity.metricB;
const getXDataEntity = (entity: any) => entity.name;
const getYDataEntity = (entity: any) => entity.value;
// const getYDataEntity = (data) => +data.frequency * 100;
// // And then scale the graph by our data
const TestViz: React.FC<TestVizProps> = ({
  data = null,
  analysisData = null,
}) => {
  const metricOptions = enumToArray(MetricOptions);
  const maxMetricBTotal = maxBy(
    analysisData.metricB.totals,
    getYDataEntity
  ).value;

  const xAxis = scaleBand({
    range: [0, boundsWidthInPixels], // for barcharts, this is the width
    // domain: data.map(getXDataEntity), // provide data via filter function
    domain: metricOptions,
    padding: 0.4, // spacing between bars
  });

  const yAxis = scaleLinear({
    range: [boundsHeightInPixels, 0],
    // domain: [0, data.length],
    // domain: analysisData.metricB.totals.map(getYDataEntity),
    domain: [0, maxMetricBTotal],
  });

  // const yAxis = scaleBand({
  //   range: [boundsHeightInPixels, 0],
  //   domain: data.map(getYDataEntity),
  // });

  const composePositionGetter =
    (scaleValue: any, getValue: any) =>
    (
      entity: any // entity passed in via getXEntityPosition(scaleData)
    ) =>
      scaleValue(getValue(entity)); // create functions which integrate scales with data and get positions
  const getXEntityPosition = composePositionGetter(xAxis, getXDataEntity); // a function to get position of entity on the x axis
  const getYEntityPosition = composePositionGetter(yAxis, getYDataEntity); // a function to get position of entity on the y axis

  return (
    <svg
      width={graphWidthInPixels}
      height={graphHeightInPixels}
      style={{ overflow: "visible", paddingLeft: graphMarginInPixels.left }}
    >
      {data ? (
        <>
          <g>
            {analysisData.metricB.totals.map((entity: any, index: number) => {
              const barHeight =
                boundsHeightInPixels - getYEntityPosition(entity);
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
            })}
          </g>

          <g>
            <AxisLeft scale={yAxis} orientation="left" />
            <AxisBottom
              scale={xAxis}
              orientation="bottom"
              top={boundsHeightInPixels}
            />
          </g>
        </>
      ) : (
        <></>
      )}
    </svg>
  );
};

export default TestViz;
