import * as React from "react";
import { render } from "enzyme";

import TestTable from "./TestTable";
import TestProvider from "../../modules/client/TestProvider";

describe("TestTable", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <TestTable />
      </TestProvider>
    );
  });

  it("", () => {});
});
