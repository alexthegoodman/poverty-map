import * as React from "react";

import { InfoCardProps } from "./InfoCard.d";

const InfoCard: React.FC<InfoCardProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click InfoCard"),
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);
  return (
    <section className="infoCard">
      <div className="infoCardInner">
        <h1>Real Needs</h1>
        <ul>
          <li>InfoCard</li>
          <li>InfoCard</li>
          <li>InfoCard</li>
          <li>InfoCard</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoCard;
