import * as React from "react";
import { storiesOf } from "@storybook/react";
import TestMap from "./TestMap";
import TestProvider from "../../modules/client/TestProvider";

const stories = storiesOf("UI Components", module);

stories.add("TestMap", () => (
  <TestProvider>
    <TestMap />
  </TestProvider>
));
