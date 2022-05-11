import React, { useState, useReducer } from "react";

export interface NavContextState {
  selectedStory: number;
  selectedChapter: number; // TODO: useId()?
}

export const NavContextState = { selectedStory: 0, selectedChapter: 0 };

export const NavContextReducer = (state: NavContextState, action: any) => {
  switch (action.type) {
    // case value:
    //   break;

    default:
      return {
        ...state,
        [action.type]: action.payload,
      };
      break;
  }
};

export const NavContext = React.createContext<{
  state: NavContextState;
  dispatch: React.Dispatch<any>;
}>({
  state: NavContextState,
  dispatch: () => undefined,
});
