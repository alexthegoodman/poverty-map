import { NutritionRequirements } from "./chapters/hunger.real-need";

export type SelectedChapter = {
  chapter: StoryChapter | null;
};

export type StoryChapter = {
  title: string;
  cards?: Array<{
    sourceData: any;
    col: number;
  }>;
};

export type StoryChapterList = Array<{
  title: string;
  chapters: Array<StoryChapter>;
}>;

export const StoryChapterList: StoryChapterList = [
  {
    title: "Hunger",
    chapters: [
      {
        title: "Real Need",
        cards: [
          // {
          //   sourceData: NutritionInformation,
          //   col: 1,
          // },
          // {
          //   sourceData: NutritionMapData,
          //   col: 2,
          // },
          {
            sourceData: NutritionRequirements,
            col: 3,
          },
        ],
      },
      {
        title: "Hard Land",
      },
      {
        title: "About Crops",
      },
      {
        title: "Little Resources",
      },
      {
        title: "Partial Harvest",
      },
    ],
  },
  {
    title: "Housing",
    chapters: [
      {
        title: "Barely Standing",
      },
      {
        title: "Dark and Dry",
      },
      {
        title: "Daily Hardship",
      },
      {
        title: "Harsh Climate",
      },
      {
        title: "Choked Growth",
      },
    ],
  },
  {
    title: "Transportation",
    chapters: [
      {
        title: "Hardly Acquired",
      },
      {
        title: "Tough Repairs",
      },
      {
        title: "Long Road",
      },
    ],
  },
  {
    title: "War",
    chapters: [
      {
        title: "Weapon Manufacturers",
      },
      {
        title: "Recruitment",
      },
      {
        title: "Training",
      },
      {
        title: "Political and Religious Forces",
      },
      {
        title: "Governments and Groups",
      },
    ],
  },
];
