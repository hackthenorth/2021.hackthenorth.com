import React, { useState } from "react";
import { FooterRocks, WavePattern } from "src/assets/img";
import { MailingListSignup, DidWeMissAnything } from "src/components";
import {
  ContentWrapper,
  Link,
  SectionWrapper,
  Icon,
} from "src/components/base";
import { Section } from "src/constants";
import { SOCIALS, SocialPlatforms } from "src/constants/social";
import { TWGradient, TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import tw, { styled } from "twin.macro";

import Boat from "./Boat";
import HouseIsland from "./HouseIsland";
import OrganizerCarousel from "./OrganizerCarousel";
import { Organizer } from "./OrganizerCarousel/organizers";

interface OrganizerText {
  isHidden: boolean;
}

const DEFAULT_ORGANIZER_TEXT = "";
const DEFAULT_EMOJI = "🇨🇦";

const Footer: React.FC = () => {
  const [isHovering, setHovering] = useState(false);
  const [emoji, setEmoji] = useState(DEFAULT_EMOJI);
  const [organizerName, setOrganizerName] = useState("");
  const [organizerText, setOrganizerText] = useState(DEFAULT_ORGANIZER_TEXT);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  const handleOnLeave = () => {
    setHovering(false);
    setEmoji(DEFAULT_EMOJI);
  };

  const handleOnHover = (organizer: Organizer) => {
    setOrganizerText(`${organizer.name}, ${organizer.team}`);
    setOrganizerName(organizer.name);
    setEmoji(organizer.emoji);
    setHovering(true);
  };

  return (
    <SectionWrapper id={Section.FOOTER} css={[TWGradient.footer]}>
      <div tw="h-196 md:h-88"></div>
      <ContentWrapper>
        <DidWeMissAnything />
      </ContentWrapper>

      <div tw="h-128 tb:h-240"></div>

      <div tw="relative">
        <Boat hovering={isHovering} organizer={organizerName} />
        <HouseIsland />

        <Background tw="z-20">
          <ContentWrapper
            id="organizerFooterSection"
            tw="pt-112 lm:pt-120 pb-24 lm:pb-0 tb:-mb-2"
          >
            <div tw="m-16 flex flex-col justify-evenly items-center text-center">
              <h3
                css={[
                  isLargeMobileOrSmaller ? TWText.body : TWText.h3,
                  tw`font-bold text-white`,
                ]}
              >
                Made with{" "}
                <span role="img" aria-label="heart emoji">
                  💛
                </span>{" "}
                for students by students{" "}
                <span role="img" aria-label="favourite-emoji">
                  {emoji}
                </span>
              </h3>
              <OrganizerText aria-hidden={!isHovering} isHidden={!isHovering}>
                {organizerText}
              </OrganizerText>
            </div>
            <div tw="mt-64" />
            <OrganizerCarousel
              rowNum={0}
              handleOnHover={handleOnHover}
              handleOnLeave={handleOnLeave}
            />
            <div tw="mt-32" />
            <OrganizerCarousel
              rowNum={1}
              handleOnHover={handleOnHover}
              handleOnLeave={handleOnLeave}
            />
          </ContentWrapper>
          <FooterRocksWrapper>
            <StyledFooterRocks />
          </FooterRocksWrapper>
        </Background>
      </div>
      <BottomBar tw="tb:flex tb:flex-col">
        <div tw="flex items-end tb:items-center p-32 tb:p-0 tb:pt-32 z-20 tb:flex-col">
          <Link css={[TWText.body]} tw="text-white" href="/code-of-conduct">
            Code of Conduct
          </Link>
          <div tw="w-40 lm:h-10" />

          <Link
            css={[TWText.body]}
            tw="text-white"
            href="https://github.com/hackathon"
          >
            Open Source
          </Link>
          <div tw="w-40 lm:h-10" />

          <Link css={[TWText.body]} tw="text-white" href="/privacy">
            Privacy Policy
          </Link>
          <div tw="w-40 lm:h-10" />

          <Link
            css={[TWText.body]}
            tw="text-white"
            href="http://2020.hackthenorth.com/"
          >
            2020++
          </Link>
        </div>
        <div tw="p-32 z-20 text-center">
          <p css={[TWText.body]} tw="text-white">
            Copyright Techyon ©
          </p>
        </div>
      </BottomBar>
    </SectionWrapper>
  );
};

const FooterRocksWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -1px;
  z-index: 20;
  pointer-events: none;
`;

const StyledFooterRocks = styled(
  FooterRocks as unknown as React.FC<React.SVGProps<SVGSVGElement>>
)`
  width: 100%;
  height: 270px;

  ${mediaQueries.tablet} {
    width: 100%;
    height: auto;
  }
`;

const OrganizerText = styled.h3<OrganizerText>(({ isHidden }) => [
  isHidden ? tw`opacity-0` : tw`opacity-100`,
  TWText.body,
  tw`absolute mt-96 text-white`,
]);

const BottomBar = tw.div`
  flex bg-secondary-dark-blue flex-nowrap justify-between
`;

const Background = styled.div`
  position: relative;
  background: url(${WavePattern}),
    linear-gradient(to bottom, transparent 0%, #345875 100%);
  background-repeat: repeat-x;
  background-position: top;
  margin-bottom: -5px;

  ${mediaQueries.largeMobile} {
    background-size: cover;
    background-position: top 0 left 100%;
  }
`;

export default Footer;
