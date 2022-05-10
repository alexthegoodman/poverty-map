import * as React from "react";
import { render } from "enzyme";

import VizGrid from "./VizGrid";
import TestProvider from "../../modules/client/TestProvider";

describe("VizGrid", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <VizGrid />
      </TestProvider>
    );
  });

  it("", () => {});
});
