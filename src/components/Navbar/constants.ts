import { Section } from "src/constants";
import { Route } from "src/constants/route";
export interface NavBarProps {
  notMainPage?: boolean;
}

export const LAST_YEAR = "last-year";
export const APPLY = "apply";
// on pages that aren't `/`, we want to show a link to main page instead of the sections on main page
export const NOT_MAIN_LINKS = {
  [Route.MAIN]: "Home",
};

export const NAVBAR_HEIGHT_PX = 80;

export const SECTIONS = {
  [APPLY]: "Apply now!",
  [Section.ABOUT]: "About",
  [Section.STORIES]: "Stories",
  [Section.PROJECTS]: "Projects",
  [Section.KEYNOTE_SPEAKERS]: "Keynote",
  // [Section.LEADERS]: "Leaders",
  [Section.JUDGES]: "Judges",
  [Section.SPONSORS]: "Sponsors",
  [Section.FAQ]: "FAQ",
  [LAST_YEAR]: "2020",
};

export const SectionColors: Record<Section, string> = {
  [Section.LANDING]: "F6EAEC",
  [Section.ABOUT]: "#E8EEF6",
  [Section.STORIES]: "#FCF4F2",
  [Section.PROJECTS]: "#FBFAF4",
  [Section.LEADERS]: "#F3F7F2",
  [Section.KEYNOTE_SPEAKERS]: "#F3F7F2",
  [Section.JUDGES]: "#F3F7F2",
  [Section.UW_ENGINEERING]: "#DEE9F6",
  [Section.SPONSORS]: "#DEE9F6",
  [Section.FAQ]: "#D1DEEF",
  [Section.FOOTER]: "#E8EAEB",
};

export const mobileBackgroundVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw + 30px) -30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100vw + 30px) -30px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const mobileListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const mobileItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
