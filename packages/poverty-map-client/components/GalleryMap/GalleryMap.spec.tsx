import * as React from "react";
import { render } from "enzyme";

import GalleryMap from "./GalleryMap";
import TestProvider from "../../modules/client/TestProvider";

describe("GalleryMap", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <TestProvider>
        <GalleryMap />
      </TestProvider>
    );
  });

  it("", () => {});
});
