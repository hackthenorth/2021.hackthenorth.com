import tw from "twin.macro";
import { css } from "twin.macro";

export const TWText = {
  // Unfixed : https://github.com/tailwindlabs/tailwindcss/issues/2920
  title: tw`font-heading font-weight[900] text-blue text-68 leading-normal tb:(text-48) lm:(text-44!) mb:(text-36!)`,
  h1: tw`font-heading font-weight[900] text-blue text-44 leading-normal tb:(text-36) lm:(text-32!)`,
  h2: tw`font-heading font-weight[900] text-blue text-36 leading-normal tb:(text-32) lm:(text-28! leading-relaxed)`,
  h3: tw`font-heading font-weight[900] text-blue text-28 leading-normal tb:(text-24 leading-relaxed) lm:(text-18!) mb:(text-16!)`,
  h4: tw`font-heading font-weight[900] text-blue text-24 leading-normal tb:(text-18 leading-relaxed) lm:(text-16! leading-loose)`,
  bodyLarge: tw`font-body font-weight[bold] text-blue text-18 leading-loose tb:(text-16 leading-extra)`,
  body: tw`font-body font-weight[normal] text-blue text-16 leading-loose tb:(text-14 leading-extra)`,
  bodyBold: tw`font-body font-weight[bold] text-blue text-16 leading-loose tb:(text-14 leading-extra)`,
  cta: tw`font-body font-weight[500] text-blue text-16 leading-loose tb:(text-14 leading-extra)`,
  link: tw`text-blue2`,
  label: tw`font-body font-weight[normal] text-blue text-14 leading-extra tb:(text-12)`,
};

export const TWTransition = {
  hover: tw`hover:opacity-80 transition-all duration-100 ease-linear`,
};

export const TWGradient = {
  hero: css`
    background: linear-gradient(
      180deg,
      #c8d9eb 0%,
      #f9ecec 44.1%,
      #f9ecec 60.42%,
      #ffffff 60.43%,
      #faeeee 73.44%,
      #c8d9eb 100%
    );
  `,
  about: css`
    background: linear-gradient(180deg, #c8d9eb 0%, #f1f4f9 60.28%);
  `,
  details: css`
    background: linear-gradient(180deg, #f1f4f9 0%, #fbf2f0 100%);
  `,
  stories: css`
    background: linear-gradient(180deg, #fbf3f1 0%, #fcfaf3 100%);
  `,
  projects: css`
    background: linear-gradient(180deg, #fdfaf4 0%, #f3f7f0 100%);
  `,
  keynote: css`
    background: linear-gradient(180deg, #f3f7f0 0%, #f4f8f1 100%);
  `,
  leaders: css`
    background: linear-gradient(180deg, #f4f8f1 0%, #dce7f6 100%);
  `,
  sponsorShowcase: css`
    background: linear-gradient(180deg, #dde8f6 0%, #edeaf0 100%);
  `,
  sponsorLogos: css`
    background: linear-gradient(180deg, #edeaf1 0%, #d1deef 100%);
  `,
  uwEngineering: css`
    background: linear-gradient(180deg, #dde7f5 0%, #dde7f5 100%);
  `,
  faq: css`
    background: #d1deef;
  `,
  footer: css`
    background: linear-gradient(180deg, #d1deef 0%, #faf4e9 49.29%);
  `,
  default: css`
    background: linear-gradient(128deg, #edeaf1 0%, rgba(255, 255, 255, 0) 100%),
      #d1deef;
  `,
};

export const TWShared = {
  hover: css`
    &:hover {
      transition: opacity 200ms;
      &:not(:disabled) {
        opacity: 0.85;
      }
    }
  `,
  avatar: css`
    transform: scale(1);
    opacity: 1;
    transition: all 150ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      opacity: 0.85;
    }
  `,
  focus: css`
    &:focus {
      transition: opacity 200ms;
      &:not(:disabled) {
        opacity: 0.85;
      }
    }
  `,
  disabled: css`
    &:disabled {
      cursor: not-allowed;
      filter: grayscale(1);
    }
  `,
};

export const TWAnimation = {
  underline: css`
    position: relative;

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      transition: width 250ms;
    }
  `,
};
