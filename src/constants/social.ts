import { IconName } from "src/components/base/Icon";

export enum SocialPlatforms {
  FACEBOOK = "Facebook",
  INSTA = "Instagram",
  TWITTER = "Twitter",
  LINKEDIN = "LinkedIn",
  MEDIUM = "Medium",
}

export const SOCIALS: Record<
  SocialPlatforms,
  { icon: IconName; link: string }
> = {
  [SocialPlatforms.FACEBOOK]: {
    icon: "facebook",
    link: "https://www.facebook.com/hackthenorth/",
  },
  [SocialPlatforms.INSTA]: {
    icon: "instagram",
    link: "https://www.instagram.com/hackthenorth",
  },
  [SocialPlatforms.TWITTER]: {
    icon: "twitter",
    link: "https://twitter.com/hackthenorth",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/hack-the-north",
  },
  [SocialPlatforms.MEDIUM]: {
    icon: "medium",
    link: "https://hackthenorth.medium.com/",
  },
};
