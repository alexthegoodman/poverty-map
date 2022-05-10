import * as React from "react";

// TODO: set ESLint ignore for `next build` type check
import { ChapterNavProps } from "./ChapterNav.d";

const ChapterNav: React.FC<ChapterNavProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click ChapterNav"),
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);
  return (
    <section>
      <div>
        <nav>
          <ul></ul>
        </nav>
      </div>
    </section>
  );
};

export default ChapterNav;
