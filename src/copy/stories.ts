import { AdrianaHeadshotImg } from "src/assets/img";
import { SatHeadshotImg } from "src/assets/img";
import { IrisHeadshotImg } from "src/assets/img";
import { AashiHeadshotImg } from "src/assets/img";
import { AbiufoHeadshotImg } from "src/assets/img";
import { LeoHeadshotImg } from "src/assets/img";

export interface StoryInfo {
  name: string;
  title: string;
  story: string;
  imgSrc: string;
}

export const STORIES_LIST: StoryInfo[] = [
  {
    name: "Adriana Ceric",
    title: "Experienced Hacker",
    story:
      "I came in a little intimidated, choosing to pair up with (what once were) complete strangers not knowing what to expect at such a large hackathon. I came out with several new friends, a new sense of confidence, a learned language, improved skills in Figma and, of course, amazing swag.",
    imgSrc: AdrianaHeadshotImg,
  },
  {
    name: "Sat Arora",
    title: "Experienced Hacker",
    story:
      "I feel that Hack the North 2020++ was a great way for me to connect with friends and merge our skills to create a working product. Looking back, it was one of the most fun weekends since this quarantine started, as there was an active mission to strive for. Outside of the hacking, my favorite part of the hackathon was listening to the keynote speakers give their wisdom about jobs and careers in technology.",
    imgSrc: SatHeadshotImg,
  },
  {
    name: "Iris Guo",
    title: "Experienced Hacker",
    story:
      "It was quite special that my startup Neutrify was born during Hack the North 2020++ and we continued with most of our initial hackathon team to keep building our food sustainability startup. With the mission of empowering individuals to take action to fight climate change, we founded Neutrify to shift food consumption behaviours towards sustainable food.",
    imgSrc: IrisHeadshotImg,
  },
  {
    name: "Aashi Mehrotra",
    title: "First-time Hacker",
    story:
      "This was my first time hacking and it was incredible! I worked in a team that I formed after joining the Discord server. They were friendly, and I had a very enjoyable time working with them; we collaborated and discussed ideas for the project, we stayed up all night finishing it off, and we had so much fun talking to other groups about their ideas. The atmosphere was welcoming, and everyone was interested in technology which made for easy companionship. Overall, this was an experience which I would love to repeat, and, if you haven't hacked yet, Hack the North would be the perfect starting point.",
    imgSrc: AashiHeadshotImg,
  },
  {
    name: "Abiufo Dan-Abia",
    title: "First-time Hacker",
    story:
      "The Web Development session was my favorite session of all. It made it all seem so possible, contrary to my initial outlook of coding. In about 50 minutes, I was able to follow along and make a personal site which was basic, but I was genuinely satisfied that I could learn it in the first place.",
    imgSrc: AbiufoHeadshotImg,
  },
  {
    name: "Leo Huang",
    title: "First-time Hacker",
    story:
      "One of the greatest parts about Hack the North 2020++ is the platform it provides for first time hackers to get to know one another, learn about the strengths of the people on their team, and work together to create something incredible. My favourite memory was actually during a brainstorming session with my group where we would come up with the most idealistic and impractical ideas and laugh our heads off after realizing how unrealistic our concepts were. It would soon prove to be the unforgettable team bonding moment of the weekend.",
    imgSrc: LeoHeadshotImg,
  },
];
