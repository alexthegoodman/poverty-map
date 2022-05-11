import * as React from "react";
import { NavContext } from "../../context/NavContext/NavContext";
import { StoryChapterList } from "../../def/consts";

import { ChapterNavProps } from "./ChapterNav.d";

const ChapterNav: React.FC<ChapterNavProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click ChapterNav"),
}) => {
  const clickHandler = (e: MouseEvent) => onClick(e);

  const { state, dispatch } = React.useContext(NavContext);

  console.info("ChapterNav", state, dispatch);

  return (
    <section>
      <div>
        <nav>
          <ul>
            <>
              {StoryChapterList.map((story, i) => {
                if (state.selectedStory === i) {
                  return story.chapters.map((chapter, n) => {
                    const itemClassName =
                      state.selectedChapter === n ? "selected" : "";

                    return (
                      <li className={itemClassName}>
                        <a href="#!">{chapter.title}</a>
                      </li>
                    );
                  });
                } else {
                  return <></>;
                }
              })}
            </>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ChapterNav;
