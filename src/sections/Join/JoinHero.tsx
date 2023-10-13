import { TimelineMax, TweenMax } from "gsap";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import { MLHLogoHeroImg, Water } from "src/assets/img";
import {
  Button,
  ContentWrapper,
  SectionWrapper,
  Icon,
  Link,
  gradientColors,
} from "src/components/base";
import { Section } from "src/constants/section";
import Stars from "src/sections/Hero/Stars";
import { TWText, TWGradient, TWShared } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled, theme, css } from "twin.macro";

import RightIslandJoin from "./RightIslandJoin";

export const JoinHeroSectionText: React.FC = () => (
  <ResponsiveContentWrapper>
    <Title css={[TWText.h1]}>Hack the North 2022 Organizer Application</Title>
    <Details>
      <p>
        Hey there!{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>{" "}
        Thanks for checking out the Hack the North 2022 organizer applications!
        Hack the North 2022 is going to be taking place this September as an
        in-person event, as safety regulations allow. This means we&apos;re
        hoping to be planning for an in-person event following COVID-19 health
        and safety guidelines, but transitioning to virtual if necessary. Below
        you will find information about all the roles we&apos;re hiring for our
        time this year.
      </p>
      <p>
        These roles are open to anybody who is currently a post-secondary
        student and will be located in Waterloo during the Winter or Spring
        terms this year. Your program, age, gender, or other personal factors
        aren&apos;t important to us; what we care about is a strong desire to
        contribute to the team and aptitude for one or more of the roles below.
      </p>
      <p>
        Please keep in mind that all organizers are required to attend All-Hands
        meetings and potentially team-specific meetings on a regular basis
        (bi-weekly or weekly). The average time commitment for team members is
        7-10 hours per week, however the exact time commitment may vary
        week-to-week depending on the role. Feel free to apply to more than one
        role if you&apos;d like, but please note that each organizer can only
        take on one role if hired.{" "}
      </p>

      <p>
        Best of luck! If you have any questions or concerns, don&apos;t hesitate
        to reach out to us at{" "}
        <Link
          css={[TWText.bodyBold, TWText.link]}
          href="mailto:hello@hackthenorth.com"
        >
          hello@hackthenorth.com!{" "}
        </Link>
        <span role="img" aria-label="smile emoji">
          😄
        </span>
      </p>
      <p css={[TWText.bodyBold]}>
        Organizer applications close on February 4, 2022 at 11:59pm EST.
      </p>
    </Details>
  </ResponsiveContentWrapper>
);

const JoinHeroSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div tw="overflow-hidden z-0">
        <div tw="lm:pt-32">
          <RightIslandJoin />
        </div>

        <Stars />
        <JoinHeroSectionText />
      </div>
    </SectionWrapper>
  );
};

const Title = styled.h1`
  margin-top: 165px;
  max-width: 540px;

  ${mediaQueries.large} {
    margin-top: 150px;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 0px;
  }
`;

const Details = styled.div<{ children: JSX.Element | JSX.Element[] }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3em;
  ${TWText.body}
  ${tw`text-16`}
  ${tw`py-32`}
  max-width: 700px;
  ${mediaQueries.large} {
    max-width: 700px;
  }
  ${mediaQueries.largeMobile} {
    ${tw`py-16`}
    flex-direction: column;
    align-items: center;
  }
  p {
    margin-bottom: 1em;
  }
`;

const StyledText = styled.p`
  ${TWText.body}
  ${tw`text-18`}
  > ol {
    padding-inline-start: 20px;
    display: list-item;
    > li {
      list-style-type: disc;
    }
  }
`;

const HideOnMobile = styled.div`
  display: default;

  ${mediaQueries.largeMobile} {
    display: none;
  }
`;

const ResponsiveContentWrapper = styled(ContentWrapper)``;

const HackerAppsCTA = styled(Link)`
  ${tw`flex justify-center mx-auto mt-24 mb-16 rounded-16 py-16 px-64 cursor-pointer outline-none bg-primary-blue1 text-white border-none`}

  ${mediaQueries.largeMobile} {
    ${tw`px-32 mt-16`}
  }
`;

const MLHLogo = styled.img.attrs({
  src: MLHLogoHeroImg,
  alt: "Logo of Major League Hacking",
})`
  position: relative;
  max-height: 16px;
  top: -2px;
  padding-right: 2px;
  ${mediaQueries.largeMobile} {
    max-height: 12px;
  }
`;

// const Background = styled.div`
//   position: absolute;
//   bottom: 0;
//   height: 40%;
//   width: calc(100% + 10px);
//   background: url(${Water});
//   background-size: cover;
// `;

export default JoinHeroSection;
