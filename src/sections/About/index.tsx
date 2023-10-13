import React from "react";
import {
  ContentWrapper,
  Link,
  SectionWrapper,
  Flex,
} from "src/components/base";
import { Section } from "src/constants";
import { TWGradient, TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { styled } from "twin.macro";

import Lighthouse from "./Lighthouse";
import StatCarousel from "./StatCarousel";

const AboutWrapper = styled.div`
  padding: 0px;
`;

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  flex: 1;
`;

const About: React.FC = () => {
  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <SectionWrapper id={Section.ABOUT} css={[TWGradient.about]}>
      <ContentWrapper tw="overflow-visible">
        <AboutWrapper>
          <StatCarousel />

          <div tw="h-160 md:h-128"></div>

          {isMediumOrSmaller !== undefined && (
            <Flex column={isMediumOrSmaller} reverse={isMediumOrSmaller}>
              <Lighthouse />

              <AboutTextWrapper>
                <h1 css={[TWText.h1]} tw="block">
                  Canada’s biggest hackathon
                </h1>
                <div tw="h-32"></div>
                <p css={[TWText.body]} tw="block">
                  Our mission at Hack the North is to empower students of all
                  experience levels and backgrounds to dream big and build a
                  project from scratch. Join 3,000+ students across the globe
                  for an unforgettable 36 hours of connecting, learning, and
                  creating. We’ll handle all the details so that you can focus
                  on turning your ideas into reality.
                </p>
                <div tw="h-32"></div>

                <h1 css={[TWText.h1]} tw="block">
                  You belong in tech
                </h1>
                <div tw="h-32"></div>
                <p css={[TWText.body]} tw="block">
                  Getting into tech can be hard. We’re here to make that easier.
                  Hack the North is dedicated to building an inclusive and
                  equitable experience for our attendees coming in from
                  different backgrounds and experiences all across the globe. By
                  being mindful of diversity, equity, and inclusion in our work,
                  we strive to foster a safe space where everyone feels welcomed
                  and has a chance to pursue their dreams.
                </p>
                <div tw="h-32"></div>

                <h1 css={[TWText.h1]} tw="block">
                  Gear Up
                  <span role="img" aria-label="favourite-emoji">
                    {" "}
                    ⚙️{" "}
                  </span>
                </h1>
                <div tw="h-32"></div>
                <p css={[TWText.body]} tw="block">
                  Gear Up is a pre-hackathon event designed to help you navigate
                  the tech industry. In the week leading up to Hack the North
                  2021, we will be hosting a variety of workshops, career
                  sessions, and tech talks, giving anyone a deep dive into
                  skills, tools, and technologies that will make it easy to
                  dream big and build.
                </p>
                <div tw="h-16"></div>
                <p css={[TWText.body]} tw="block">
                  Best of all, Gear Up is a public event, which means everyone
                  is welcome to join us!
                </p>
              </AboutTextWrapper>
            </Flex>
          )}
        </AboutWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default About;
