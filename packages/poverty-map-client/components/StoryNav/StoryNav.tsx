import * as React from "react";
import { NavContext } from "../../context/NavContext/NavContext";
import { StoryChapterList } from "../../def/consts";

import { StoryNavProps } from "./StoryNav.d";

const StoryNav: React.FC<StoryNavProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click StoryNav"),
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);

  const { state, dispatch } = React.useContext(NavContext);

  console.info("StoryNav", state, dispatch);

  return (
    <section className="storyNav">
      <div className="storyNavInner">
        <nav className="storyNavListWrapper">
          <ul className="storyNavList">
            <>
              {StoryChapterList.map((story, i) => {
                const onItemClick = () =>
                  dispatch({
                    type: "selectedStory",
                    payload: i,
                  });
                const itemClassName =
                  state.selectedStory === i ? "selected" : "";

                return (
                  <li className={itemClassName} onClick={onItemClick}>
                    <a href="#!">{story.title}</a>
                  </li>
                );
              })}
            </>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default StoryNav;
