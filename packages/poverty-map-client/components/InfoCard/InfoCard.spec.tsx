import * as React from "react";
import { render } from "enzyme";

import InfoCard from "./InfoCard";
import TestProvider from "../../modules/client/TestProvider";

describe("InfoCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <InfoCard />
      </TestProvider>
    );
  });

  it("", () => {});
});
