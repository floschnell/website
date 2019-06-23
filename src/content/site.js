import LANG from "./languages";

export const PAGES = {
  ABOUT_ME: "ABOUT_ME",
  PROJECTS: "PROJECTS",
  FLATBOT: "FLATBOT",
  TOWERS: "TOWERS",
  ASECO: "ASECO",
  AMBILIGHT: "AMBILIGHT",
  QUIZDUELL_BOT: "QUIZDUELL_BOT",
  WIFI_CLOCK: "WIFI_CLOCK",
  PHOTOGRAPHY: "PHOTOGRAPHY",
  FLATCRAWL: "FLATCRAWL"
};

export default {
  [LANG.DE]: {
    [PAGES.ABOUT_ME]: {},
    [PAGES.PROJECTS]: {
      [PAGES.FLATCRAWL]: {},
      [PAGES.TOWERS]: {},
      [PAGES.ASECO]: {},
      [PAGES.WIFI_CLOCK]: {},
    }
  },
  [LANG.EN]: {
    [PAGES.ABOUT_ME]: {},
    [PAGES.PROJECTS]: {
      [PAGES.FLATCRAWL]: {},
      [PAGES.TOWERS]: {},
      [PAGES.ASECO]: {},
      [PAGES.WIFI_CLOCK]: {},
    },
  },
};