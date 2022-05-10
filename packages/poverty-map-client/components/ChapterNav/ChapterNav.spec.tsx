import * as React from "react";
import { render } from "enzyme";

import ChapterNav from "./ChapterNav";
import TestProvider from "../../modules/client/TestProvider";

describe("ChapterNav", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <ChapterNav />
      </TestProvider>
    );
  });

  it("", () => {});
});
