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
    <section className="chapterNav">
      <div className="chapterNavInner">
        <nav className="chapterNavListWrapper">
          <ul className="chapterNavList">
            <>
              {StoryChapterList.map((story, i) => {
                if (state.selectedStory === i) {
                  return story.chapters.map((chapter, n) => {
                    const itemClassName =
                      state.selectedChapter === n ? "selected" : "";

                    return (
                      <li key={`chapter-${i}-${n}`} className={itemClassName}>
                        <a href="#!">{chapter.title}</a>
                      </li>
                    );
                  });
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
