import { Category } from "../components/SidePanel";

type SidePanelData = Record<string, Category>;

export const useSourceHook = (): SidePanelData => {
  return {
    stuff: {
      listItems: [
        { title: "item1", link: "http://www.google.com/" },
        { title: "item2", link: "http://www.reddit.com" },
      ],
      seeMoreLink: "http://www.google.com",
    },
    more_stuff: {
      listItems: [
        { title: "item1", link: "http://www.google.com/" },
        { title: "item2", link: "http://www.reddit.com" },
      ],
      seeMoreLink: "http://www.google.com",
    },
    alottastuff: {
      listItems: [
        { title: "item1", link: "http://www.google.com/" },
        { title: "item2", link: "http://www.reddit.com" },
      ],
      seeMoreLink: "http://www.google.com",
    },
    otherStuff: {
      listItems: {
        title: "message",
        data: "what it's about",
        ladedada: "more info",
      },
      seeMoreLink: "http://www.youtube.com",
    },
  };
};
