import * as React from "react";

import { BrandLogoProps } from "./BrandLogo.d";

const BrandLogo: React.FC<BrandLogoProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click BrandLogo"),
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);
  return (
    <figure className="brandLogo">
      <div className="brandLogoInner">
        <span className="logoWordmark">
          <strong>Poverty Map</strong> 2022
        </span>
      </div>
    </figure>
  );
};

export default BrandLogo;
