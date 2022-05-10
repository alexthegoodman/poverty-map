import * as React from "react";
import { render } from "enzyme";

import StoryNav from "./StoryNav";
import TestProvider from "../../modules/client/TestProvider";

describe("StoryNav", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <StoryNav />
      </TestProvider>
    );
  });

  it("", () => {});
});
