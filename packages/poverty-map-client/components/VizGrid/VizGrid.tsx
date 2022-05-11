import * as React from "react";
import { VizGridProps } from "./VizGrid.d";

import { NavContext } from "../../context/NavContext/NavContext";
import { useChapter } from "../../hooks/useChapter";
import BarViz from "../BarViz/BarViz";

const VizGrid: React.FC<VizGridProps> = ({
  ref = null,
  className = "",
  testData = null,
  analysisData = null,
}) => {
  const { state, dispatch } = React.useContext(NavContext);

  const { chapter } = useChapter(state);

  console.info("VizGrid", chapter);

  return (
    <section className="vizGrid">
      <div className="vizGridInner">
        <div className="col col1">
          {chapter?.cards?.map((card, i) => {
            if (card.col === 1) {
              const { sourceData } = card;

              if (Array.isArray(sourceData.data[0])) {
                return sourceData.data.map((vizData, n) => {
                  return <BarViz analysisData={vizData} />;
                });
              }
            }
          })}
        </div>
        <div className="col col2">{/* <TestMap data={testData} /> */}</div>
        <div className="col col3">{/* <TestTable data={testData} /> */}</div>
      </div>
    </section>
  );
};

export default VizGrid;
