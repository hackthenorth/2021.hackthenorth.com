import { TimelineMax, TweenMax } from "gsap";
import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef } from "react";
import { MLHLogoHeroImg, Water } from "src/assets/img";
import { MailingListSignup } from "src/components";
import {
  Button,
  ContentWrapper,
  SectionWrapper,
  Icon,
  Link,
} from "src/components/base";
import { Section } from "src/constants/section";
import { TWText, TWGradient, TWShared } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled, theme, css } from "twin.macro";

import LeftIsland from "./LeftIsland";
import MiddleIsland from "./MiddleIsland";
import Mountains from "./Mountains";
import RightIsland from "./RightIsland";

const Stars = dynamic(() => import("./Stars"), { ssr: false });
const Clouds = dynamic(() => import("./Clouds"), { ssr: false });

// const timeline = new TimelineMax({
//   repeat: -1,
//   yoyo: true,
// });

const HeroSection: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  // const filterRef = useRef();
  // const [baseFrequency, setBaseFrequency] = useState<string>();

  // Animation for water ripples
  // useEffect(() => {
  //   timeline.add(
  //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //     TweenMax.to(filterRef.current!, 30, {
  //       onUpdate: function () {
  //         const bfX = this.progress() * 0.005 + 0.005, //base frequency x
  //           bfY = this.progress() * 0.025 + 0.1; //base frequency y
  //         setBaseFrequency(`${bfX} ${bfY}`);
  //       },
  //     }),
  //     0
  //   );
  // }, [filterRef]);

  return (
    <SectionWrapper id={Section.LANDING} css={[TWGradient.hero]}>
      <div tw="overflow-hidden z-0">
        {/* <Background /> */}

        <Mountains />

        <LeftIsland />
        <RightIsland />
        <MiddleIsland />

        <Stars />
        <Clouds />

        <ResponsiveContentWrapper tw="relative overflow-hidden text-center">
          <Title tw="text-blue" css={[TWText.title]}>
            Hack the North
          </Title>
          <h3 css={[TWText.h3]} tw="text-green mt-8 mb-16">
            Where will your journey take you?
          </h3>
          <Details>
            <span>September 17-19, 2021 • Virtual-first event</span>
            <HideOnMobile> • </HideOnMobile>
            <span tw="flex items-center my-auto">
              <MLHLogo /> Official Member Event
            </span>
          </Details>
          {/* <MailingListSignup
            tw="flex justify-center mx-0 my-24"
            placeholder="Sign up for the latest news from Hack the North"
            mobilePlaceholder="Enter your email address to stay connected"
          >
            {isTabletOrSmaller !== undefined &&
              (isTabletOrSmaller ? (
                <Icon
                  name="send"
                  color="white"
                  width={isLargeMobileOrSmaller ? 18 : 24}
                  height={isLargeMobileOrSmaller ? 18 : 24}
                />
              ) : (
                <span tw="color[white]!" css={[TWText.body]}>
                  Submit
                </span>
              ))}
          </MailingListSignup> */}
          <HackerAppsCTA
            underlineOnHover={false}
            css={[TWShared.hover, TWText.body]}
            tw="text-white"
            newTab
            href="https://hackthenorth2021.devpost.com/project-gallery"
          >
            <div tw="flex items-center">
              View Submissions{" "}
              <Icon
                tw="inline-block pl-8"
                name="forward-white"
                width={28}
                height={20}
              />
            </div>
          </HackerAppsCTA>
          {/* 
          <AppsDetails>
            {isLargeMobileOrSmaller ? (
              <span>
                Round 2 closes <b>August 13, 2021</b> at 11:59 PM EDT
              </span>
            ) : (
              <span>
                Don&apos;t miss out! Round 2 closes <b>August 13, 2021</b> at
                11:59 PM EDT
              </span>
            )}
          </AppsDetails> */}
          {/* <Link
            css={[TWText.bodyBold, TWText.link]}
            href="mailto:sponsor@hackthenorth.com"
          >
            Interested in sponsoring?
          </Link> */}
          {/* <p css={[TWText.bodyBold]}>Applications close Feb 4 at 11:59pm EST</p> */}
        </ResponsiveContentWrapper>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute" }}
        version="1.1"
      >
        <filter
          id="turbulence"
          filterUnits="objectBoundingBox"
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <feTurbulence
            id="feturbulence"
            type="fractalNoise"
            numOctaves="3"
            seed="2"
            baseFrequency={baseFrequency}
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="G"
            yChannelSelector="B"
            scale="20"
            in="SourceGraphic"
          ></feDisplacementMap>
        </filter>
      </svg> */}
    </SectionWrapper>
  );
};

const Title = styled.h1`
  margin-top: 165px;

  ${mediaQueries.large} {
    margin-top: 150px;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 100px;
  }

  ${mediaQueries.mobile} {
    margin-top: 100px;
  }

  ${mediaQueries.smallMobile} {
    margin-top: 80px;
  }
`;

const Details = styled.div<{ children: JSX.Element | JSX.Element[] }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.3em;
  ${TWText.body}
  ${tw`text-18`}
  ${mediaQueries.largeMobile} {
    ${tw`text-12`}
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
  }
`;

const AppsDetails = styled.div<{ children: JSX.Element | JSX.Element[] }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.3em;
  ${TWText.body}
  ${tw`pb-8`}

  ${mediaQueries.largeMobile} {
    ${tw`py-0`}
  }
`;

const HideOnMobile = styled.div`
  display: default;

  ${mediaQueries.largeMobile} {
    display: none;
  }
`;

const ResponsiveContentWrapper = styled(ContentWrapper)`
  height: 100vh;
  min-height: 1100px;
  max-height: 1100px;

  ${mediaQueries.largeMobile} {
    max-height: 700px;
    min-height: 700px;
  }

  ${mediaQueries.smallMobile} {
    max-height: 650px;
    min-height: 650px;
  }
`;

const HackerAppsCTA = styled(Link)`
  ${tw`flex justify-center mx-auto mt-24 mb-16 rounded-16 py-16 px-64 cursor-pointer outline-none bg-primary-blue1 text-white border-none max-width[fit-content]`}

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

export default HeroSection;
