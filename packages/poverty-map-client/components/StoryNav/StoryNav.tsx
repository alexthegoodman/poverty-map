import * as React from "react";

// TODO: set ESLint ignore for `next build` type check
import { StoryNavProps } from "./StoryNav.d";

const StoryNav: React.FC<StoryNavProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click StoryNav"),
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);
  return (
    <section>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#!">Hunger</a>
            </li>
            <li>
              <a href="#!">Housing</a>
            </li>
            <li>
              <a href="#!">Transportation</a>
            </li>
            <li>
              <a href="#!">War</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default StoryNav;
