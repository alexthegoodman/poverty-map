import * as React from "react";
import { render } from "enzyme";

import BrandLogo from "./BrandLogo";
import TestProvider from "../../modules/client/TestProvider";

describe("BrandLogo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <BrandLogo />
      </TestProvider>
    );
  });

  it("", () => {});
});
