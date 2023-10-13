import React from "react";
import { UWEngImg, Cloud5, Cloud4, Texture } from "src/assets/img";
import { InfiniteCarousel } from "src/components";
import {
  ContentWrapper,
  Link,
  SectionWrapper,
  Flex,
  TexturedAsset,
} from "src/components/base";
import { Section } from "src/constants";
import { LEADERS_LIST, LeadersText, UWEngP1, UWEngP2 } from "src/copy/leaders";
import { TWGradient, TWText } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import { styled } from "twin.macro";

import CarouselLeader from "./CarouselLeader";
import Lightbulb from "./Lightbulb";
import "twin.macro";

const LeaderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: visible;
  ${mediaQueries.tablet} {
    flex-direction: column-reverse;
  }
`;

const StyledCarousel = styled(InfiniteCarousel)`
  width: 160%;
  margin: 0 auto;
  margin-left: -30%;
  mask-image: linear-gradient(
    to right,
    transparent,
    black,
    black,
    black,
    black,
    transparent
  );

  ${mediaQueries.large} {
    width: 100%;
    margin-left: 0;
  }
`;

const FloatingCloud = styled.div`
  position: absolute;
  width: 560px;
  height: auto;
  top: 830px;
  right: 80px;

  ${mediaQueries.large} {
    top: 800px;
    right: -100px;
  }

  ${mediaQueries.medium} {
    display: none;
  }
`;

const FloatingCloud2 = styled.div`
  position: absolute;
  width: 1000px;
  height: auto;
  top: 1300px;
  right: -300px;

  ${mediaQueries.medium} {
    display: none;
  }
`;

const Leaders: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");

  return (
    <SectionWrapper id={Section.LEADERS} css={[TWGradient.leaders]}>
      <FloatingCloud>
        <Cloud5 />
      </FloatingCloud>

      <FloatingCloud2>
        <Cloud4 />
      </FloatingCloud2>
      <ContentWrapper tw="flex flex-col content-center overflow-visible mb-48">
        <div tw="h-196 md:h-88"></div>
        <LeaderText>
          <div tw="flex flex-1 flex-col justify-end z-10">
            <h1 css={[TWText.h1]} tw="pb-32">
              Get inspired by industry leaders
            </h1>
            <p css={[TWText.body]}>{LeadersText}</p>
            <p css={[TWText.body]} tw="mt-16">
              Know someone who’d like to speak? Send us an email at{" "}
              <Link href="mailto:hello@hackthenorth.com">
                <b>hello@hackthenorth.com</b>
              </Link>
              .
            </p>
          </div>
          <Lightbulb />
        </LeaderText>
        <StyledCarousel
          name="leaders"
          spacing={isTabletOrSmaller ? 16 : 32}
          speed={40}
          stopOnHover
          aria-label="Leaders Carousel"
          tw="mt-96"
        >
          {LEADERS_LIST.map((leader) => (
            <CarouselLeader key={leader.name} {...leader} />
          ))}
        </StyledCarousel>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Leaders;
