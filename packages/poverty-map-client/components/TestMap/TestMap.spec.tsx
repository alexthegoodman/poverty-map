import * as React from "react";
import { render } from "enzyme";

import TestMap from "./TestMap";
import TestProvider from "../../modules/client/TestProvider";

describe("TestMap", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TestMap />
      </TestProvider>
    );
  });

  it("", () => {});
});
