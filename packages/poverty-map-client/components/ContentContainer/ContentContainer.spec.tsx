import * as React from "react";
import { render } from "enzyme";

import ContentContainer from "./ContentContainer";
import TestProvider from "../../modules/client/TestProvider";

describe("ContentContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ContentContainer />
      </TestProvider>
    );
  });

  it("", () => {});
});
