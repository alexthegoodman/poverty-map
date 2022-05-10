import * as React from "react";
import {
  NavContext,
  NavContextReducer,
  NavContextState,
} from "../../context/NavContext/NavContext";
import ChapterNav from "../ChapterNav/ChapterNav";
import StoryNav from "../StoryNav/StoryNav";
import VizGrid from "../VizGrid/VizGrid";

import { ContentContainerProps } from "./ContentContainer.d";

const ContentContainer: React.FC<ContentContainerProps> = ({
  ref = null,
  className = "",
  testData = null,
  analysisData = null,
}) => {
  const [state, dispatch] = React.useReducer(
    NavContextReducer,
    NavContextState
  );

  return (
    <NavContext.Provider value={{ state, dispatch }}>
      <header>
        <div>
          <StoryNav />
        </div>
      </header>
      <section>
        <div>
          <div>
            <ChapterNav />
          </div>
          <div>
            <VizGrid testData={testData} analysisData={analysisData} />
          </div>
        </div>
      </section>
    </NavContext.Provider>
  );
};

export default ContentContainer;
