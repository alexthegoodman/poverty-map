import * as React from "react";
import { render } from "enzyme";

import TestViz from "./TestViz";
import TestProvider from "../../modules/client/TestProvider";

describe("TestViz", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TestViz />
      </TestProvider>
    );
  });

  it("", () => {});
});
