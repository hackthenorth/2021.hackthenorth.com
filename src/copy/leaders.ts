import {
  JustinTrudeauHeadshotImg,
  JustinTrudeauHeadshotImg2x,
  VinodKhoslaHeadshotImg,
  VinodKhoslaHeadshotImg2x,
  ChamathPalihapitiyaHeadshotImg,
  ChamathPalihapitiyaHeadshotImg2x,
  TiffaniAshleyBellHeadshotImg,
  TiffaniAshleyBellHeadshotImg2x,
  AnnMakosinskiHeadshotImg,
  AnnMakosinskiHeadshotImg2x,
  EricMigicovskyHeadshotImg,
  EricMigicovskyHeadshotImg2x,
  JackDorseyHeadshotImg,
  JackDorseyHeadshotImg2x,
  DylanFieldHeadshotImg,
  DylanFieldHeadshotImg2x,
  AliPartoviHeadshotImg,
  AliPartoviHeadshotImg2x,
  CatNooneHeadshotImg,
  CatNooneHeadshotImg2x,
  AndrewDSouzaHeadshotImg,
  AndrewDSouzaHeadshotImg2x,
  JayShahHeadshotImg,
  JayShahHeadshotImg2x,
  JenDewaltHeadshotImg,
  JenDewaltHeadshotImg2x,
  QasarYounisHeadshotImg,
  QasarYounisHeadshotImg2x,
  LukeChesserHeadshotImg,
  LukeChesserHeadshotImg2x,
  HongweiLiuHeadshotImg,
  HongweiLiuHeadshotImg2x,
} from "src/assets/img";

export interface LeaderInfo {
  name: string;
  title: string;
  src: string;
  srcSet: string;
}

export const LEADERS_LIST: LeaderInfo[] = [
  {
    name: "Qasar Younis",
    title: "CEO, Applied Intuition",
    src: QasarYounisHeadshotImg,
    srcSet: `${QasarYounisHeadshotImg} 1x, ${QasarYounisHeadshotImg2x} 2x`,
  },
  {
    name: "Jay Shah",
    title: "Director, Velocity",
    src: JayShahHeadshotImg,
    srcSet: `${JayShahHeadshotImg} 1x, ${JayShahHeadshotImg2x} 2x`,
  },
  {
    name: "Jen Dewalt",
    title: "Founder, Zube",
    src: JenDewaltHeadshotImg,
    srcSet: `${JenDewaltHeadshotImg} 1x, ${JenDewaltHeadshotImg2x} 2x`,
  },
  {
    name: "Justin Trudeau",
    title: "Prime Minister of Canada",
    src: JustinTrudeauHeadshotImg,
    srcSet: `${JustinTrudeauHeadshotImg} 1x, ${JustinTrudeauHeadshotImg2x} 2x`,
  },
  {
    name: "Vinod Khosla",
    title: "Founder, Khosla Ventures",
    src: VinodKhoslaHeadshotImg,
    srcSet: `${VinodKhoslaHeadshotImg} 1x, ${VinodKhoslaHeadshotImg2x} 2x`,
  },
  {
    name: "Chamath Palihapitiya",
    title: "Founder and CEO, Social Capital",
    src: ChamathPalihapitiyaHeadshotImg,
    srcSet: `${ChamathPalihapitiyaHeadshotImg} 1x, ${ChamathPalihapitiyaHeadshotImg2x} 2x`,
  },
  {
    name: "Tiffani Ashley Bell",
    title: "Founder and Executive Director, The Human Utility",
    src: TiffaniAshleyBellHeadshotImg,
    srcSet: `${TiffaniAshleyBellHeadshotImg} 1x, ${TiffaniAshleyBellHeadshotImg2x} 2x`,
  },
  {
    name: "Ann Makosinski",
    title: "Inventor and Speaker",
    src: AnnMakosinskiHeadshotImg,
    srcSet: `${AnnMakosinskiHeadshotImg} 1x, ${AnnMakosinskiHeadshotImg2x} 2x`,
  },
  {
    name: "Jack Dorsey",
    title: "CEO and Co-founder, Square",
    src: JackDorseyHeadshotImg,
    srcSet: `${JackDorseyHeadshotImg} 1x, ${JackDorseyHeadshotImg2x} 2x`,
  },
  {
    name: "Cat Noone",
    title: "CEO, Stark",
    src: CatNooneHeadshotImg,
    srcSet: `${CatNooneHeadshotImg} 1x, ${CatNooneHeadshotImg2x} 2x`,
  },
  {
    name: "Dylan Field",
    title: "Co-founder and CEO, Figma",
    src: DylanFieldHeadshotImg,
    srcSet: `${DylanFieldHeadshotImg} 1x, ${DylanFieldHeadshotImg2x} 2x`,
  },
  {
    name: "Ali Partovi",
    title: "CEO, Neo",
    src: AliPartoviHeadshotImg,
    srcSet: `${AliPartoviHeadshotImg} 1x, ${AliPartoviHeadshotImg2x} 2x`,
  },
  {
    name: "Andrew D’Souza",
    title: "Co-founder and CEO, Clearbanc",
    src: AndrewDSouzaHeadshotImg,
    srcSet: `${AndrewDSouzaHeadshotImg} 1x, ${AndrewDSouzaHeadshotImg2x} 2x`,
  },
  {
    name: "Eric Migicovsky",
    title: "Partner, Y Combinator",
    src: EricMigicovskyHeadshotImg,
    srcSet: `${EricMigicovskyHeadshotImg} 1x, ${EricMigicovskyHeadshotImg2x} 2x`,
  },
  {
    name: "Hongwei Liu",
    title: "CEO, Mappedin",
    src: HongweiLiuHeadshotImg,
    srcSet: `${HongweiLiuHeadshotImg} 1x, ${HongweiLiuHeadshotImg2x} 2x`,
  },
  {
    name: "Luke Chesser",
    title: "Co-founder and Head of Product, Unsplash",
    src: LukeChesserHeadshotImg,
    srcSet: `${LukeChesserHeadshotImg} 1x, ${LukeChesserHeadshotImg2x} 2x`,
  },
];

export const LeadersText =
  "Leaders of the tech industry gather at Hack the North to be speakers, judges, and mentors for hackers as they build. Stay tuned as we reveal more of our guests this year.";

export const UWEngP1 =
  "Our partner for over 7 years, Waterloo Engineering continues to support Hack the North to build a creative, diverse, and unique experience for hackers. The University of Waterloo is home to Canada's largest engineering school — a pipeline for engineering talent for the world's leading companies.";

export const UWEngP2 =
  "Ranked among the top 50 engineering schools in the world, the school's reputation for excellence is build on the foundation of co-op education and a bold history of innovation.";
