import * as React from "react";
import { VizGridProps } from "./VizGrid.d";

import { NavContext } from "../../context/NavContext/NavContext";
import { useChapter } from "../../hooks/useChapter";
import BarViz from "../BarViz/BarViz";
import TestMap from "../TestMap/TestMap";
import TestTable from "../TestTable/TestTable";
import InfoCard from "../InfoCard/InfoCard";

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
          <InfoCard />
        </div>
        <div className="col col2">
          <TestMap data={testData} />
          <TestTable data={testData} />
        </div>
        <div className="col col3">
          {chapter?.cards?.map((card, i) => {
            if (card.col === 3) {
              const { sourceData } = card;

              if (Array.isArray(sourceData.data[0])) {
                return (
                  <div key={`barVizWrapper-${i}`}>
                    <span>{sourceData.info.title}</span>
                    {sourceData.data.map((vizData, n) => {
                      return (
                        <BarViz
                          key={`barViz-${i}-${n}`}
                          analysisData={vizData}
                        />
                      );
                    })}
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default VizGrid;
