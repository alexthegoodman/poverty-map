import * as React from "react";

import { {{ name }}Props } from "./{{ name }}.d";

const {{ name }}: React.FC<{{ name }}Props> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click {{ name }}"),
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);
  return <>{{ name }}</>;
};

export default {{ name }};
