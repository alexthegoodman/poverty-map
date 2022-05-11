import React, { useState, useEffect, createContext } from "react";
import { NavContextState } from "../context/NavContext/NavContext";
import { SelectedChapter, StoryChapter, StoryChapterList } from "../def/consts";

export const useChapter = (state: NavContextState): SelectedChapter => {
  let selectedChapter = null;

  StoryChapterList.forEach((story, i) => {
    if (state.selectedStory === i) {
      return story.chapters.forEach((chapter, n) => {
        if (state.selectedChapter === n) {
          selectedChapter = { chapter };
        }
      });
    }
  });

  if (selectedChapter === null) selectedChapter = { chapter: null };

  return selectedChapter;
};
